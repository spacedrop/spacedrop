Meteor.users.before.insert(function(userId, doc, fieldNames, modifier, options) {
  var user = Meteor.users.findOne({}, {sort: {uid: -1}});
  var currentId = user ? user.uid : 0;
  doc.uid = currentId + 1;
});
