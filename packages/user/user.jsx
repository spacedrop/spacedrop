UserHome = class UserHome extends SpaceDrop.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: Meteor.user()
    };
  }
  componentDidMount() {
    this.comp.user = Tracker.autorun(() => {
      this.setState({
        user: Meteor.user()
      });
    });
  }
  render() {
    return (<div>
        {this.state.user && this.state.user._id == Meteor.userId() ? (
          <div>Logged in</div>
        ):(
          <BlazeInReact template='loginButtons' />
        )}
      </div>);
  }
};

UserUser = class UserUser extends SpaceDrop.Component {
  constructor(props) {
    super(props);
    // var user;
    console.log('yp');
    // var route = Menu.current();
    // var username = route.params ? route.params.username : false;
    // if (username) {
    //   user = Meteor.users.findOne({username: username});
    // }
    // this.state = {
    //   user: user,
    //   ready: Meteor.isServer
    // };
  }
  componentDidMount() {
    this.comp.user = Tracker.autorun(() => {
      var user;
      // var username = this.props.params.get('username');
      // if (username) {
      //   this.subs.user = Meteor.subscribe('user.user', username);
      //   user = Meteor.users.findOne({username: username});
      // }
      // else {
      //   this.subs.user.stop();
      // }
      this.setState({
        user: user,
        ready: this.subs.user ? this.subs.user.ready() : true
      });
    });
  }
  render() {
    return (<div>
      {this.state.ready ? (
        this.state.user ? (
          <div>{this.state.user.username}</div>
        ):(
          <div>Not found</div>
        )
      ):'Not ready'}
      </div>);
  }
};
