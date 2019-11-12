import React from 'react'

const LaunchesList = ({ launchesList }) => {
  return (
    <div>
      <center>
        <table>
          <tbody>
          <tr>
            <th>Mission name</th>
            <th>Launch year</th>
          </tr>
          <tr>
            {launchesList.map((launchesList) => (
             launchesList.map((launch, id) => (
                <div key={id}>
                  <td>{launch.mission_name}</td>
                  <td>{launch.launch_year}</td>
                </div>
              )) 
            ))
            }
          </tr>
          </tbody>
        </table>
      </center>
    </div>
  )
};

export default LaunchesList