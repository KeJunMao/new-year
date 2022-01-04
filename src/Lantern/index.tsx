import {Img} from 'remotion';
import lantern from './0.png';
export const Lantern: React.FC<{
	left?: number | string;
	top?: number;
	rotate?: number;
	scale?: number;
}> = ({left = 0, top = 0, rotate = 0, scale = 1}) => {
	return (
		<div
			style={{
				position: 'absolute',
				left,
				top,
				transform: `rotate(${rotate}deg) scale(${scale})`,
			}}
		>
			<Img src={lantern} />
		</div>
	);
};
