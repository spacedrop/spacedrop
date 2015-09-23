class ReactTemplate {
  constructor(source) {
    this._source = source;
  }
  static compile(className, markup) {
    markup = ReactTemplate.appendEventMap(className, markup);

    ReactRegex.forEach(function (obj) {
      // console.log(markup, '\n');
      markup = markup.replace(obj.regex, obj.replace);
    });

    // console.log(markup, '\n');

    return markup;
  }
  static appendEventMap(className, markup) {
    // if (GLOBAL.eventMaps[className]) {
    //
    // }
    return markup;
  }
  parse(source) {
    var jsx = "";
    // Find and start parsing and compiling each templates.
    var parts = source.split(/<template name="(\w+)">/i);
    var extras = parts[0];
    for(var i=1; i <= parts.length-1; i+=2) {
      var className = parts[i];

      // Split out the trailing end after the template.
      var code = parts[i+1].split(/<\/template>/i);
      var markup = ReactTemplate.compile(className, code[0] || '');

      jsx += `ReactTemplate.${className} = (context) => { return (${markup}) };\n`;
    }

    return jsx;
  }
  toString() {
    return this.parse(this._source);
  }
}

ReactTemplateCompiler = class ReactTemplateCompiler {
  processFilesForTarget(inputFiles) {
    inputFiles.forEach(function (inputFile) {
      var source = inputFile.getContentsAsString();
      var inputFilePath = inputFile.getPathInPackage();
      var outputFilePath = inputFile.getPathInPackage();
      var fileOptions = inputFile.getFileOptions();
      var toBeAdded = {
        sourcePath: outputFilePath,
        path: outputFilePath.replace('.jsx.html', '.jsx.js'),
        data: source,
        hash: inputFile.getSourceHash(),
        sourceMap: null,
        bare: !! fileOptions.bare
      };

      var jsx = new ReactTemplate(source);
      var result = ReactTemplateCompiler.transpileJSX(jsx, inputFile);
      toBeAdded.data = result.code;
      toBeAdded.hash = result.hash;
      toBeAdded.sourceMap = result.map;

      inputFile.addJavaScript(toBeAdded);
    });
  }
  static transpileJSX(jsx, inputFile) {
    // Capture jsx failures in compiling.
    try {
      var result = Babel.transformMeteor("" + jsx, {
        sourceMap: true,
        filename: inputFile.getPathInPackage(),
        sourceMapName: inputFile.getPathInPackage(),
        extraWhitelist: ["react"]
      });
    } catch (e) {
      if (e.loc) {
        // Babel error
        inputFile.error({
          message: e.message,
          sourcePath: inputFile.getPathInPackage(),
          line: e.loc.line,
          column: e.loc.column
        });

        console.log('\n\n\n');
        console.log(inputFile.getPathInPackage());
        console.log('=====================');
        console.log(inputFile.getContentsAsString());
        var lines = ("" + jsx).split(/\n/g);
        _.each(lines, function(line, i) {
          console.log((i+1) + '  ', line);
        });

        return;
      } else {
        throw e;
      }
    }

    return result;
  }
};

Plugin.registerCompiler({
  extensions: ['html.jsx']
}, function () {
  return new ReactTemplateCompiler();
});
