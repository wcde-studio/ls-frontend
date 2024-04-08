'use client';
import styles from './award.module.css';

import {
	TeamIcon,
	GameIcon,
	BookIcon,
	LeadershipIcon,
	TVScreenIcon,
	TVIcon,
	PrizeIcon,
	RibbonIcon,
	CupIcon,
	AwardIcon,
} from '@/components/ui';

import { AwardType, AwardSize } from './types';

interface IAwardProps {
	type?: AwardType;
	size?: AwardSize;
	text?: string;
}

const Award = (props: IAwardProps) => {
	const { type = AwardType.Team, size = AwardSize.Desctop, text = '' } = props;

	const icon = {
		team: <TeamIcon />,
		game: <GameIcon />,
		book: <BookIcon />,
		leadership: <LeadershipIcon />,
		tvscreen: <TVScreenIcon />,
		tv: <TVIcon />,
		prize: <PrizeIcon />,
		ribbon: <RibbonIcon />,
		cup: <CupIcon />,
		award: <AwardIcon />,
	};

	return (
		<li className={styles.award}>
			{icon[type]}
			<p className={styles.text}>{text}</p>
		</li>
	);
};

export default Award;
