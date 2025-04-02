'use server';
import styles from './page.module.scss';

import { useState, useMemo, useEffect } from 'react';
import Courses from '@/components/courses/courses';
import DropListLinkComponent from '@/components/services/drop-list/drop-list-link-component';

import PaginationLinkComponent from '@/components/pagination/pagination-link-component';
//import getCourses from '@/lib/api/api-courses';
import { getCourses, getCourseTopics } from '@/lib/api/api-utils';
import clsx from 'clsx';


interface SearchParamsProps {
	searchParams?: {
		page?: string;
		topic?: string;
		query?: string;
	};
}

export default async function CoursesPage({ searchParams }: SearchParamsProps) {
	const search = await searchParams;
	const allCourseTopic = { id: 0, topic: 'Все курсы' };

	const topic = search?.topic ? search?.topic : allCourseTopic.topic;

	const currentPage = search?.page ? Number(search?.page) : 1;
	const pageSize = 6;

	const data = await getCourses(
		currentPage,
		pageSize,
		topic,
		allCourseTopic.topic
	);

	const courseTopics = await getCourseTopics();
	courseTopics.push(allCourseTopic);

	const totalCount = data?.meta ? Number(data?.meta.pagination.total) : 6;
	const coursesData = data?.data;

	return (
		<>
			<section className={styles.titleSection}>
				<h1 className={clsx(styles.title, styles.desktop)}>Курсы</h1>
				<DropListLinkComponent
					title={'Тематика курса'}
					items={courseTopics}
					currentItem={topic}
				/>
			</section>
			<section className={styles.section}>
				{coursesData ? <Courses coursesData={coursesData} /> : null}
			</section>
			<section className={styles.paginationSection}>
				<PaginationLinkComponent
					className="paginationBar"
					currentPage={currentPage}
					totalCount={totalCount}
					pageSize={pageSize}
				/>
			</section>
		</>
	);
}
