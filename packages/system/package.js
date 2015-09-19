Package.describe({
  name: 'spacedrop:system',
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
  api.versionsFrom('1.2-rc.12');

  api.use([
    'spacedrop:core',
    'spacedrop:menu'
  ]);

  api.addFiles('system.jsx');

  api.export('System');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('system');
  api.addFiles('system-tests.js');
});
