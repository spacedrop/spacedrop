Menu.route({
  path: '/user',
  page_component: Home
});

Menu.route({
  path: '/user/:uid',
  page_component: User,
  subscriptions: {
    'user.user': ['uid']
  }
});
