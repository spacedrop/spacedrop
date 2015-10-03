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

  // Base Packages.
  const packages = [
    'meteor-base',
    'mongo',
    'jquery',
    'tracker',
    'standard-minifiers',
    'es5-shim',
    'ecmascript',
    'react',

    'spacedrop:namespaces'
  ];

  api.use(packages);

  api.imply(packages);

  api.addFiles('core.js');
  api.addFiles('blaze-in-react.js');

  api.export('BlazeInReact');
  api.export('SpaceDrop');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('core');
  api.addFiles('core-tests.js');
});
