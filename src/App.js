import React, {
  useEffect,
  useState
} from "react";
import LaunchesObjects from "./components/launchesObjects";
import LaunchesList from "./components/launchesList";
import axios from "axios";

const App = () => {
  const [launchesObjects, setLaunchesObjects] = useState([]);
  const [launchesList, setlaunchesList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    let launch = {},
    launchList = {};
    launch.next = {};
    launch.latest = {};
    launchList.upcoming = [];
    launchList.past = [];

    try {
      const response = await axios.get("https://api.spacexdata.com/v4/launches/next");
      launch.next.mission_name = response.data.name;
      launch.next.launch_date = response.data.date_utc.split('', 10);
    } catch (err) {
      console.log(err);
    }
    try {
      const response = await axios.get("https://api.spacexdata.com/v4/launches/latest");
      launch.latest.mission_name = response.data.name;
      launch.latest.launch_date = response.data.date_utc.split('', 10);
      setLaunchesObjects(launch);
    } catch (err) {
      console.log(err);
    }

    try {
      const response = await axios.get("https://api.spacexdata.com/v4/launches/upcoming");
      for (let i = 0; i < 5; i++) {
        launchList.upcoming.push({
          "mission_name": response.data[i].name,
          "launch_date": response.data[i].date_utc.split('', 10)
        })
      }
    } catch (err) {
      console.log(err);
    }

    try {
      const response = await axios.get("https://api.spacexdata.com/v4/launches/past");
      for (let i = 0; i < 5; i++) {
        launchList.past.push({
          "mission_name": response.data[i].name,
          "launch_date": response.data[i].date_utc.split('', 10)
        })
      }
      setlaunchesList(launchList);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return ( <> {
    loading ? ( <center> <h4> Carregando... </h4></center>) : ( 
    <>
      <LaunchesObjects launchesObjects = {launchesObjects}/> 
      <LaunchesList launchesList = {launchesList}/> 
    </>
    )
  } </>);
};

export default App;