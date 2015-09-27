Package.describe({
  name: 'spacedrop:subscription-cache',
  version: '0.0.1',
  summary: 'Subscription cache for SpaceDrop',
  documentation: 'README.md',
  git: 'https://github.com/spacedrop/spacedrop.git'
});

Package.onUse(function(api) {
  // Meteor's API version
  api.versionsFrom('1.2');
  // Dependencies of this package
  // Dependencies for server and client
  const shared = [
    'meteorhacks:subs-manager@1.6.2',
    'spacedrop:namespaces'
  ];
  api.use([
    'pierreeric:logger'
  ].concat(shared));
  // Expose namespaces and subs-manager
  api.imply(shared);
  // Included files in this packages
  // Files for server and client
  api.addFiles([
    'subscription-cache.js',
  ]);
});
