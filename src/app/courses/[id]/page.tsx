'use client';
import styles from './page.module.scss';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

//import { courses } from '@/lib/courses-data';
//import { description } from '@/lib/course-description-data';
//import { reviews } from '@/lib/course-reviews-data';

import CourseIntro from '@/components/services/course-intro/course-intro';
import CourseDescription from '@/components/services/course-description/course-description';

import Slider from '@/components/slider/slider';
import getCourse from '@/lib/api/api-course';

type TCoursePageProps = {
	params: {
		id: string;
	};
};

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

export default function CoursePage(props: TCoursePageProps) {
	const { id } = props.params;
	//	const course = courses.find((course) => `${course.id}` === id);
	const [course, setCourse] = useState<TCourse | null>(null);

	useEffect(() => {
		async function fetchData() {
			//			const url = 'http://127.0.0.1:1337';
			const url = process.env.API_SERVER_HOST
				? process.env.API_SERVER_HOST
				: 'http://127.0.0.1:1337';
			const path = '/api/courses';
			const data = await getCourse(url, path, Number(id));
			const course = data?.data[0];
			setCourse(course);
			//console.log({course});
		}
		fetchData();
	}, []);

	return course ? (
		<>
			<section className={styles.section}>
				<h1 className={styles.title}>{course.name}</h1>
				<CourseIntro
					imageUrl={course.image.url}
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
