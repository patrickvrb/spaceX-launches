import React from 'react'

const LaunchesObjects = ({ launchesObjects }) => {
  console.log("Objects: ", launchesObjects)
  return (
    <center>
      <h1>SpaceX Launches</h1>
      <table>
        <tr>
          <th>Mission name</th>
          <th>Launch year</th>
        </tr>
          <tr>
            {launchesObjects[0].mission_name}
          </tr>
      </table>
    </center>
  )
};

export default LaunchesObjects