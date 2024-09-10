'use client';
import styles from './page.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import { courses } from '@/lib/courses-data';
import { description } from '@/lib/course-description-data';
import { reviews } from '@/lib/course-reviews-data';

import CourseIntro from '@/components/services/course-intro/course-intro';
import CourseDescription from '@/components/services/course-description/course-description';

import Slider from '@/components/slider/sider';

type TCoursePageProps = {
	params: {
		id: string;
	};
};

export default function CoursePage(props: TCoursePageProps) {
	const { id } = props.params;
	const course = courses.find((course) => `${course.id}` === id);

	return course ? (
		<>
			<section className={styles.section}>
				<h1 className={styles.title}>{course.name}</h1>
				<CourseIntro
					image={course.image}
					date={course.date}
					end={course.end}
					duration={course.duration}
					target={course.target}
					city={course.city}
				/>
			</section>
			<section className={styles.description}>
				<CourseDescription
					target={course.target}
					goals={description.goals}
					description={description.description}
					details={description.details}
				/>
			</section>
			<section className={styles.section}>
				<h1 className={styles.title}>{'Отзывы'}</h1>
				<div>
					<Slider reviews={reviews} />
				</div>
			</section>
		</>
	) : null;
}
