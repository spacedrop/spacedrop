Package.describe({
  name: 'spacedrop:node',
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

  api.use([
    'spacedrop:core@0.0.1',
    'spacedrop:entity@0.0.1',
    'spacedrop:permission@0.0.1',
    'spacedrop:menu@0.0.1'
  ]);

  // Templates.
  api.addFiles('templates/node.html.jsx');

  // Components
  api.addFiles('components/node.jsx');

  // Routing
  api.addFiles('routes.js');

  api.addFiles('node.js');
  api.addFiles('permissions.js');

  // Publications.
  api.addFiles('server/publications/node.js', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('node');
  api.addFiles('node-tests.js');
});
