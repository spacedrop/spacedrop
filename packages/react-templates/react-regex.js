ReactRegex = [
  // Add return and key={index} inside {{#each}}.
  {
    regex: /({{#each\s+[^}]+}}[^<]*)(<\w+)/g,
    replace: "$1return ($2 key={index}"
  },
  // {{#each}} in
  {
    regex: /{{#each\s+([^\s]+)\s+in\s+([^}]+)\s*}}/g,
    replace: "{(ReactTemplate.check(context, '$2') ? context.$2 : []).map(function($1, index){let context=__component.data;context.$1=$1"
  },
  // {{/each}}
  {
    regex: /{{\/each}}/g,
    replace: ");})}"
  },
  // ^{{#if}}
  {
    regex: /^\W*{{#if\s+([\w]+)\s*}}/g,
    replace: "<span>{ReactTemplate.check(context, '$1') ? ("
  },
  // ^{{#if ...}}
  {
    regex: /^\W*{{#if\s+(.+)\s*}}/g,
    replace: "<span>{$1 ? ("
  },
  // {{else}} {{/if}}$
  {
    regex: /(?:{{else}}(?![\w\W]*{{else}}))([\w\W]*){{\/if}}\W*$/g,
    replace: "):($1)}</span>"
  },
  // {{/if}}$
  {
    regex: /{{\/if}}\W*$/g,
    replace: "):''}</span>"
  },

  // {{#if}}
  {
    regex: /{{#if\s+(\w+)\s*}}/g,
    replace: "{ReactTemplate.check(context, '$1') ? ("
  },
  // {{else}} {{/if}}
  {
    regex: /(?:{{else}}(?![\w\W]*{{else}}))([\w\W]*){{\/if}}/g,
    replace: "):($1)}"
  },
  // {{/if}}
  {
    regex: /{{\/if}}/g,
    replace: "):''}"
  },
  // ^{{#unless}}
  {
    regex: /^\W*{{#unless\s+(\w+)\s*}}/g,
    replace: "<span>{!ReactTemplate.check(context, '$1') ? ("
  },
  // {{/unless}}$
  {
    regex: /{{\/unless}}\W*$/g,
    replace: "):''}</span>"
  },
  // {{#unless}}
  {
    regex: /{{#unless\s+(\w+)\s*}}/g,
    replace: "{!ReactTemplate.check(context, '$1') ? ("
  },
  // {{else}} {{/unless}}
  {
    regex: /(?:{{else}}(?![\w\W]*{{else}}))([\w\W]*){{\/unless}}/g,
    replace: "):($1)}"
  },

  // {{/unless}}
  {
    regex: /{{\/unless}}/g,
    replace: "):''}"
  },

  // {{helper}} raw HTML
  {
    regex: /{{{([^}]*)}}}/g,
    replace: "{ReactTemplate.check(context, '$1') ? context.data.$1 : ''}"
  },
  // {{helper}} SafeString – Dynamic Attribute (class)
  {
    regex: /\sclass={{([^}]*)}}/g,
    replace: " className={ReactTemplate.check(context, '$1') ? '' + new ReactTemplate.classNames(context.$1) : ''}"
  },

  // {{helper}} SafeString – Dynamic Attribute (other)
  {
    regex: /={{([^}]*)}}/g,
    replace: "={ReactTemplate.check(context, '$1') ? '' + new ReactTemplate.SafeString(context.$1) : ''}"
  },

  // {{helper}} SafeString – In Attribute Values (class)
  {
    regex: /\sclass="([^\"{]*){{([^}]*)}}([^\"{]*)\"/g,
    replace: " className={ReactTemplate.check(context, '$2') ? '$1' + new ReactTemplate.classNames(context.$2) + '$3' : ''}"
  },
  // {{helper}} SafeString – In Attribute Values (other)
  {
    regex: /="([^\"{]*){{([^}]*)}}([^\"{]*)\"/g,
    replace: "={ReactTemplate.check(context, '$2')? '$1' + new ReactTemplate.classNames(context.$2) + '$3' : ''}"
  },
  // {{helper}} SafeString
  {
    regex: /{{([^}]*)}}/g,
    replace: "{ReactTemplate.check(context, '$1') ? '' + new ReactTemplate.SafeString(context.$1) : ''}"
  },
  // Fix that annoying issue with React, and allow usage of class.
  {
    regex: /\sclass=/g,
    replace: " className="
  },
  // Fix that annoying issue with React, and allow usage of for.
  {
    regex: /\sfor=/g,
    replace: " htmlFor="
  },
  // Fix that annoying issue with React, and allow usage of tabindex.
  {
    regex: /\stabindex=/g,
    replace: " tabIndex="
  }
];
