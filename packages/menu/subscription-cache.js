// Subscription cache with a cache limit and an expiration
SD.Utils.SubsManager = new SubsManager({
  // Maximum number of cached subscriptions
  cacheLimit: 10,
  // Expiration in minutes
  expireIn: 5
});
