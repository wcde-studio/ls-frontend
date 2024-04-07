import React from 'react';

import styles from './page.module.css';

import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

import Accordion from '@/components/accordion/accordion';
import { ServicesAward, ServicesAwardType, ServicesAwardSize } from '@/components/services';
//import { ServicesAwardType, ServicesAwardSize } from '@/components/services/types';


import { courses } from '@/lib/courses-data';


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
						<ServicesAward size={ServicesAwardSize.Desctop} type={ServicesAwardType.Team} text={'Член правления Общероссийской общественной организации «Деловые Женщины России»'}/>
						<ServicesAward size={ServicesAwardSize.Desctop} type={ServicesAwardType.Game} text={'Автор бизнес-игры «Мышление на миллиард»'}/>
						<ServicesAward size={ServicesAwardSize.Desctop} type={ServicesAwardType.Book} text={'Автор книг по этнологии и древней магической традиции'}/>
						<ServicesAward size={ServicesAwardSize.Desctop} type={ServicesAwardType.Leadership} text={'Региональный лидер клуба PRO-женщин'}/>
						<ServicesAward size={ServicesAwardSize.Desctop} type={ServicesAwardType.TVScreen} text={'TV-эксперт Каналы ОРТ, ТВ3, ОТР, НТВ, РенТВ и др.'}/>
						<ServicesAward size={ServicesAwardSize.Desctop} type={ServicesAwardType.TV} text={'Сильнейший участник шоу «Сверхъестественный отбор» на ТВ3'}/>
						<ServicesAward size={ServicesAwardSize.Desctop} type={ServicesAwardType.Prize} text={'Трижды лауреат премии «Успех», «Золотая птица», деловые женщины России 2019, 2020, 2021гг.'}/>
						<ServicesAward size={ServicesAwardSize.Desctop} type={ServicesAwardType.Ribbon} text={'Трижды лауреат телевизионной бизнес-премии за вклад в развитие общества и социальное служение «Маgic Awords»'}/>
						<ServicesAward size={ServicesAwardSize.Desctop} type={ServicesAwardType.Cup} text={'Дважды лауреат премии «Признание года» от республики Башкортостан и канала MTVmix 2018, 2021гг.'}/>
						<ServicesAward size={ServicesAwardSize.Desctop} type={ServicesAwardType.Award} text={'Победитель множества профессиональных соревнований в области магии, в том числе международных'}/>
					</ul>
				</section>
			</main>
			<Footer />
		</>
	);
}
