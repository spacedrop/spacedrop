User.Home = class Home extends SpaceDrop.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.comp.user = Tracker.autorun(() => {
      Meteor.user();
      this.forceUpdate();
    });
  }
  render() {
    return ReactTemplate.Home(this.state);
  }
};
