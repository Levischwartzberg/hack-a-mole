import './App.css';
import React, { useState, useEffect } from "react";
import Timer from "./components/Timer";
import StartBtn from "./components/StartBtn";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Share from "./components/Share"

// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch,
//   Redirect,
//   useLocation
// } from "react-router-dom";

function App() {
  const [timer, setTimer ] = useState(10);
  const [playing, setPlaying ] = useState([false]);

  const handleStartBtn = event => {
    if (playing === false) {
      setTimer(10);
      setPlaying(true);
      setTimeout(() => setTimer(timer-1), 1000)
    }
  }

  useEffect(() => {
    if (timer > -1 && playing === true) {
      setTimeout(() => setTimer(timer-1), 1000)
    }
    else {
      setTimer(10);
      //other end game logic, reactions here
      setPlaying(false);
    }
    }, [timer])

  return ( 
     <div>
      <Header />
      <Share /> 
      <StartBtn handleStartBtn={handleStartBtn} />
      <Timer time={timer}/>
      <p>Test :)</p>
      <Footer />
    </div>
 
  );
}

export default App;
