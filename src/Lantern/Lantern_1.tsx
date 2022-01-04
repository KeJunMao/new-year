import {spring} from 'remotion';
import {useVideoConfig} from 'remotion';
import {useCurrentFrame} from 'remotion';
import {interpolate} from 'remotion';
import {Lantern} from '.';
export const Lantern1: React.FC = () => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();
	const wait = 50;

	const leftToRight = interpolate(
		frame - wait,
		[0, 30],
		[80, videoConfig.width + 130],
		{extrapolateRight: 'clamp'}
	);
	const RightToLeft = interpolate(
		frame,
		[0, wait],
		[videoConfig.width - 730, 80],
		{extrapolateLeft: 'clamp'}
	);

	const left = frame < wait ? RightToLeft : leftToRight;
	const top = frame > wait && frame % 2 === 0 ? -180 : 0;
	const rotate = spring({
		fps: videoConfig.fps,
		frame: frame - wait,
		config: {
			damping: 0,
			mass: 2,
		},
		from: 0,
		to: 360,
	});
	return <Lantern left={left} top={top} rotate={rotate} />;
};
