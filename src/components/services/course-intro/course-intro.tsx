'use client';

import styles from './course-intro.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import { CalendarBigIcon, ClockBigIcon, PlaceBigIcon } from '@/components/ui';

import { Button } from '@/components/ui';
import { ButtonSize, ButtonType } from '@/components/ui/button/types';

type TCourseIntroProps = {
	image: string;
	date: string;
	city: string;
	end: string;
	duration: string;
	target: string;
};

const CourseIntro = (props: TCourseIntroProps) => {
	const { image, date, end, duration, target, city } = props;

	const dateData = new Date(date);
	const endData = new Date(end);

	const startDate = [
		dateData.toLocaleString('ru-RU', { day: '2-digit' }),
		dateData.toLocaleString('ru-RU', { month: '2-digit' }),
		dateData.getFullYear(),
	];

	const endDate = [
		endData.toLocaleString('ru-RU', { day: '2-digit' }),
		endData.toLocaleString('ru-RU', { month: '2-digit' }),
		endData.getFullYear(),
	];

	const day = dateData.toLocaleString('ru-RU', { day: '2-digit' });
	const month = dateData.toLocaleString('ru-RU', { month: '2-digit' });
	const year = dateData.getFullYear();

	const imageSrc = `/courses/${image}`;

	return (
		<>
			<div className={styles.imageWrapper}>
				<Image
					alt="course"
					src={imageSrc}
					width={1110}
					height={503}
					className={styles.image}
				/>
			</div>
			<section className={styles.wrapper}>
				<section className={styles.description}>
					<ul>
						<li className={styles.date}>
							<CalendarBigIcon />
							<p className={styles.text}>{`${day}.${month}.${year}`}</p>
						</li>
						<li className={styles.city}>
							<PlaceBigIcon />
							<p className={styles.text}>{city}</p>
						</li>
						<li className={styles.duration}>
							<ClockBigIcon />
							<p className={styles.text}>{duration}</p>
						</li>
					</ul>
				</section>
				<Link href={'/'}>
					<Button
						type={ButtonType.Violet}
						size={ButtonSize.Desctop}
						title={'Учавствовать'}
					/>
				</Link>
			</section>
		</>
	);
};

export default CourseIntro;
