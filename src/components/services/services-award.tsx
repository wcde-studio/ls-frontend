'use client';
import React from 'react';
import styles from './services-award.module.css';

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

import { ServicesAwardType, ServicesAwardSize } from './types';

interface IServicesAwardProps {
	type?: ServicesAwardType;
	size?: ServicesAwardSize;
	text?: string;
}


const ServicesAward = (props: IServicesAwardProps) => {
	const { type=ServicesAwardType.Team, size=ServicesAwardSize.Desctop, text='' } = props;

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
		<li className={styles.services} >
			{ icon[type] }
			<p className={styles.text}>{ text }</p>
		</li>
 );
};

export default ServicesAward;
