// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from './components/Navbar';
import TextForm from "./components/TextForm";
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState(`light`); // whether dark mode is enabled or not.
  const[alert, setAlert]= useState(null);
  
  const showAlert = (message, type) =>{
      setAlert({
        msg: message,
        type : type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  var footer=document.getElementById("footer");
  var header=document.getElementById("header");
  var mode1=document.getElementById("mode");
   const toggleMode = ()=>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor ='#042743';
        
        footer.style.color="white";
        header.style.color="white";
        mode1.style.color="white";
        
        showAlert("Dark mode has been enabled", "success")

        // document.title='UtilCode-Dark Mode';

    //     setInterval(() => {
    //       document.title = 'UtilCode is Amazing Mode';
    //     }, 2000);
    //     setInterval(() => {
    //       document.title = 'Install UtilCode Now';
    //     }, 1500);
     }
      else{
        setMode('light');
        document.body.style.backgroundColor ='white';
        
        footer.style.color="white";
        header.style.color="black";
        mode1.style.color="black";
        showAlert("light mode has been enabled", "success")
        //alert('hello');
        
        // document.title='UtilCode-light Mode';

      }
   }

  return (
    <>
  
   {/* <Navbar title="UtilCode" aboutText="About Us"/> */}
    {/* <Navbar/> */}
   <Navbar title = "UtilCode" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3"> 
    <TextForm showAlert={showAlert} heading="Enter the text to analyze below"/>

    {/* <About/> */}
   </div>
   
    </>
  ); 
}

export default App;
