import React from 'react'

const LaunchesObjects = ({ launchesObjects }) => {
    return (
      <div>
        <center>
        <h1>SpaceX Launches</h1>
        {launchesObjects.map((launch, id) => (
          <div key = {id}>
            <h5>{launch.mission_name}</h5>
            <h5>{launch.launch_year}</h5>
          </div>
        ))}
        </center>
      </div>
    )
  };

  export default LaunchesObjects