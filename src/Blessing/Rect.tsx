import {useVideoConfig} from 'remotion';
import {Text} from './Text';
export const Rect: React.FC<{
	left?: number;
	top?: number;
	size?: number;
	rotate?: number;
	scale?: number;
	opacity?: number;
}> = ({
	left = null,
	top = null,
	size = 300,
	rotate = 45,
	scale = 1,
	opacity = 1,
}) => {
	const videoConfig = useVideoConfig();
	if (left === null) {
		left = videoConfig.width / 2 - size / 2;
	}
	if (top === null) {
		top = videoConfig.height / 2 - size / 2;
	}
	return (
		<div
			style={{
				width: `${size}px`,
				height: `${size}px`,
				background: 'red',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				transform: `rotate(${rotate}deg) scale(${scale})`,
				position: 'absolute',
				border: '1px solid white',
				left: `${left}px`,
				top: `${top}px`,
				opacity: `${opacity}`,
			}}
		>
			<div
				style={{
					transform: `rotate(-45deg)`,
				}}
			>
				<Text />
			</div>
		</div>
	);
};
