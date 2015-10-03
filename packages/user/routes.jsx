SD.Menu.route({
  path: '/user',
  page_component: SD.Views.Client.UserHome
});

SD.Menu.route({
  path: '/user/:uid',
  page_component: SD.Views.Client.User,
  subscriptions: {
    'user.user': ['uid']
  }
});
