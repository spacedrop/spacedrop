Meteor.publish('node.node', function(nid) {
  return SD.Structure.Node.find({nid: nid});
});
