import React,{useState} from 'react'
// import PropTypes from 'prop-types'



export default function TextForm(props) {
    const [text,setText]=useState("enter your text here")
    // setText="hyy himanshu"
    const handelupclick=()=>{
        // console.log("upper case was clicked");
        setText(text.toUpperCase())
        props.showAlert("converted to upper case","success")
       
    }


    const clearonclick=()=>{
        // console.log("upper case was clicked");
       
        setText("")
        props.showAlert("cleared text","success")
        
    }
   

    const handellowclick=()=>{
        // console.log("upper case was clicked");
       
        setText(text.toLowerCase())
        props.showAlert("converted to lower case","success")
    }


    const karo=()=>{
       
        setText("")
    }


    

    const handelonchange=(evt)=>{
        // console.log("onchange");
        
        setText(evt.target.value);
    }
    const copyonclick=()=>{
        // console.log("i m copy");
        // var text = document.getElementById("box")
        // text.select();
        // text.setSelectionRange(0, 99999)
        navigator.clipboard.writeText(text)
        // document.getSelection().removeAllRanges()
        props.showAlert("copied on clipboard","success")
    
    }

  return (
    <>
    <div  className="container my=10"   style={{color:props.mode==="dark"?"white":"black"}} >
        <h1>{props.heading}</h1>
        <div className="mb-3 form-floating">
            <textarea value={text} className="form-control" style={{backgroundColor:props.mode==="dark"?"#13466E":"white",color:props.mode==="dark"?"white":"black"}} onClick={karo}  onChange={handelonchange} placeholder="Leave a comment here"  id="box" ></textarea>
            
         </div>
         <button disabled={text.length===0}  onClick={handelupclick} className="btn btn-primary">Convert to Upper Case</button>
         <button disabled={text.length===0} onClick={handellowclick} className="btn btn-primary mx-3 my-1">Convert to Lower Case</button>
         <button disabled={text.length===0} onClick={clearonclick} className="btn btn-primary ">clear all</button>
         <button disabled={text.length===0} onClick={copyonclick} className="btn btn-primary mx-2 my-1 ">Copy</button>
    
    </div>
    <div className="container my-3"  style={{color:props.mode==="dark"?"white":"black"}}>
        <h1>your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}words and {text.length} charter</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}minutes read</p>
        <h2>preview</h2>
        <p>{text}</p>
    </div>




    </>

    
  )


}

