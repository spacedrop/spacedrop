Package.describe({
  name: 'spacedrop:core',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');

  const shared = [
    'meteor-base',
    'mongo',
    'jquery',
    'tracker',
    'standard-minifiers',
    'es5-shim',
    'ecmascript',
    'react'
  ];
  api.use(shared);
  api.imply(shared);

  api.addFiles('namespaces.js');
  api.addFiles('component.js');

  // Exported symbols outside the scope of this package
  api.export(['SD']);

  // Added Blaze support in React.
  api.addFiles('blaze-in-react.js');
  api.export('BlazeInReact');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('core');
  api.addFiles('core-tests.js');
});
