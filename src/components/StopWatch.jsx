import { useState, useEffect } from 'react';
import { styledStopWatch } from '../styles';
import LapseTime from './LapseTime';

type TimerType = {
	hour: Number,
	minute: Number,
	second: Number,
	millisecond: Number,
};

export default function StopWatch() {
	const {
		container,
		timer,
		buttons,
		lapsed,
		reset,
		lap,
		start,
		stop,
	} = styledStopWatch;
	const [time, setTime] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	const [laps, setLaps] = useState([]);

	const parseTimer = (ticker: Number): TimerType => {
		const resultTimer = {
			hour: Math.floor(ticker / (60000 * 12)),
			minute: Math.floor(ticker / 60000) % 60,
			second: Math.floor(ticker / 1000) % 60,
			millisecond: Math.floor(ticker % 1000),
		};
		return resultTimer;
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (!isRunning) {
				return () => clearInterval(interval);
			}
			setTime((prevTime) => prevTime + 10);
		}, 10);

		return () => clearInterval(interval);
	}, [isRunning]);

	const currentTimer = parseTimer(time);
	const handleReset = () => {
		setTime(0);
		setLaps([]);
	};
	const handleLapsedTime = () => {
		setLaps((prev) => [currentTimer, ...prev]);
	};

	return (
		<div className={container}>
			<div className={timer}>
				<LapseTime {...currentTimer} />
			</div>
			<div className={buttons}>
				{!isRunning && time > 0 ? (
					<button className={reset} onClick={handleReset}>
						Reset
					</button>
				) : (
					isRunning && (
						<button className={lap} onClick={handleLapsedTime}>
							Lap
						</button>
					)
				)}

				{isRunning ? (
					<button className={stop} onClick={() => setIsRunning(false)}>
						Stop
					</button>
				) : (
					<button className={start} onClick={() => setIsRunning(true)}>
						Start
					</button>
				)}
			</div>
			<div
				className={lapsed}
				style={{ display: 'flex', flexDirection: 'column' }}>
				{laps.length > 0 &&
					laps.map((lap) => (
						<LapseTime key={lap.millisecond + lap.second} {...lap} />
					))}
			</div>
		</div>
	);
}
