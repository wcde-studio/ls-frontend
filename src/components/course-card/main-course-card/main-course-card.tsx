'use client';

import styles from './main-course-card.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import { LadaVedIcon, LadaVedIconSvg } from '@/components/ui';
import { Button } from '@/components/ui';
import { ButtonSize, ButtonType } from '@/components/ui/button/types';

import { months } from '@/lib/constants/date';

type Props = {
	course: {
		id: number;
		name: string;
		image: string;
		date: string;
		city: string;
		end: string;
		duration: string;
		target: string;
	};
	key: number;
};

const MainCourseCard = (props: Props) => {
	const { course } = props;

	const { name, image, date, city } = course;

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
					<p className={styles.city}>{city}</p>
				</div>
				<div className={styles.button}>
					<Link href={'/'}>
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
};

export default MainCourseCard;
