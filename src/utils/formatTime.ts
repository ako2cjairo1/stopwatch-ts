import { LapsedTimeType } from '../types';

function toLapsedTime(unit: number, length: number = 2): string {
	return unit
		? unit.toString().padStart(length, '0')
		: '0'.padStart(length, '0');
}

function parseTimer(ticker: number): LapsedTimeType {
	const resultTimer = {
		hour: Math.floor(ticker / (60000 * 12)),
		minute: Math.floor(ticker / 60000) % 60,
		second: Math.floor(ticker / 1000) % 60,
		millisecond: Math.floor(ticker % 1000),
	};

	return resultTimer;
}

export { toLapsedTime, parseTimer };
