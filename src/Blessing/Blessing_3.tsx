import {useCurrentFrame} from 'remotion';
import {useVideoConfig} from 'remotion';
import {Rect} from './Rect';

export const Blessing3: React.FC = () => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const scale = frame >= 14 ? 2.5 : 1;
	const left = frame >= 24 ? 400 : videoConfig.width / 2 - 110;
	const top = frame >= 14 ? 390 : videoConfig.height / 2 - 110;

	const rightRectOpacity = frame >= 24 ? 1 : 0;
	return (
		<div>
			<Rect left={left} top={top} scale={scale} />
			<Rect left={1300} top={top} scale={scale} opacity={rightRectOpacity} />
		</div>
	);
};
