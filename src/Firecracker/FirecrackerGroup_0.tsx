import {Sequence} from 'remotion';
import {Firecracker} from '.';

export const FirecrackerGroup: React.FC = () => {
	return (
		<div>
			<Firecracker left={450} />
			<Sequence from={20}>
				<Firecracker left={1350} top={80} />
			</Sequence>
			<Sequence from={34}>
				<Firecracker top={230} />{' '}
			</Sequence>
		</div>
	);
};
