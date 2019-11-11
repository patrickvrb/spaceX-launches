import React from 'react'

const Launches = ({ launches }) => {
    return (
      <div>
        <center>
        <h1>SpaceX Launches</h1>
        {launches.map((launch, id) => (
          <div key = {id}>
            <div>
              <h5>{launch.mission_name}</h5>
              <h5>{launch.launch_year}</h5>
            </div>
          </div>
        ))}
        </center>
      </div>
    )
  };

  export default Launches