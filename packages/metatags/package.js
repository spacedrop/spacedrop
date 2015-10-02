Package.describe({
  name: 'spacedrop:metatags',
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

  api.use(['spacedrop:core@0.0.1']);

  var packages = [
    'gadicohen:sitemaps',
    'gadicohen:robots-txt',
    'kadira:dochead@1.2.2',
    'reactive-dict'
  ];

  api.use(packages);

  api.imply(packages);

  api.addFiles('metatags.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('metatags');
  api.addFiles('metatags-tests.js');
});
