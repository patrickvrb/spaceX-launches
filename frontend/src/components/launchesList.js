import React from 'react'

const LaunchesList = ({ launchesList }) => {
  return (
    <div>
      <center>
        <h2>List of five upcoming launches</h2>
        <table cellPadding="10" >
          <tbody>
            <tr>
              <th>Mission name</th>
              <th>Launch year</th>
            </tr>
            {launchesList[0].map((launch, id) => (
              <tr key={id}>
                <td>{launch.mission_name}</td>
                <td>{launch.launch_year}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>List of five past launches</h2>
        <table cellPadding="10" >
          <tbody>
            <tr>
              <th>Mission name</th>
              <th>Launch year</th>
            </tr>
            {launchesList[1].map((launch, id) => (
              <tr key={id}>
                <td>{launch.mission_name}</td>
                <td>{launch.launch_year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  )
};

export default LaunchesList