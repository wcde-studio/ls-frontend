
import React from 'react';

import styles from './page.module.css';

import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

import Accordion from '@/components/accordion/accordion';

import { courses } from '@/lib/courses-data';

export default function Home() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<section className={styles.section}>
					<h1 className={styles.title}>Услуги</h1>
					<ul className={styles.accordionList}>
					{
						courses?.map((course) => 
							<Accordion course={course} key={course.id} />
						)
					}
					</ul>
				</section>
			</main>
			<Footer />
		</>
	);
}
