import * as React from 'react';
import { render } from 'react-dom';

import './style.css';

// eventually, import insults in from database
// for now, this is insults
const insults = [
	{
		phrase : 'sucks to suck'
	},
	{
		phrase : 'you done messed up a a ron'
	},
	{
		phrase : 'a dead raccoon could write better code'
	},
	{
		phrase : 'idiot sandwich'
	},
	{
		phrase : 'that was bad'
	},
	{
		phrase : 'whiffed it'
	}
];

// import './styles.css';

// function Timer() {
//   const [counter, setCounter] = React.useState(60);

//   React.useEffect(() => {
//     counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
//   }, [counter]);

//   return (
//     <div className="Timer">
//       <div>Countdown: {counter}</div>
//     </div>
//   );
// }

// const rootElement = document.getElementById('root');
// render(<Timer />, rootElement);

function Timer(props) {
	// text-to-speech function, comment out entire function to avoid being insulted
	setInterval(function() {
		// choose a random insult
		var insult = insults[Math.floor(Math.random() * insults.length)];

		// text to speech declared here
		var msg = new SpeechSynthesisUtterance();
		msg.text = insult.phrase;

  // text-to-speech function, comment out entire function to avoid being insulted
  // setInterval(function() {
  //   // choose a random insult
  //   var insult = insults[Math.floor(Math.random() * insults.length)];
    
  //   // text to speech declared here
  //   var msg = new SpeechSynthesisUtterance();
  //   msg.text = insult.phrase
    
  //   // text-to-speech call
  //   window.speechSynthesis.speak(msg);
  // }, 10000);   // Interval set to 10 seconds, change to hear insults faster for testing

		// text-to-speech call
	//	window.speechSynthesis.speak(msg);
	// }, 10000); // Interval set to 10 seconds, change to hear insults faster for testing

	return (
		<div className="countdown">
			<p>Time Remaining</p>
			<span className="timer">{props.time}</span>
		</div>
	);
}

export default Timer;
