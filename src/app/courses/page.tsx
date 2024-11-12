'use client';
import styles from './page.module.scss';

import { useState, useMemo, useEffect } from 'react';
import Courses from '@/components/courses/courses';
import DropList from '@/components/services/drop-list/drop-list';

import { courses } from '@/lib/courses-data';

import Pagination from '@/components/pagination/pagination';
import getCourses from '@/lib/api/api-courses';

type TCourses = {
      id: number,
      documentId: string,
      name: string,
      date: string,
      city: string,
      end: string,
      duration: string,
      target: string,
      goals: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      publishedAt: string,
      title: string,
      topic: string,
      image: {
        id: number,
        documentId: string,
        alternativeText: null | string,
        name: string,
        url: string
      }
		}

export default function CoursesPage() {

	const courseTopics = useMemo(() => {
		return [
			{ id: 0, text: 'Эзотерика' },
			{ id: 1, text: 'Бизнес' },
			{ id: 2, text: 'Все курсы' },
		];
	}, []);

	const [topic, setTopic] = useState(courseTopics[2].text);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalCount, setTotalCount] = useState(6);
	const pageSize = 6;
	const [coursesData, setCoursesData] = useState<TCourses[] | null>(null);
	
	/*
	const currentCoursesData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return coursesData.slice(firstPageIndex, lastPageIndex);
	}, [currentPage, coursesData]);
*/

	useEffect(()=>{
		setCurrentPage(1);
	}, [topic]);	


	useEffect(()=>{
		async function fetchData() {
			const url = 'http://127.0.0.1:1337';
			const path = '/api/courses';
			const data = await getCourses(url, path, currentPage, pageSize, topic, courseTopics[2].text);
			const courses = data?.data;
			setCoursesData(courses);
			setTotalCount(data.meta.pagination.total);
			//console.log({courses});
		}	
		fetchData();
	}, [currentPage, topic, courseTopics]);


/*
	const curentCoursesData = useMemo(() => {
		return topic.text === courseTopics[2].text
			? courses
			: courses.filter((course) => course.topic === topic.text);
	}, [topic, courseTopics]);
*/
	return (
		<>
			<section className={styles.titleSection}>
				<h1 className={styles.title}>Курсы</h1>
				<DropList
					title={'Тематика курса'}
					items={courseTopics}
					currentItem={topic}
					setCurrentItem={setTopic}
				/>
			</section>
			<section className={styles.section}>
				{
					coursesData ? <Courses coursesData={coursesData} /> : null
				}
					</section>
			<section className={styles.paginationSection}>
				<Pagination
					className="paginationBar"
					currentPage={currentPage}
					totalCount={totalCount}
					pageSize={pageSize}
					onPageChange={(page) => setCurrentPage(page as number)}
				/>
			</section>
		</>
	);
}
