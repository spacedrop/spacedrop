Package.describe({
  name: 'spacedrop:entity',
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
    'aldeed:collection2@2.5.0',
    'dburles:collection-helpers@1.0.3'
  ];
  api.use(shared);
  api.imply(shared);

  api.use(['spacedrop:core@0.0.1']);

  api.addFiles('entity.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('entity');
  api.addFiles('entity-tests.js');
});
