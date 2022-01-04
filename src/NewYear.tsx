import {Audio} from 'remotion';
import {Sequence} from 'remotion';
import {Blessing0} from './Blessing/Blessing_0';
import {Blessing1} from './Blessing/Blessing_1';
import {Blessing2} from './Blessing/Blessing_2';
import {Blessing3} from './Blessing/Blessing_3';
import {Blessing4} from './Blessing/Blessing_4';
import {Blessing5} from './Blessing/Blessing_5';
import {FirecrackerGroup} from './Firecracker/FirecrackerGroup_0';
import audio from './audio.mp3';
import {Lantern0} from './Lantern/Lantern_0';
import {Lantern1} from './Lantern/Lantern_1';
import {Lantern2} from './Lantern/Lantern_2';

export const NewYear: React.FC = () => {
	return (
		<div style={{flex: 1, backgroundColor: 'white'}}>
			<Sequence from={74} durationInFrames={40}>
				<Blessing3 />
			</Sequence>
			<Sequence from={0} durationInFrames={76}>
				<Blessing0 />
			</Sequence>
			<Sequence from={41} durationInFrames={76 - 41}>
				<Blessing1 />
			</Sequence>
			<Sequence from={65} durationInFrames={76 - 65}>
				<Blessing2 />
			</Sequence>
			<Sequence from={114} durationInFrames={81}>
				<Blessing4 />
			</Sequence>
			<Sequence from={195} durationInFrames={82}>
				<Blessing5 />
			</Sequence>
			<Sequence from={275} durationInFrames={82}>
				<FirecrackerGroup />
			</Sequence>
			<Sequence from={317} durationInFrames={124}>
				<Lantern0 />
			</Sequence>
			<Sequence from={441} durationInFrames={124}>
				<Lantern1 />
			</Sequence>
			<Sequence from={524} durationInFrames={124}>
				<Lantern2 />
			</Sequence>
			<Audio src={audio} />
		</div>
	);
};
