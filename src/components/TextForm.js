import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Clicked " + text);
        let nt=text.toUpperCase();
        setText(nt);
    }

    const handleOnChange = (event) =>{
        // console.log("change");
        setText(event.target.value);
    }

    const handleLoClick = () =>{
        // console.log("Clicked " + text);
        let nt=text.toLowerCase();
        setText(nt);
    }

    const handleClearClick = () =>{
        let nt="";
        setText(nt);
    }

    const handleCopy = () =>{
        // console.log("I am copy");
        var text=document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () =>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const [text, setText] = useState('');
    
  return (
    <>
    <div className='container' style={{color :props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor :props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear text</button>
        <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy text</button>
        <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className='container my-3' style={{color :props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
