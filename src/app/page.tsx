import styles from './page.module.css';

import Image from 'next/image';
import Link from 'next/link';


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

import { courses } from '@/lib/courses-data';
import { pageData } from '@/lib/page-data';

import { LadaVedIcon, LadaVedIconSvg, LogoIcon} from '@/components/ui';

import { Button } from '@/components/ui';
import { ButtonSize, ButtonType } from '@/components/ui/button/types';

import Intro from '@/components/intro/intro';


export default function Home() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<Intro />
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
