export enum StopWatchActionTypes {
	SET_TIME = 'SET_TIME',
	INCREMENT_TIME = 'INCREMENT_TIME',
	SET_ISRUNNING = 'SET_ISRUNNING',
	SET_LAPS = 'SET_LAPS',
	RESET_LAPS = 'RESET_LAPS',
}

export type LapsedTimeType = {
	hour: number;
	minute: number;
	second: number;
	millisecond: number;
};

export type StopWatchStateProps = {
	time: number;
	isRunning: boolean;
	laps: LapsedTimeType[];
};

export type StopWatchEventProps = {
	handleSetTime: (value: number) => void;
	handleIncrementTime: (value: number) => void;
	handleSetIsRunning: (value: boolean) => void;
	handleSetLaps: (value: LapsedTimeType) => void;
	handleResetLaps: () => void;
};

export interface IStopWatchAction {
	type: StopWatchActionTypes;
	payload: number | boolean | LapsedTimeType | any;
}
