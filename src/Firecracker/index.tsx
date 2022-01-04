import {useVideoConfig} from 'remotion';
import {spring} from 'remotion';
import {Sequence} from 'remotion';
import {interpolate} from 'remotion';
import {useCurrentFrame} from 'remotion';
import {Img} from 'remotion';
import firecracker from './0.png';
import fire from './1.png';

interface FirecrackerProps {
	left?: number;
	top?: number;
	scale?: number;
	opacity?: number;
}

export const Firecracker: React.FC<FirecrackerProps> = ({
	left = null,
	top = null,
	scale = 1,
	opacity = 1,
}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	if (left === null) {
		left = videoConfig.width / 2 - 250 / 2;
	}
	if (top === null) {
		top = videoConfig.height / 2 - 800 / 2;
	}
	const fire1Opacity = frame >= 4 ? 0 : 1;
	const fire2Opacity = frame >= 10 ? 0 : 1;
	let fire3Opacity = 0;
	if (frame >= 31) {
		fire3Opacity = 0;
	} else if (frame >= 4) {
		fire3Opacity = 1;
	}
	let fire4Opacity = 0;
	if (frame >= 12) {
		fire4Opacity = 0;
	} else if (frame >= 10) {
		fire4Opacity = 1;
	}
	const height = interpolate(frame, [0, 31], [800, 0]);
	return (
		<div
			style={{
				position: 'absolute',
				width: '250px',
				height: '800px',
				left: `${left}px`,
				top: `${top}px`,
				opacity,
			}}
		>
			<div
				style={{
					height: `${height}px`,
					overflow: 'hidden',
				}}
			>
				<Img src={firecracker} />
			</div>
			<Img
				style={{
					position: 'absolute',
					left: 0,
					bottom: '80px',
					opacity: fire1Opacity,
				}}
				src={fire}
			/>
			<Img
				style={{
					position: 'absolute',
					bottom: '160px',
					left: '80px',
					opacity: fire2Opacity,
				}}
				src={fire}
			/>
			<Img
				style={{
					position: 'absolute',
					bottom: '200px',
					opacity: fire3Opacity,
				}}
				src={fire}
			/>
			<Img
				style={{
					position: 'absolute',
					bottom: '370px',
					opacity: fire4Opacity,
				}}
				src={fire}
			/>
		</div>
	);
};
