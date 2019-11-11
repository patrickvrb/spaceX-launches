import React from 'react'

const LaunchesObject = ({ launches }) => {
    return (
      <div>
        <center>
        <h1>SpaceX Launches</h1>
        {launches.map((launch, id) => (
          <div>
            <h5>{launch.mission_name}</h5>
            <h5>{launch.launch_year}</h5>
          </div>
        ))}
        </center>
      </div>
    )
  };

  export default LaunchesObject