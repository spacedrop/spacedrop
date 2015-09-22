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

  var packages = [
    'accounts-base',
    'accounts-password',
    'accounts-ui',
    'templating',

    'matb33:collection-hooks'
  ];

  api.use(packages);

  api.imply(packages);

  api.use([
    'spacedrop:core',
    'spacedrop:menu'
  ]);

  api.addFiles('user.js');
  api.addFiles('components/home.jsx');
  api.addFiles('components/user.jsx');
  api.addFiles('routes.jsx');

  api.addFiles('accounts-config.js', 'client');

  api.addFiles('server/publications/user.js', 'server');
  api.addFiles('server/observers/user.js', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('user');
  api.addFiles('user-tests.js');
});
