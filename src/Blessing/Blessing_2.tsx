import {useVideoConfig} from 'remotion';
import {Rect} from './Rect';

export const Blessing2: React.FC = () => {
	const videoConfig = useVideoConfig();
	return <Rect left={videoConfig.width / 2 - 620} />;
};
