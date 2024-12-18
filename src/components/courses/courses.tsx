'use client';

import React, { useState, useCallback, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';

import styles from './courses.module.scss';

//import { CoursesCourseCard } from '@/components/course-card';
import CourseCard from '@/components/course-card/course-card';
import { CourseCardComposition } from '@/components/course-card/types';

//import Pagination from '@/components/pagination/pagination';

import getCourses from '@/lib/api/api-courses';
/*
type TCoursesProps = {
	coursesData: {
		id: number;
		name: string;
		image: string;
		date: string;
		city: string;
		end: string;
		duration: string;
		target: string;
		topic: string;
	}[];
};
*/
type TCoursesProps = {
	coursesData: {
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
	}[];
};

const PageSize = 6;

const Courses = (props: TCoursesProps) => {
	const { coursesData } = props;
	return (
		<div className={styles.courses}>
			{coursesData.length ? (
				<ul className={styles.coursesList}>
					{coursesData?.map((course) => (
						<li key={course.id}>
							<Link href={`/courses/${course.id}`}>
								{
									<CourseCard
										course={course}
										composition={CourseCardComposition.Courses}
										key={course.id}
									/>
								}
							</Link>
						</li>
					))}
				</ul>
			) : null}
		</div>
	);
};

export default Courses;
