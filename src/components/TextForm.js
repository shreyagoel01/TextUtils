import React, { useState } from 'react'


function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleLoClick = ()=>{
        //console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }
    const handleClearClick = ()=>{
        //console.log("Uppercase was clicked");
        
        setText("");
        props.showAlert("Text Cleared", "warning");
    }
    const handleCopy =()=>
    {
        var newText =document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text Copied", "success");
    }
    const handleOnChange = (event)=>{
        //console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    //text ="new text"; //wrong way to change the state
    // setText("new Text"); //Correct way to change the state
    return (
        <>
        <div className="Container">
        <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
        <div className="mb-3">

  <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8" style={{backgroundColor:props.mode==='light'?'white':'#C1C2C7',
color:props.mode==='light'?'black':'white'}}></textarea>
</div>
<button className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-2`} onClick={handleUpClick}>Convert to UpperCase</button>
<button className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-2`} onClick={handleLoClick}>Convert to LowerCase</button>
<button className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-2`} onClick={handleClearClick}>Clear Text</button>
<button className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-2`} onClick={handleCopy}>Copy Text</button>
</div>
<div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
    <h2>Text Summary</h2>
    <p>{text?text.split("\n").length:0} paragraphs and {text?text.split(" ").length:0} words and {text.length} characters </p>
    <p>{text?0.008 * text.split(" ").length:0} Minutes read</p>
    <h2>Preview</h2>
    <h3>{text}</h3>
</div>
</>
    )
   
}

export default TextForm
