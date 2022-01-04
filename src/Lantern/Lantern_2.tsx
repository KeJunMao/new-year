import {spring} from 'remotion';
import {useVideoConfig} from 'remotion';
import {useCurrentFrame} from 'remotion';
import {interpolate} from 'remotion';
import {Lantern} from '.';
export const Lantern2: React.FC = () => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const RightToLeft = interpolate(
		frame,
		[0, 15],
		[1920, videoConfig.width / 2 - 300],
		{
			extrapolateLeft: 'extend',
		}
	);

	const left = frame < 15 ? RightToLeft : videoConfig.width / 2 - 300;
	const scale = interpolate(frame - 15, [0, 10], [1, 1.5], {
		extrapolateLeft: 'clamp',
	});

	return <Lantern left={`${left}px`} scale={scale} />;
};
