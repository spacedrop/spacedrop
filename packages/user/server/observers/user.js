Meteor.users.before.insert(function(userId, doc, fieldNames, modifier, options) {
  const user = Meteor.users.findOne({}, {sort: {uid: -1}});
  const currentId = user ? user.uid : 0;
  doc.uid = currentId + 1;
});
