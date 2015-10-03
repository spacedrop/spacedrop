SD.Menu.route({
  path: '/user',
  page_component: User.Home
});

SD.Menu.route({
  path: '/user/:uid',
  page_component: User.User,
  subscriptions: {
    'user.user': ['uid']
  }
});
