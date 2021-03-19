import { useReducer, useEffect, useState } from 'react';
import {
	StopWatchStateProps,
	StopWatchEventProps,
	LapsedTimeType,
} from '../../types';

import {
	setTimeAction,
	incrementTimeAction,
	setIsRunningAction,
	setLapsAction,
	resetLapsAction,
} from './actions';
import { stopWatchReducer } from './reducer';

import { parseTimer } from '../../utils';

export function useStopWatch(
	initialState: StopWatchStateProps
): [StopWatchStateProps, StopWatchEventProps, LapsedTimeType, LapsedTimeType] {
	const [state, dispatch] = useReducer(stopWatchReducer, initialState);
	const [lapTime, setLapTime] = useState(0);

	// map handlers
	const handleAction: StopWatchEventProps = {
		handleSetTime: (time: number) => dispatch(setTimeAction(time)),
		handleIncrementTime: (time: number) => {
			dispatch(incrementTimeAction(time));
			setLapTime((prev) => prev + time);
		},
		handleSetIsRunning: (isRunning: boolean) =>
			dispatch(setIsRunningAction(isRunning)),
		handleSetLaps: (lapTime: LapsedTimeType) => {
			dispatch(setLapsAction(lapTime));
			setLapTime(0);
		},
		handleResetLaps: () => {
			dispatch(setTimeAction(0));
			dispatch(resetLapsAction());
		},
	};

	const { time, isRunning } = state;
	const { handleIncrementTime } = handleAction;

	// compute time stamp values
	const runningTime = parseTimer(time);
	const lapsedTime = parseTimer(lapTime);

	useEffect(() => {
		const interval = setInterval(() => {
			if (!isRunning) {
				return () => clearInterval(interval);
			}
			handleIncrementTime(10);
		}, 10);

		return () => clearInterval(interval);
	}, [isRunning, handleIncrementTime]);

	return [state, handleAction, runningTime, lapsedTime];
}
