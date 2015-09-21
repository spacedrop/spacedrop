Menu.route({
  path: '/user',
  page_component: UserHome
});

Menu.route({
  path: '/users',
  page_component: UserHome
});

Menu.route({
  path: '/users/:username',
  page_component: UserUser,
  subscriptions: {
    'user.user': []
  }
});
