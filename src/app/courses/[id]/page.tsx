//'use client';
import styles from './page.module.scss';

//import { useEffect, useState } from 'react';

//import Image from 'next/image';
//import Link from 'next/link';

//import { courses } from '@/lib/courses-data';
//import { description } from '@/lib/course-description-data';
//import { reviews } from '@/lib/course-reviews-data';

import CourseIntro from '@/components/services/course-intro/course-intro';
import CourseDescription from '@/components/services/course-description/course-description';

import Slider from '@/components/slider/slider';
//import getCourse from '@/lib/api/api-course';
import { getApiServerURL, getCourse } from '@/lib/api/api-utils';

type TCoursePageProps = {
	params: {
		id: string;
	};
};
/*
type TCourse = {
	id: number;
	documentId: string;
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
		documentId: string;
		alternativeText: null | string;
		name: string;
		url: string;
	};
	modules: {
		id: number;
		name: string;
		program: {
			id: number;
			title: string;
			text: string;
		}[];
	}[];
	reviews: {
		id: number;
		name: string;
		text: string;
	}[];
};
*/
export default async function CoursePage(props: TCoursePageProps) {
	const { id } = props.params;
	const url = getApiServerURL();
	const courseData = await getCourse(id);
	const course = courseData?.data[0];

	return course ? (
		<>
			<section className={styles.section}>
				<h1 className={styles.title}>{course.name}</h1>
				<CourseIntro
					imageUrl={url + course?.image.url}
					date={course.date}
					end={course.end}
					duration={course.duration}
					city={course.city}
				/>
			</section>
			<section className={styles.description}>
				<CourseDescription
					target={course.target}
					goals={course.goals}
					description={course.description}
					title={course.title}
					modules={course.modules}
				/>
			</section>
			<section className={styles.section}>
				<h1 className={styles.title}>{'Отзывы'}</h1>
				<div>
					<Slider reviews={course.reviews} />
				</div>
			</section>
		</>
	) : null;
}

