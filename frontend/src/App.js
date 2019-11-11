import React, { Component } from 'react';
import Launches from './components/launches'

class App extends Component{

  state = {
    launches: []
  }
  componentDidMount() {
    fetch('http://127.0.0.1:8000')
    .then(res => res.json())
    .then((data) => {
      console.log()
      this.setState({ launches: data })
    })
    .catch(console.log) 
  }
  render() {
    return (
      <Launches launches={this.state.launches} />
    )
  }
}

export default App;