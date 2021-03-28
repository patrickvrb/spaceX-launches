import React from 'react';

const LaunchesList = ({ launchesList }) => {
  return (
    <div class='list-table'>
      <table cellPadding='10' cellSpacing='10'>
        <caption>List of five upcoming launches</caption>
        <tbody>
          <tr>
            <th>Mission name</th>
            <th>Launch date</th>
          </tr>
          {launchesList.upcoming.map((launch, id) => (
            <tr key={id}>
              <td>{launch.mission_name}</td>
              <td>{launch.launch_date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <table cellPadding='10' cellSpacing='10'>
        <caption>List of five first launches</caption>
        <tbody>
          <tr>
            <th>Mission name</th>
            <th>Launch date</th>
          </tr>
          {launchesList.past.map((launch, id) => (
            <tr key={id}>
              <td>{launch.mission_name}</td>
              <td>{launch.launch_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LaunchesList;
