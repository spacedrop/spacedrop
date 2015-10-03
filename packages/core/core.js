SD.Component = class extends React.Component {
  constructor(props) {
    super(props);
    this.comp = {};
    this.subs = {};
  }
  componentWillUnmount() {
    _.each(this.comp, (comp) => {
      comp.stop();
    });
    _.each(this.subs, (subs) => {
      subs.stop();
    });
  }
}
