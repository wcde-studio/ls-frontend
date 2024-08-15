import styles from './page.module.scss';

import Courses from '@/components/courses/courses';

import { courses } from '@/lib/courses-data';

export default function CoursesPage() {
	return (
		<>
			<section className={styles.section}>
				<h1 className={styles.title}>Курсы</h1>
			</section>
			<section className={styles.section}>
				<Courses coursesData={courses} />
			</section>
		</>
	);
}
