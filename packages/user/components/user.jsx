User.User = class User extends SpaceDrop.Component {
  constructor(props) {
    super(props);
    var user;
    var uid = this.props.params ? this.props.params.uid : false;
    if (uid) {
      user = Meteor.users.findOne({uid: parseInt(uid)});
    }
    this.state = {
      user: user
    };
  }
  componentDidMount() {
    this.comp.user = Tracker.autorun(() => {
      var user;
      var uid = this.props.params.uid;
      if (uid) {
        this.subs.user = Meteor.subscribe('user.user', uid);
        user = Meteor.users.findOne({uid: parseInt(uid)});
      }
      else {
        this.subs.user.stop();
      }
      this.setState({
        user: user,
        ready: this.subs.user ? this.subs.user.ready() : true
      });
    });
  }
  render() {
    return (<div>
      {this.state.user ? (
        <div>{this.state.user.uid}</div>
      ):(
        <div>Not found</div>
      )}
      </div>);
  }
};
