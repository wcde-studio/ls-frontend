'use client';

import styles from './personal-area-course-card.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import { CalendarIcon, ClockIcon } from '@/components/ui';

import { Button } from '@/components/ui';
import { ButtonSize, ButtonType } from '@/components/ui/button/types';

//import { months } from '@/lib/constants/date';

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

const PersonalAreaCourseCard = (props: Props) => {
	const { course } = props;

	const { name, image, date, end, duration, target } = course;

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

	//	const day = dateData.toLocaleString('ru-RU', { day: '2-digit' });
	//	const month = dateData.toLocaleString('ru-RU', { month: '2-digit' });
	//	const year = dateData.getFullYear();

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
								{`${startDate.join('.')}-${endDate.join('.')}`}
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
				<Link href={'/'}>
					<Button
						type={ButtonType.Violet}
						size={ButtonSize.Desctop}
						title={'Перейти к курсу'}
					/>
				</Link>
			</section>
		</li>
	);
};

export default PersonalAreaCourseCard;

/*				<ul>
					<li className={styles.calendar}>
						<svg></svg>
						<p className={styles.date}>
							{`${startDate.join('.')}-${endDate.join('.')}`}
						</p>
					</li>
					<li className={styles.calendar}>
						<svg></svg>
						<p className={styles.date}>{duration}</p>
					</li>
					<li className={styles.targetTitle}>Цель курса</li>
					<li className={styles.target}>{target}</li>
				</ul>
*/
