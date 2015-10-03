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
  api.versionsFrom('1.2');

  // External dependencies.
  var packages = [
    'timbrandin:react-templates'
  ];

  api.use(packages);
  api.imply(packages);

  api.use([
    'spacedrop:core',
    'spacedrop:menu'
  ]);

  // Templates.
  api.addFiles('templates/front.html.jsx');
  api.addFiles('templates/settings.html.jsx');

  // Components
  api.addFiles('components/front.jsx');
  api.addFiles('components/settings.jsx');

  // Routing
  api.addFiles('routes.jsx');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('system');
  api.addFiles('system-tests.js');
});
