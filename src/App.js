// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setmode] = useState('Dark');
  const togglemode = ()=>{
    if(mode === 'light'){
    setmode('dark')
    document.body.style.backgroundColor = '#212529'
    }
    else{
      setmode('light')
    document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
    <Navbar title = "BLOG" aboutText = "About BLOG" mode={mode} togglemode={togglemode}/>
    <Alert alert = "This is alert"/>
    <div className="container">
    <TextForm heading="Enter your text:- " mode={mode} />
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
