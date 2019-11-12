import React, { Component } from 'react';
import LaunchesObject from './components/launchesObjects'
import LaunchesList from './components/launchesList'

class App extends Component{

  state = {
    launchesObjects: [],
    launchesList: []
  }
   componentDidMount() {
     fetch('http://127.0.0.1:8000')
    .then(res => res.json())
    .then((data) => {
      console.log()
      this.setState({ launchesObjects: data })
    })
    .catch(console.log) 
     fetch('http://127.0.0.1:8000/list')
    .then(res => res.json())
    .then((data) => {
      console.log()
      this.setState({ launchesList: data })
    })
    .catch(console.log) 
  }
  render() {
    return (
      <>
      <LaunchesObject launchesObjects={this.state.launchesObjects} xablau = {"abc"} />
      <LaunchesList launchesList={this.state.launchesList} />
      </>
    )
  }
}

export default App;