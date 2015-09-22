User.Home = class Home extends SpaceDrop.Component {
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
