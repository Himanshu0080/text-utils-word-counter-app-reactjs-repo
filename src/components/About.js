import { useState } from "react";
import React from "react";

export default function About(props) {
  // const [btnTxt, setBtnText] = useState("Enable light Mode");

  /* const [myStyle, setMyStyle] = useState({
    backgroundColor: "black",
    color: "white",
    border: "1px solid white",
  }); */

  let mystyle={
    color:props.mode==="dark"?"white":"black",
    backgroundColor:props.mode==="dark"?"black":"white",
    border:' 2px solid',
    borderColor: props.mode==="dark"?"white":"dark",
  }

  /* let toggleStyle = () => {
    if (myStyle.backgroundColor === "black") {
      setMyStyle({
        backgroundColor: "white",
        color: "black",
        border: "1px solid black",
      });
      setBtnText("Enable Dark mode");
    } else {
      setMyStyle({
        backgroundColor: "black",
        color: "white",
        border: "1px solid white",
      });
      setBtnText("Enable Light mode");
    }
  }; */

  return (
    <div className=" my-3 container " style={mystyle}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={mystyle}
            ><strong>Analize your text</strong>
             
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
            Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={mystyle}
            >
               <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters
            Thus it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={mystyle}
            >
               <strong>Browser compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books
            document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
      {/* <button
        onClick={toggleStyle}
        type="button"
        className="btn btn-primary my-2"
      >
        {" "}
        {btnTxt}
      </button> */}
    </div>
  );
}
