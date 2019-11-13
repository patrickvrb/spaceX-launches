import React from 'react'

const LaunchesList = ({ launchesList }) => {
  return (
    <center>
      <table cellPadding="10" class="table1">
        <caption class="align">List of five upcoming launches</caption>
        <tbody>
          <tr>
            <th>Mission name</th>
            <th>Launch date</th>
          </tr>
          {launchesList[0].map((launch, id) => (
            <tr key={id}>
              <td>{launch.mission_name}</td>
              <td>{launch.launch_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table cellPadding="10" class="table2">
        <caption>List of five past launches</caption>
        <tbody>
          <tr>
            <th>Mission name</th>
            <th>Launch date</th>
          </tr>
          {launchesList[1].map((launch, id) => (
            <tr key={id}>
              <td>{launch.mission_name}</td>
              <td>{launch.launch_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </center>
  )
};

export default LaunchesList