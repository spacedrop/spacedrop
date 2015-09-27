Package.describe({
  name: 'spacedrop:namespaces',
  version: '0.0.1',
  summary: 'Namespace for SpaceDrop',
  documentation: 'README.md',
  git: 'https://github.com/spacedrop/spacedrop.git'
});

Package.onUse(function(api) {
  // Meteor's API version
  api.versionsFrom('1.2');
  // Included files in this packages
  // Files for server and client
  api.addFiles('namespaces.js');
  // Exported symbols outside the scope of this package
  api.export(['SD']);
});
