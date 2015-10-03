SD.Menu.route({
  path: '/node/:nid',
  page_component: SD.Views.Node,
  subscriptions: {
    'node.node': ['nid']
  },
  'access arguments': ['access content']
});
