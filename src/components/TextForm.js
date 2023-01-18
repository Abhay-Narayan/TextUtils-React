import React, {useState} from 'react'
import PropTypes from "prop-types";
export default function TextForm(props) {
    const [text, setText] = useState('Enter text here: ');
    const handleupClick = ()=>{
        console.log("Uppercase was clicked :0");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleloClick = ()=>{
        console.log("Lowercase was clicked :0");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnchange = (event)=>{
        
        setText(event.target.value);
    }
  return (
    <div>       
        <div className="mb-3" style={{color: props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
        <textarea className="form-control" value = {text} onChange = {handleOnchange} style={{backgroundColor: props.mode==='dark'?'white':'grey'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick = {handleupClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick = {handleloClick}>Convert to lowercase</button>

        <div className="container my-3 " style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary...</h1>
            <p>{text.split(" ").length} words , {text.length} characters, {text.split(".").length} sentences </p>
            <p>you can read this in {0.008*text.split(" ").length} minutes</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </div>
  )
}
