import styles from './page.module.scss';

import Accordion from '@/components/accordion/accordion';
import {
	Award,
	AwardType,
	AwardSize,
	Diploma,
	DiplomaSize,
} from '@/components/services';

import Intro from '@/components/intro/intro';
import CourseCard from '@/components/course-card/course-card';
import { CourseCardComposition } from '@/components/course-card/types';

import {
	getApiServerURL,
	getAwards,
	getDiplomas,
	getServices,
	getCoursesHome,
	getIntro,
} from '@/lib/api/api-utils';

type TAwardType = {
	id: number;
	type: AwardType;
	text: string;
};

type TDiplomasType = {
	id: number;
	alt: string;
	src: {
		id: number;
		url: string;
	};
};

type TServicesType = {
	id: number;
	title: string;
	subtitle: string;
	note: string | null;
	services: {
		id: number;
		price: number;
		currency: string;
		properties: {
			id: number;
			text: string;
		}[];
	}[];
	properties: {
		id: number;
		text: string;
	}[];
	link: string;
};

type TgetCoursesHome = {
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
};

export default async function Home() {
	const url = getApiServerURL();

	const awards = await getAwards();
	const diplomas = await getDiplomas();
	const services = await getServices();
	const courses = await getCoursesHome();
	const intro = await getIntro();
	return (
		<>
			<Intro imageSrc={url + intro?.data.image.url} title={intro?.data.title} />
			<section className={styles.section}>
				<h1 className={styles.title}>Услуги</h1>
				<ul className={styles.accordionList}>
					{services?.data.map((service: TServicesType) => (
						<Accordion service={service} key={service.id} />
					))}
				</ul>
			</section>
			<section className={styles.section}>
				<h1 className={styles.title}>{'Ближайшие курсы'}</h1>
				<ul className={styles.coursesList}>
					{courses?.data.map((course: TgetCoursesHome) => {
						const date = new Date(course.date);
						const year = date.getFullYear();
						return (
							<CourseCard
								course={course}
								composition={CourseCardComposition.Home}
								key={course.id}
							/>
						);
					})}
				</ul>
			</section>
			<section className={styles.section}>
				<h1 className={styles.title}>{'Премии и заслуги'}</h1>
				<ul className={styles.awardsList}>
					{awards?.data.map((award: TAwardType) => (
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
					{diplomas?.data.map((diploma: TDiplomasType) => (
						<Diploma
							size={DiplomaSize.Desctop}
							src={url + diploma.src.url}
							alt={diploma.alt}
							key={diploma.id}
						/>
					))}
				</ul>
			</section>
		</>
	);
}
