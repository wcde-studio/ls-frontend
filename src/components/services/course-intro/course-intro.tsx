'use client';

import styles from './course-intro.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import {
	CalendarBigIcon,
	ClockBigIcon,
	PlaceBigIcon,
	CalendarIconMobile,
	ClockIconMobile,
	PlaceIconMobile,
} from '@/components/ui';

import { Button } from '@/components/ui';
import { ButtonSize, ButtonType } from '@/components/ui/button/types';
import clsx from 'clsx';

type TCourseIntroProps = {
	imageUrl: string;
	date: string;
	city: string;
	end: string;
	duration: string;
};

const CourseIntro = (props: TCourseIntroProps) => {
	const { imageUrl, date, end, duration, city } = props;

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

	return (
		<>
			<div className={styles.imageWrapper}>
				<Image
					alt="course"
					src={imageUrl}
					width={1110}
					height={503}
					className={styles.image}
				/>
			</div>
			<section className={styles.wrapper}>
				<section className={styles.description}>
					<ul className={clsx(styles.descriptionList, styles.desktop)}>
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
					<ul className={clsx(styles.descriptionList, styles.mobile)}>
						<li className={styles.date}>
							<CalendarIconMobile />
							<p className={styles.text}>{`${day}.${month}.${year}`}</p>
						</li>
						<li className={styles.city}>
							<PlaceIconMobile />
							<p className={styles.text}>{city}</p>
						</li>
						<li className={styles.duration}>
							<ClockIconMobile />
							<p className={styles.text}>{duration}</p>
						</li>
					</ul>
				</section>
				<Link href={'/'} className={styles.desktop}>
					<Button
						type={ButtonType.Violet}
						size={ButtonSize.Desctop}
						title={'Учавствовать'}
						className={styles.buttonSize}
					/>
				</Link>
			</section>
		</>
	);
};

export default CourseIntro;
