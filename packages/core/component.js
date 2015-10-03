SD.Component = class extends React.Component {
  constructor(props) {
    super(props);
    this.comp = {};
    this.subs = {};
  }
  componentWillUnmount() {
    _.each(this.comp, (comp) => {
      if (stop in comp) {
        comp.stop();
      }
    });
    _.each(this.subs, (sub) => {
      if (stop in sub) {
        sub.stop();
      }
    });
  }
}
