SpaceDrop = {
  Component: class Component extends React.Component {
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
}

ReactTemplate = {};
ReactTemplate.User = {a: 1};
