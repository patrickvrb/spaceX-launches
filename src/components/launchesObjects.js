import React from 'react';
import '../components.css';

const LaunchesObjects = ({ launchesObjects }) => {
  return (
    <div>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/9/96/SpaceX_Logo_Black.png'
        alt='SpaceX'
        class='logo'
      ></img>
      <h1>Here is some information on SpaceX launches</h1>
      <table cellPadding='10'>
        <tbody>
          <tr>
            <th></th>
            <th>
              <strong>Mission name</strong>
            </th>
            <th>
              <strong>Launch date</strong>
            </th>
          </tr>

          <tr>
            <td>Latest Launch</td>
            <td>{launchesObjects['latest']?.mission_name}</td>
            <td>{launchesObjects['latest']?.launch_date}</td>
          </tr>
          <tr>
            <td>Next Launch</td>
            <td>{launchesObjects['next']?.mission_name}</td>
            <td>{launchesObjects['next']?.launch_date}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LaunchesObjects;
