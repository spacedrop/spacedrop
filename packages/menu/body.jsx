Body = class Body extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>{this.props.content}</section>
    )
  }
}
