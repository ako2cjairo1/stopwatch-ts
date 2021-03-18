import { formatTime } from '../utils';
export default function LapseTime({ hour, minute, second, millisecond }) {
	return (
		<div className='flex justify-between items-center tabular-nums'>
			{formatTime(hour)}:{formatTime(minute)}:{formatTime(second)}.
			{formatTime(millisecond, 3)}
		</div>
	);
}
