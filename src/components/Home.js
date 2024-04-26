import React from "react";
import { name, city } from "./data";

const Home = () => {
  // update the JSX being returned!
  return (
   <div id="home">
    <h1>Name is a Web Developer from City</h1>
    <p>{name} is a Web Developer from {city}</p>
    </div>
  );
}

export default Home;
