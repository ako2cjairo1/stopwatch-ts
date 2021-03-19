import {
	StopWatchStateProps,
	IStopWatchAction,
	StopWatchActionTypes,
} from '../../types';

export const stopWatchReducer = (
	state: StopWatchStateProps,
	action: IStopWatchAction
): StopWatchStateProps => {
	switch (action.type) {
		case StopWatchActionTypes.SET_TIME:
			return {
				...state,
				time: action.payload,
			};
		case StopWatchActionTypes.INCREMENT_TIME:
			return {
				...state,
				time: state.time + action.payload,
			};
		case StopWatchActionTypes.SET_ISRUNNING:
			return {
				...state,
				isRunning: action.payload,
			};
		case StopWatchActionTypes.SET_LAPS:
			return {
				...state,
				laps: [action.payload, ...state.laps],
			};
		case StopWatchActionTypes.RESET_LAPS:
			return {
				...state,
				laps: [],
			};
		default:
			return state;
	}
};
