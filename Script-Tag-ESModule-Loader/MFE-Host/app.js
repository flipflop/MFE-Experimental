class Hello extends React.Component {
    render() {
      return React.createElement('div', null, `Hello from ${this.props.toWhat}`);
    }
  }
  
  ReactDOM.render(
    React.createElement(Hello, {toWhat: 'React'}, null),
    document.getElementById('root')
  );