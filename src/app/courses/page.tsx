'use client';
import styles from './page.module.scss';

import { useState, useMemo } from 'react';
import Courses from '@/components/courses/courses';
import DropList from '@/components/services/drop-list/drop-list';

import { courses } from '@/lib/courses-data';

export default function CoursesPage() {
	const courseTopics = [
		{ id: 0, text: 'Эзотерика' },
		{ id: 1, text: 'Бизнес' },
		{ id: 2, text: 'Все курсы' },
	];

	const [topic, setTopic] = useState(courseTopics[2]);

	const curentCoursesData = useMemo(() => {
		return topic.text === courseTopics[2].text
			? courses
			: courses.filter((course) => course.topic === topic.text);
	}, [topic, courses]);

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
				<Courses coursesData={curentCoursesData} />
			</section>
		</>
	);
}
