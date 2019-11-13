import React from 'react'

const LaunchesList = ({ launchesList }) => {
  return (
    <body>
        <h2>List of five upcoming launches</h2>
        <table cellPadding="10" class="table">
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
        <h2>List of five past launches</h2>
        <table cellPadding="10" class="table">
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
        {/* <img src="https://i.ebayimg.com/images/g/42sAAOSwoLpaf7Re/s-l300.png" alt="SpaceX"></img> */}
      </body>
  )
};

export default LaunchesList