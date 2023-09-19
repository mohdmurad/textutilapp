 import React, { useState } from 'react'

// eslint-disable-next-line
export default function (props) {
    const [text, setText] = useState("");

const handleOnChange = (event)=>{
    setText(event.target.value)
}

const convertUpCase = ()=>{
    let newText  = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase", 'success')

}
const convertLoCase = ()=>{
    let newText  = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase", 'success')
}
const ClearText = ()=>{
    let newText  = ''
    setText(newText);
    props.showAlert("clear text", 'success')

}
const copyText = ()=>{
  
  let text = document.getElementById('myBox')
   text.select();
   navigator.clipboard.writeText(text.value)
   alert("copy to clipboard")
   props.showAlert("text copied", 'success')

}





  return (
    <>
    <div className="container my-3" style={{color: props.mode==='dark'?'white': 'black'}} >
        <h1>Enter the text to analyze below</h1>
   
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#101223': 'white',
color:  props.mode==='dark'?'white': 'black'}} id="myBox" rows="8"></textarea>
</div>
  <button className="btn btn-primary  mt-2 mx-2" onClick={convertUpCase}>Convert to Uppercase</button>
  <button className="btn btn-primary  mt-2 mx-2" onClick={convertLoCase}>Convert to Lowercase</button>
  <button className="btn btn-primary  mt-2 mx-2" onClick={copyText}>Copy Text</button>
  <button className="btn btn-primary  mt-2 mx-2" onClick={ClearText}>Clear Text</button>
</div>
<div className="container my-4" style={{color: props.mode==='dark'?'white': 'black'}}>
<h1>Your text summary</h1>
<p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
<h2>Preview</h2>
<p>{text.length>0?text: "enter the text to preview"}</p>
    
    </div>
</>
  )
}
