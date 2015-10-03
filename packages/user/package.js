Package.describe({
  name: 'spacedrop:user',
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
    'accounts-base',
    'accounts-password',
    'accounts-ui',
    'templating',

    'matb33:collection-hooks',
    'timbrandin:react-templates'
  ];

  api.use(packages);
  api.imply(packages);

  // Internal dependencies.
  api.use([
    'spacedrop:core',
    'spacedrop:menu'
  ]);

  // Templates.
  api.addFiles('templates/user.html.jsx');
  api.addFiles('templates/home.html.jsx');

  // Components
  api.addFiles('components/home.jsx');
  api.addFiles('components/user.jsx');

  // Routing
  api.addFiles('routes.js');

  // Configuration
  api.addFiles('accounts-config.js', 'client');

  // Publications.
  api.addFiles('server/publications/user.js', 'server');

  // Observers.
  api.addFiles('server/observers/user.js', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('user');
  api.addFiles('user-tests.js');
});
