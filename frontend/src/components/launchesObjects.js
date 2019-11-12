import React from 'react'

const LaunchesObjects = ({ launchesObjects }) => {
  console.log("Objects: ", launchesObjects)
  return (
    <center>
      <h1>SpaceX Launches</h1>
      <table>
        <tr>
          <th>Mission name</th>
          <th>Launch Year</th>
        </tr>
          <tr>
            <td>
              {launchesObjects[0]["mission_name"]}
              {launchesObjects[0]["launch_year"]}
            </td>
          </tr>
      </table>
    </center>
  )
};

export default LaunchesObjects