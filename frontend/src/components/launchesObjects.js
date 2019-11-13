import React from 'react'
import '../components.css';

const LaunchesObjects = ({ launchesObjects }) => {
  //console.log("Objects: ", launchesObjects)
  return (
    <center>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/SpaceX_Logo_Black.png" alt="SpaceX" class="logo"></img>
      <h1>Here is some information on SpaceX launches</h1>
      <table cellPadding="15" class="table">
        <tbody>
          <tr>
            <th></th>
            <th><strong>Mission name</strong></th>
            <th><strong>Launch date</strong></th>
          </tr>
          <tr>
            <td>Latest Launch</td>
            <td>{launchesObjects[1].mission_name}</td>
            <td>{launchesObjects[1].launch_date}</td>
          </tr>
          <tr>
            <td>Next Launch</td>
            <td>{launchesObjects[0].mission_name}</td>
            <td>{launchesObjects[0].launch_date}</td>
          </tr>
        </tbody>
      </table>
    </center>
  )
};

export default LaunchesObjects