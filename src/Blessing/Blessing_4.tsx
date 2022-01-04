import {spring} from 'remotion';
import {useCurrentFrame} from 'remotion';
import {useVideoConfig} from 'remotion';
import {Rect} from './Rect';

export const Blessing4: React.FC = () => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const scale = 2.5;
	let rotate = 45;
	if (frame < 14) {
		rotate = 45;
	} else if (frame < 20) {
		rotate = 225;
	} else {
		rotate = spring({
			fps: videoConfig.fps,
			frame: frame - 20,
			config: {
				damping: 0,
				mass: 1,
			},
			from: 0,
			to: 360,
		});
	}
	return (
		<div>
			<Rect scale={scale} rotate={rotate} />
		</div>
	);
};
