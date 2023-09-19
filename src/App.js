
import React from "react";

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';



function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
const showAlert = (message, type)=>{
setAlert({
  msg: message,
  type: type
})
setTimeout(()=>{
  setAlert(null)
},1500);
}




  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      showAlert("Dark mode has been enabled", "success")
      document.body.style.backgroundColor='#0c152a'
    }else{
      setMode('light')
      showAlert("light mode has been enabled", "success")
      document.body.style.backgroundColor='white'
    }
  }
  return (
  <>


  <Navbar mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
  
<TextForm showAlert={showAlert} mode={mode}/>
    
          

</>
  );
}

export default App;
