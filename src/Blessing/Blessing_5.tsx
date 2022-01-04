import {spring} from 'remotion';
import {useCurrentFrame} from 'remotion';
import {useVideoConfig} from 'remotion';
import {Rect} from './Rect';

export const Blessing5: React.FC = () => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const scale = 2.5;
	const rotate = spring({
		fps: videoConfig.fps,
		frame,
		config: {
			damping: 0,
			mass: 1,
		},
		from: 0,
		to: 360,
	});
	return (
		<div>
			<Rect scale={scale} rotate={rotate} left={400} />
			<Rect scale={scale} rotate={rotate} left={1300} />
		</div>
	);
};
