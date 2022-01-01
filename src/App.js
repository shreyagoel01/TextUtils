import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert =(message,type)=>
  {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>
    (setAlert(null)),1500
    )
  }
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#424244';
      showAlert("Dark mode enabled","success");
      //document.title ="TextUtils: Dark Mode";
      // setInterval(() => {
      //   document.title ="TextUtils is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title ="Install TextUtils";
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode enabled","success");
      //document.title ="TextUtils: Light Mode";
    }
  }
    // "react": "^17.0.2",
    // "react-dom": "^17.0.2",
  return (
    <>
    {/* <Router> */}
<Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
{/* <Routes>
          <Route exact path="/about" element={<About/>} />
            
          
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below:" mode={mode} />} />
            
          
        </Routes> */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below:" mode={mode} />
        </div>
        {/* </Router> */}


    </>
   
  );
}

export default App;
