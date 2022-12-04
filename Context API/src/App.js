import { useState } from "react";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import "./App.css";
function App() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  const myname = (event) => {
    setName(event.target.value);
  };
  const mycolor = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="wraper">
      <Navbar />
      <form>
        <input
          type={"text"}
          placeholder="Enter Your Name"
          value={name}
          onChange={myname}
        ></input>
        <input
          type={"text"}
          placeholder="Enter Your Color"
          value={color}
          onChange={mycolor}
        ></input>
      </form>
      <Herosection username={name} btncolor={color} />
    </div>
  );
}

export default App;
