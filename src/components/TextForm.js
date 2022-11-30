import React, {useState} from 'react'
// useState is hooks.

export default function TextForm(props) {
   
    const handleUpclick = ()=>{
        // console.log("UpperCase was clicked: " + text);
        // setText("You have clicked on handleUpclick")
       let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Convetrted to uppercase!","success");
    }

    const handleLoclick = ()=>{
       let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Convetrted to lowercase!","success");

    }

    const handleClearClick = ()=>{
      let newText = '';
       setText(newText)
       props.showAlert("clear all text!","success");

   }
   
   const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking","success");

  }

  const handleReverse = (event) => {
    /* Convert string to array*/
    let strArr = text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
    props.showAlert("Reverse Done!","success");

  };

  const handleTitleCase = () => {
    let newText = text.split(" ").map((currentValue) => {
        let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
        return newText;
    });
    setText(newText.join(" "));
    props.showAlert("Convert proper case","success");

  }

  const handleCopy = () => {
    console.log("i am copy");
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy all text!","success");

  }
  
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Remove Extra Space!","success");

  }

  // const handleLightTheme = () => {
  //   document.querySelector('.body').style.backgroundColor = "white"
  // }

  // const handleDarkTheme = () => {
  //   document.querySelector('.body').style.backgroundColor = "black"
  //   document.querySelector('.body').style.color = "white"
    
  // }

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
 
    const [text, setText]= useState('');
    // text ="new text"; // wrong way to change the state
    // setText("new text"); // Correct way to change the state
     

  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1 id="header">{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange}  srtyle={{backgroundCoor:props.mode==='dark'?'grey': 'white' , color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="7"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpclick}> Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoclick}> Convert to lowercase</button>
        <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear text</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">
        <span className="spinner-grow spinner-grow-sm"></span>
          Speak</button>
        <button className='btn btn-primary mx-1' onClick={handleReverse}> Reverse</button>
        <button className='btn btn-primary mx-1' onClick={handleTitleCase}>Proper case </button>
        {/* <button className='btn btn-primary mx-2' onClick={handleLightTheme}>light theme</button>
        <button className='btn btn-primary mx-2' onClick={handleDarkTheme}>Dark theme</button> */}

        <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text </button>
        <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces </button>
        {/* <button className='btn btn-primary mx-1' onClick={ShowAlert}>alert</button> */}




    </div>
    <div className="container my-3" id="footer" style={{color:props.mode==='dark'?'white':'black'}}>
     <h2>your text summary</h2>
     <p>{text.split(" ").length} words and {text.length} characters</p>
     <p>{0.008 * text.split(" ").length} Minutes read</p>
     <h2>Preview</h2>
     <p>{text.length>0?text:"enter something iin the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
