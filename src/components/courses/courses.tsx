'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { clsx } from 'clsx';

import styles from './courses.module.scss';

//import { CoursesCourseCard } from '@/components/course-card';
import CourseCard from '@/components/course-card/course-card';
import { CourseCardComposition } from '@/components/course-card/types';

import Pagination from '@/components/pagination/pagination';

type Props = {
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

const PageSize = 6;

const Courses = (props: Props) => {
	const { coursesData } = props;
	const [currentPage, setCurrentPage] = useState(1);

	const currentCoursesData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return coursesData.slice(firstPageIndex, lastPageIndex);
	}, [currentPage, coursesData]);

	return (
		<div className={styles.courses}>
			{coursesData.length ? (
				<ul className={styles.coursesList}>
					{currentCoursesData?.map((course) => (
						<CourseCard
							course={course}
							composition={CourseCardComposition.Courses}
							key={course.id}
						/>
					))}
				</ul>
			) : null}
			<div className={styles.paginationWrapper}>
				<Pagination
					className="paginationBar"
					currentPage={currentPage}
					totalCount={coursesData.length}
					pageSize={PageSize}
					onPageChange={(page) => setCurrentPage(page as number)}
				/>
			</div>
		</div>
	);
};

export default Courses;
