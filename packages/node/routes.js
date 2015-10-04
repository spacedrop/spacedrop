SD.Menu.route({
  path: '/node/:nid',
  component: SD.Views.Node,
  subscriptions: {
    'node.node': ['nid']
  },
  'access arguments': ['access content']
});
