import React, { useEffect, useState } from "react";
import LaunchesObjects from "./components/launchesObjects";
import LaunchesList from "./components/launchesList";
import axios from "axios";

const App = () => {
  const [launchesObjects, setLaunchesObjects] = useState([]);
  const [launchesList, setlaunchesList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000");
      setLaunchesObjects(response.data);
    } catch (err) {
      console.log(err);
    }

    try {
      const response = await axios.get("http://127.0.0.1:8000/list");
      setlaunchesList(response.data);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <center><h4>Carregando...</h4></center>
      ) : (
          <>
            <LaunchesObjects launchesObjects={launchesObjects} />
            <LaunchesList launchesList={launchesList} />
          </>
        )}
    </>
  );
};

export default App;