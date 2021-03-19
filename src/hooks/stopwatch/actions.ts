import {
	IStopWatchAction,
	LapsedTimeType,
	StopWatchActionTypes,
} from '../../types';

const setTimeAction = (time: number): IStopWatchAction => {
	return {
		type: StopWatchActionTypes.SET_TIME,
		payload: time,
	};
};
const incrementTimeAction = (time: number): IStopWatchAction => {
	return {
		type: StopWatchActionTypes.INCREMENT_TIME,
		payload: time,
	};
};
const setIsRunningAction = (isRunning: boolean): IStopWatchAction => {
	return {
		type: StopWatchActionTypes.SET_ISRUNNING,
		payload: isRunning,
	};
};
const setLapsAction = (lapTime: LapsedTimeType): IStopWatchAction => {
	return {
		type: StopWatchActionTypes.SET_LAPS,
		payload: lapTime,
	};
};
const resetLapsAction = (): IStopWatchAction => {
	return {
		type: StopWatchActionTypes.RESET_LAPS,
		payload: [],
	};
};

export {
	setTimeAction,
	incrementTimeAction,
	setIsRunningAction,
	setLapsAction,
	resetLapsAction,
};
