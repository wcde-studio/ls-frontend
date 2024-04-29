'use client';

import styles from './course-card.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import { LadaVedIcon, LadaVedIconSvg } from '@/components/ui';

import { Button } from '@/components/ui';
import { ButtonSize, ButtonType } from '@/components/ui/button/types';


type Props = {
		name: string;
		image: string;
		date: string;
		sity: string;
		id?: number;
};

const CourseCard = ( props: Props ) => {

	const {
		name,
		image,
		date,
		sity,
		id
	 } = props;

	const months = [
		'января',
		'февраля',
		'марта',
		'апреля',
		'мая',
		'июня',
		'июля',
		'августа',
		'сентября',
		'октября',
		'ноября',
		'декабря'
	];

	const dateData = new Date(date);

	const day = dateData.toLocaleString('ru-RU', { day: '2-digit' });
	const month = months[dateData.getMonth()];

	const imageSrc = `/courses/${image}`;

	return (
		<li className={styles.card}>
			<Image
					alt="course"
					src={imageSrc}
					width={300}
					height={300}
					className={styles.image}
			/>
			<section className={styles.description}>
				<h2 className={styles.name}>{name}</h2>
				<div className={styles.location}>
					<div className={styles.date}>
						<p className={styles.day}>{day}</p>
						<p className={styles.month}>{month}</p>
					</div>
					<div className={styles.border}></div>
					<p className={styles.sity}>{sity}</p>
				</div>
				<div className={styles.button}>
					<Link href={'/'} >
						<Button
							type={ButtonType.Violet}
							size={ButtonSize.Desctop}
							title={'Узнать больше'}
						/>
						</Link>
				</div>
			</section>
		</li>
	);
}

export default CourseCard;


/*
				<div className={styles.introButton}>
						<Link href={'/'} >
							<Button
								type={ButtonType.Violet}
								size={ButtonSize.Desctop}
								title={'Курсы'}
							/>
						</Link>
				</div>

*/