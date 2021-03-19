// import { memo } from 'react';
import { toLapsedTime } from '../../../utils';
// types
import { LapsedTimeType } from '../../../types';

export default function LapseTime({
	hour,
	minute,
	second,
	millisecond,
}: LapsedTimeType): JSX.Element {
	return (
		<div className='flex justify-between items-center tabular-nums'>
			{toLapsedTime(hour)}:{toLapsedTime(minute)}:{toLapsedTime(second)}.
			{toLapsedTime(millisecond, 3)}
		</div>
	);
}
// export default memo(LapseTime);
