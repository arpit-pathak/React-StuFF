import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/Card";

function App() {
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const { data } = await axios.get("https://randomuser.me/api/");
    // console.log(data);
    // this details is different from useState hook's details because of scope
    const details = data.results[0];
    setDetails(details);
    console.log(details);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  console.log(`the value of lastt is ${details.name?.lastt}`);
  //  console.log(`the value of lastt is ${details.name.lastt}`);
  return (
    <div>
      {/* <h1>Hello JavaScript</h1> */}
      <Card details={details}></Card>
    </div>
  );
}

export default App;

// 16octLiveclass
