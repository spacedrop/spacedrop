Meteor.publish('user.user', function(username) {
  return Meteor.users.find({username: username}, {fields: {
    username: 1
  }, limit: 1});
});
