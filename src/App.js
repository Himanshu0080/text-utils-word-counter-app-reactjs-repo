// import logo from './logo.svg';

import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom"
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light")//wheather darek mode is enabled or not
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })


    setTimeout(() => {
      setAlert(null)

    }, 1500);

  }

  const tooglemode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#032744"
      showAlert("dark  mode has been enabled", "success")
      document.title = "Text-Utils-Dark Mode"
      // setInterval(() => {
      //   document.title=" install Text-Utils Now"
      // }, 1500);
      // setInterval(() => {
      //   document.title=" Text-Utils is amazing"
      // }, 1000);
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("light  mode has been enabled", "success")
      document.title = "Text-Utils-Light Mode"
    }


  }
  return (
    <>
      
      <Router>
        <Navbar tooglemode={tooglemode} mode={mode} title={"infosis"} aboutText={"about1"} />
        <Alert alert={alert} />

        
        <Routes>
          <Route path="/about" element={<About mode={mode} />}/>
           
          

          <Route path="/home" element={<TextForm showAlert={showAlert} mode={mode} heading={"Enter the Text To Analize"} />}/>
          
          
        </Routes>
        </Router>
      

    </>
  );
}

export default App;


