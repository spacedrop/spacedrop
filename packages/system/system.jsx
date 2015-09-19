System = class System extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>Administrative settings.</div>
    );
  }
}

Front = class Front extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>Welcome to SpaceDrop.</div>
    );
  }
}

Menu.route({
  path: '/admin/settings',
  page_component: System
});

Menu.route({
  path: '/',
  page_component: Front
});
