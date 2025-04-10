'use client';

import styles from './course-card.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import clsx from 'clsx';

import {
	CalendarIcon,
	CalendarIconMobile,
	ClockIcon,
	PlaceIcon,
	ClockIconMobile,
	PlaceIconMobile,
} from '@/components/ui';

import { Button } from '@/components/ui';
import { ButtonSize, ButtonType } from '@/components/ui/button/types';

import { CourseCardComposition } from '@/components/course-card/types';

import { months } from '@/lib/constants/date';
import { getApiServerURL } from '@/lib/api/api-utils';

type TCourseCardProps = {
	course: {
		id: number;
		//		documentId: string;
		name: string;
		date: string;
		city: string;
		end: string;
		duration: string;
		target: string;
		goals: string;
		description: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		title: string;
		topic: string;
		image: {
			id: number;
			//			documentId: string;
			//			alternativeText: null | string;
			//			name: string;
			url: string;
		};
	};
	composition: CourseCardComposition;
	key: number;
};

const CourseCard = (props: TCourseCardProps) => {
	const { course, composition } = props;

	const { name, image, date, end, duration, target, city } = course;

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

	const classNameCard = clsx(styles.card, {
		[styles[`${composition}`]]: composition,
	});

	const dateDisplay =
		composition === CourseCardComposition.Personal
			? `${startDate.join('.')}-${endDate.join('.')}`
			: `${startDate.join('.')}`;

	const buttonTitle =
		composition === CourseCardComposition.Home
			? 'Узнать больше'
			: 'Перейти к курсу';

	const url = getApiServerURL();
	const imageSrc = url + image.url;

	return (
		<div className={classNameCard}>
			<div className={styles.imageWrapper}>
				<Image
					alt="course"
					src={imageSrc}
					width={165}
					height={165}
					className={styles.image}
					priority={true}
				/>
			</div>
			<section className={styles.wrapper}>
				<section className={styles.description}>
					<h2 className={styles.name}>{name}</h2>
					<div className={styles.location}>
						<div className={styles.date}>
							<p className={styles.day}>{day}</p>
							<p className={styles.month}>{months[dateData.getMonth()]}</p>
						</div>
						<div className={styles.border}></div>
						<p className={styles.city}>{city}</p>
					</div>
					<ul className={styles.desktop}>
						<li className={styles.date}>
							<CalendarIcon />
							<p className={styles.text}>{dateDisplay}</p>
						</li>
						<li className={styles.city}>
							<PlaceIcon />
							<p className={styles.text}>{city}</p>
						</li>
						<li className={styles.duration}>
							<ClockIcon />
							<p className={styles.text}>{duration}</p>
						</li>
						<li className={styles.targetTitle}>Цель курса</li>
						<li className={styles.target}>{target}</li>
					</ul>
					<ul className={styles.mobile}>
						<li className={styles.date}>
							<CalendarIconMobile />
							<p className={styles.text}>{dateDisplay}</p>
						</li>
						<li className={styles.city}>
							<PlaceIconMobile />
							<p className={styles.text}>{city}</p>
						</li>
						<li className={styles.duration}>
							<ClockIconMobile />
							<p className={styles.text}>{duration}</p>
						</li>
						<li className={styles.targetTitle}>Цель курса</li>
						<li className={styles.target}>{target}</li>
					</ul>
				</section>
				{composition === CourseCardComposition.Courses ? null : (
					<Link href={`/courses/${course.id}`}>
						<Button
							type={ButtonType.Violet}
							size={ButtonSize.Desctop}
							title={buttonTitle}
						/>
					</Link>
				)}
			</section>
		</div>
	);
};

export default CourseCard;
