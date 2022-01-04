import {spring} from 'remotion';
import {useVideoConfig} from 'remotion';
import {useCurrentFrame} from 'remotion';
import {interpolate} from 'remotion';
import {Lantern} from '.';
export const Lantern0: React.FC = () => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const wait = 70;

	const leftToRight = interpolate(
		frame,
		[0, wait],
		[-40, videoConfig.width - 730],
		{extrapolateRight: 'clamp'}
	);
	const RightToLeft = interpolate(
		frame - wait,
		[0, 30],
		[videoConfig.width - 730, -40],
		{extrapolateLeft: 'clamp'}
	);

	const left = frame < wait ? leftToRight : RightToLeft;
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
