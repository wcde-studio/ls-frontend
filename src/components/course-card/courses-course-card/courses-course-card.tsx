'use client';

import styles from './courses-course-card.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import { CalendarIcon, ClockIcon, PlaceIcon } from '@/components/ui';

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
		topic: string;
	};
	key: number;
};

const CoursesCourseCard = (props: Props) => {
	const { course } = props;

	const { name, image, date, end, duration, target, city } = course;

	const dateData = new Date(date);
//	const endData = new Date(end);

	const startDate = [
		dateData.toLocaleString('ru-RU', { day: '2-digit' }),
		dateData.toLocaleString('ru-RU', { month: '2-digit' }),
		dateData.getFullYear(),
	];

	const imageSrc = `/courses/${image}`;

	return (
		<li className={styles.card}>
			<Image
				alt="course"
				src={imageSrc}
				width={165}
				height={380}
				className={styles.image}
			/>
			<section className={styles.wrapper}>
				<section className={styles.description}>
					<h2 className={styles.name}>{name}</h2>
					<ul>
						<li className={styles.calendar}>
							<CalendarIcon />
							<p className={styles.date}>
								{startDate.join('.')}
							</p>
						</li>
						<li className={styles.calendar}>
							<PlaceIcon />
							<p className={styles.date}>
								{city}
							</p>
						</li>
						<li className={styles.calendar}>
							<ClockIcon />
							<p className={styles.date}>{duration}</p>
						</li>
						<li className={styles.targetTitle}>Цель курса</li>
						<li className={styles.target}>{target}</li>
					</ul>
				</section>
			</section>
		</li>
	);
};

export default CoursesCourseCard;
