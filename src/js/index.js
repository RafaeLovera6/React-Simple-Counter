//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
// include your styles into the webpack bundle
import "../styles/index.css";
import propTypes from "prop-types";

//import your own components
// import Home from "./component/home.jsx";
function SimpleCounter(props) {
	return (
		<div className="contador">
			<div className="calendar">
				<i className="fas fa-stopwatch"></i>
			</div>
			<div className="four">{props.digit4 % 10}</div>
			<div className="three">{props.digit3 % 10}</div>
			<div className="two">{props.digit2 % 10}</div>
			<div className="one">{props.digit1 % 10}</div>
		</div>
	);
}
SimpleCounter.propTypes = {
	digit4: propTypes.number,
	digit3: propTypes.number,
	digit2: propTypes.number,
	digit1: propTypes.number,
};

let counter = 0;
setInterval(() => {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	console.log(four, three, two, one);
	counter++;
	ReactDOM.render(
		<SimpleCounter
			digit1={one}
			digit2={two}
			digit3={three}
			digit4={four}
		/>,
		document.querySelector("#app")
	);
}, 1000);
