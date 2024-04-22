'use client';

import styles from './award.module.scss';

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
		TEAM: <TeamIcon />,
		GAME: <GameIcon />,
		BOOK: <BookIcon />,
		LEADERSHIP: <LeadershipIcon />,
		TVSCREEN: <TVScreenIcon />,
		TV: <TVIcon />,
		PRIZE: <PrizeIcon />,
		RIBBON: <RibbonIcon />,
		CUP: <CupIcon />,
		AWARD: <AwardIcon />,
	};

	return (
		<li className={styles.award}>
			{icon[type]}
			<p className={styles.text}>{text}</p>
		</li>
	);
};

export default Award;
