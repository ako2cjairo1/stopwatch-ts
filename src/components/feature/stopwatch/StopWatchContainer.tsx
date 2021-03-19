import { styledStopWatch } from '../../../styles';
import LapseTime from './LapseTime';
// Custom hooks
import { useStopWatch } from '../../../hooks';
// Types
import { StopWatchStateProps } from '../../../types';

const initialState: StopWatchStateProps = {
	time: 0,
	isRunning: false,
	laps: [],
};

export function StopWatch(): JSX.Element {
	const [
		stopWatchState,
		stopWatchHandler,
		runningTime,
		lapsedTime,
	] = useStopWatch(initialState);
	// deconstruct state variables
	const { time, isRunning, laps } = stopWatchState;
	// desconstruct action handlers
	const {
		handleSetIsRunning,
		handleSetLaps,
		handleResetLaps,
	} = stopWatchHandler;

	// Handlers
	const handleStart = () => handleSetIsRunning(true);
	const handleStop = () => handleSetIsRunning(false);
	const handleLapsedTime = () => handleSetLaps(lapsedTime);
	const handleReset = () => handleResetLaps();

	// className (tailwind styles)
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

	return (
		<div className={container}>
			<div className={timer}>
				<LapseTime {...runningTime} />
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
					<button className={stop} onClick={handleStop}>
						Stop
					</button>
				) : (
					<button className={start} onClick={handleStart}>
						Start
					</button>
				)}
			</div>
			<div className={lapsed}>
				{laps.length > 0 &&
					laps.map((lap, index) => (
						<div
							key={index}
							className='flex flex-row justify-between items-center w-80'>
							<span className=''>Lap {index + 1}</span>
							<LapseTime {...lap} />
						</div>
					))}
			</div>
		</div>
	);
}
