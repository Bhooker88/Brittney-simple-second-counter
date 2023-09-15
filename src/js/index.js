//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import PropTypes from "prop-types";

//import your own components
var SimpleCounter = (props) =>{
    return(
        <div className ="display-flex d-flex bg-dark text-white py-3 justify-content-center">
            <div className = "calendar">
             <i className ="far fa-clock"></i>
            </div>
            <div className="six numbers">{props.digitSix % 10}</div>
            <div className="five numbers">{props.digitFive % 10}</div>
            <div className="four numbers">{props.digitFour % 10}</div>
            <div className="three numbers">{props.digitThree % 10}</div>
            <div className="two numbers">{props.digitTwo % 10}</div>
            <div className="one numbers">{props.digitOne % 10}</div>
        </div>
        
    )
      
}

SimpleCounter.propTypes = {
    digitSix: PropTypes.number,
    digitFive: PropTypes.number,
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number,
}

let counter = 0;
setInterval(function(){
    const six = Math.floor(counter/100000);
    const five = Math.floor(counter/10000);
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    counter++;


//render your react application
ReactDOM.render(<SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six} />, document.querySelector("#app")
);
},1000);