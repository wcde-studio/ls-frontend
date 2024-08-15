'use client';
import styles from './page.module.scss';

import { useState } from 'react';
import Courses from '@/components/courses/courses';
import DropList from '@/components/services/drop-list/drop-list';

import { courses } from '@/lib/courses-data';




export default function CoursesPage() {

	const items = [
		{
			id: 0,
			text: 'Эзотерика'
		},
		{
			id: 1,
			text: 'Бизнес'
		},
		{
			id: 2,
			text: 'Все курсы'
		},

	];
	const [item, setItem] = useState(items[2]);
	
	return (
		<>
			<section className={styles.section}>
				<h1 className={styles.title}>Курсы</h1>
				<DropList  title={'Тематика курса'} items={items} currentItem={item} setCurrentItem={setItem}/>
			</section>
			<section className={styles.section}>
				<Courses coursesData={courses} />
			</section>
		</>
	);
}
