SD.Menu.route({
  path: '/user',
  page_component: SD.Views.UserHome
});

SD.Menu.route({
  path: '/user/:uid',
  page_component: SD.Views.User,
  subscriptions: {
    'user.user': ['uid']
  }
});
