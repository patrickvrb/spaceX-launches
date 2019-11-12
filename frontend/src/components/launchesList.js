import React from 'react'

const LaunchesList = ({ launchesList }) => {
  console.log("launches list", launchesList)
    return (
      <div>
        <center>
        <h2>SpaceX Launches LIST</h2>
        {launchesList.map((launches) => (
          launches.map((launch, id) => (
            <div key = {id}>
              <h5>{launch.mission_name}</h5>
              <h5>{launch.launch_year}</h5>
            </div>
          ))
        ))
        }
        </center>
      </div>
    )
  };

  export default LaunchesList