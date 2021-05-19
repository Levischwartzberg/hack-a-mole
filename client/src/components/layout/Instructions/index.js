import React from 'react';
import StartBtn from '../../StartBtn';

const Instructions = () => {
	return (
		<section className="instructions">
			<div className="row">
				<h1>INSTRUCTIONS</h1>
				<p>
					Welcome to HACKaMOLE! Here you will find yourself in a safe space for students. A place to relax and unwind after a long hard day of Bootcamp. Or more accuately, a safe haven from the barrage of insults dished out by the
	"Instructor". Or so we thought.... </p>
				<br />
				<ol>
					<li>Help us protect our space! All you have to do is stop the "Instructor" (Instructor = red background) from hacking their way in.</li>
					<li>You will also see our Fearless "T/A" (T/A = yellow background) working to block open terminals. Try not to block his work! </li>
				</ol>
				<dl className="rules">
					<dt>Start Game</dt>
					<dd>Press the Start button to join the session.</dd>

					<dt>Game Play</dt>
					<dd>A count down timer will start, Hack (click) on each Instructor to gain 5 points, note: clicking on a T/A may result in lost points. </dd>

					<dt>Log your Score.</dt>
					<dd>Show off your highscore by logging your name.</dd>
				</dl>

				<p className="start-btn">
					<StartBtn subText={'(Back to Start)'} buttonText={'OK Lets Play'} />
				</p>
			</div>
		</section>
	);
};

export default Instructions;
