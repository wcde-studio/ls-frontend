import styles from './page.module.css';

import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

import Accordion from '@/components/accordion/accordion';
import { Award, AwardType, AwardSize } from '@/components/services';

import { courses } from '@/lib/courses-data';
import { pageData } from '@/lib/page-data';

export default function Home() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<section className={styles.section}>
					<h1 className={styles.title}>Услуги</h1>
					<ul className={styles.accordionList}>
						{courses?.map((course) => (
							<Accordion course={course} key={course.id} />
						))}
					</ul>
				</section>
				<section className={styles.section}>
					<h1 className={styles.title}>{'Премии и заслуги'}</h1>
					<ul className={styles.awardsList}>
						{pageData?.awards?.map((award) => (
							<Award
								size={AwardSize.Desctop}
								type={award.type}
								text={award.text}
								key={award.id}
							/>
						))}
					</ul>
				</section>
			</main>
			<Footer />
		</>
	);
}
