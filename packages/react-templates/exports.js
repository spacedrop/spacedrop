// Build out Handlebars basic SafeString type
ReactTemplate.SafeString = function(string) {
  this.string = string;
}
ReactTemplate.SafeString.prototype.toString = ReactTemplate.SafeString.prototype.toHTML = function() {
  return '' + this.string;
};

ReactTemplate.classNames = function(obj) {
  this.obj = obj;
}
ReactTemplate.classNames.prototype.toString = ReactTemplate.classNames.prototype.toHTML = function() {
  return '' + new ReactTemplate.SafeString(ReactTemplate._classNames(this.obj));
};

ReactTemplate.check = function(context, string) {
  var tests = string.split('.');
  if (!context) {
    return false;
  }
  var obj = context;
  _.each(tests, function(test) {
    if (!obj) {
      return false;
    }
    obj = obj[test];
    if (!obj || !_.has(obj, string)) {
      return false;
    }
  });
  return obj;
}
