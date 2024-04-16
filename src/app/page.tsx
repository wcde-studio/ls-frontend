import styles from './page.module.css';

import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

import Accordion from '@/components/accordion/accordion';
import {
	Award,
	AwardType,
	AwardSize,
	Diploma,
	DiplomaSize,
} from '@/components/services';

import { services } from '@/lib/services-data';
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
						{services?.map((service) => (
							<Accordion service={service} key={service.id} />
						))}
					</ul>
				</section>
				<section className={styles.section}>
					<h1 className={styles.title}>{'Ближайшие курсы'}</h1>
					<ul className={styles.corsesList}>
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
				<section className={styles.section}>
					<h1 className={styles.title}>{'Дипломы'}</h1>
					<ul className={styles.diplomaList}>
						{pageData?.diplomas?.map((diploma) => (
							<Diploma
								size={DiplomaSize.Desctop}
								src={diploma.src}
								alt={diploma.alt}
								key={diploma.id}
							/>
						))}
					</ul>
				</section>
			</main>
			<Footer />
		</>
	);
}
