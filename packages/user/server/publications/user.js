Meteor.publish('user.user', function(uid) {
  return Meteor.users.find({uid: parseInt(uid)}, {
    fields: {
      uid: 1
    }
  });
});

Meteor.publish(null, function() {
  return Meteor.users.find({_id: this.userId}, {fields: {uid: 1}});
});
