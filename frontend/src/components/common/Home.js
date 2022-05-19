import { useState, useEffect } from "react";

const Home = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // useEffect(() => {
  //   setName("Canteen Portal");
  // }, []);

  return <div style={{ textAlign: "center", fontSize:"50px" }}>Welcome to Canteen Portal</div>;
};

export default Home;
