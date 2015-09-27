Package.describe({
  name: 'spacedrop:basecollection',
  version: '0.0.1',
  summary: 'Structure basecollection class for SpaceDrop',
  documentation: 'README.md',
  git: 'https://github.com/spacedrop/spacedrop.git'
});

Package.onUse(function(api) {
  // Meteor's API version
  api.versionsFrom('1.2');
  // Dependencies of this package
  // Dependencies for server and client
  const shared = [
    'ecmascript',
    'es5-shim',
    'aldeed:collection2@2.5.0',
    'dburles:collection-helpers@1.0.3',
    'spacedrop:namespaces',
    'pierreeric:logger',
    'spacedrop:subscription-cache'
  ];
  api.use(shared);
  api.imply(shared);
  // Included files in this packages
  // Files for server and client
  api.addFiles([
    'basecollection.js',
  ]);
});
