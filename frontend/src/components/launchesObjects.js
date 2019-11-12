import React from 'react'

const LaunchesObjects = ({ launchesObjects }) => {
  //console.log("Objects: ", launchesObjects)
  return (
    <center>
      <h1>SpaceX Launches</h1>
      <table cellPadding="10">
        <tbody>
          <tr>
            <th></th>
            <th><strong>Mission name</strong></th>
            <th><strong>Launch year</strong></th>
          </tr>
          <tr>
            <td>Latest Launch</td>
            <td>{launchesObjects[1].mission_name}</td>
            <td>{launchesObjects[1].launch_year}</td>
          </tr>
          <tr>
            <td>Next Launch</td>
            <td>{launchesObjects[0].mission_name}</td>
            <td>{launchesObjects[0].launch_year}</td>
          </tr>
        </tbody>
      </table>
    </center>
  )
};

export default LaunchesObjects