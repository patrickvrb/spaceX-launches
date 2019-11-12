import React, { Component } from 'react';
import LaunchesObjects from './components/launchesObjects'
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
      this.setState({ launchesObjects: data })
    })
    .catch(console.log) 
     fetch('http://127.0.0.1:8000/list')
    .then(res => res.json())
    .then((data) => {
      this.setState({ launchesList: data })
      console.log("FETCH:",{data})
    })
    .catch(console.log) 
  }
  render() {
    return (
      <>
      <LaunchesObjects launchesObjects={this.state.launchesObjects}/>
      <LaunchesList launchesList={this.state.launchesList} />
      </>
    )
  }
}

export default App;