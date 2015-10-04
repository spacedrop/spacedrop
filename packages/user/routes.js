SD.Menu.route({
  path: '/user',
  component: SD.Views.UserHome
});

SD.Menu.route({
  path: '/user/:uid',
  component: SD.Views.User,
  subscriptions: {
    'user.user': ['uid']
  }
});
