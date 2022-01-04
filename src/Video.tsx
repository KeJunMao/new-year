import {Composition} from 'remotion';

import {NewYear} from './NewYear';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="NewYear"
				component={NewYear}
				durationInFrames={644}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
