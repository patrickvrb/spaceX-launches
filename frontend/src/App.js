import React, { Component } from 'react';
import LaunchesObject from './components/launches_object'
import LaunchesList from './components/launches_list'

class App extends Component{

  state = {
    launches_objects: [],
    launches_list: []
  }
  componentDidMount() {
    fetch('http://127.0.0.1:8000')
    .then(res => res.json())
    .then((data) => {
      console.log()
      this.setState({ launches_objects: data })
    })
    .catch(console.log) 
    fetch('http://127.0.0.1:8000/list')
    .then(res => res.json())
    .then((data) => {
      console.log()
      this.setState({ launches_list: data })
    })
    .catch(console.log) 
  }
  render() {
    return (
      <LaunchesObject launches={this.state.launches_objects} />,
      <LaunchesList launches={this.state.launches_list} />
    )
  }
}

export default App;