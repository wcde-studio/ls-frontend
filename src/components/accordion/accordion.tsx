'use client';

import React, { useState } from 'react';
import styles from './accordion.module.css';
import clsx from 'clsx';

//import Link from 'next/link';

import { UpChevronIcon } from '@/components/ui';
//import { TCourse } from '@/lib/definitions';
import { Button } from '@/components/ui'
import Services from '@/components/services/services'

type TProperty ={
	id: number,
	text: string
};

type TPriceOfServices = {
	id: number,
	price: string,
	properties: Array<TProperty>,
};

type TCourse = {
	id: number,
	title: string,
	subtitle: string,
	properties: Array<TProperty>,
	services?: Array<TPriceOfServices> | null,
	note: string | null,
};


interface IAccordionProps {
	course: TCourse;
}

const Accordion = (props: IAccordionProps) => {
	const { course } = props;
	const [isActive, setIsActive] = useState(false);
	const accordion = clsx(
		styles.accordion,
		{[styles.accordionOpened]: isActive}
	);
	return (
		<li className={accordion}>
			<button className={styles.title} onClick={() => setIsActive(!isActive)}>
				<h2 className={styles.titleText}>{course?.title}</h2>
				<UpChevronIcon/>
			</button>
			<section className={styles.contentWrapper}>
				<h3 className={styles.subtitle}>{course?.subtitle}</h3>
				<ul className={styles.descriptionList}>
					{
						course?.properties?.map((property) =>
						<li className={styles.descriptionItem} key={property.id}>
							<p className={styles.descriptionItem_text}>{property.text}</p>
						</li>
						)
					}
				</ul>
				<Services services={course.services} />
					{
						course.note ? 
							<div className={styles.note}>{course.note}</div>
						 : null
					}
				<div className={styles.buttonWrapper}>
					<Button 
						type={'button_2'}
						size={'desctop'}
						onClick={()=>{}}
						title={'Оставить заявку'}
					/>
				</div>
			</section>
		</li>
	);
};



export default Accordion;

