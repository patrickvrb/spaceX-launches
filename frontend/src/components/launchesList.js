import React from 'react'

const LaunchesList = ({ launchesList }) => {
  return (
    <div>
      <center>
        <table>
          <tr>
            <th>Mission name</th>
            <th>Launch year</th>
          </tr>
          <tr>
            {launchesList.map((launches) => (
              launches.map((launch, id) => (
                <div key={id}>
                  <td>{launch.mission_name}</td>
                  <td>{launch.launch_year}</td>
                </div>
              ))
            ))
            }
          </tr>
        </table>
      </center>
    </div>
  )
};

export default LaunchesList