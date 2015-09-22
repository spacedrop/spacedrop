Menu.route({
  path: '/user',
  page_component: User.Home
});

Menu.route({
  path: '/user/:uid',
  page_component: User.User,
  subscriptions: {
    'user.user': ['uid']
  }
});
