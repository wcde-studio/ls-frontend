'use client';

import React, { useState } from 'react';
import styles from './accordion.module.css';
import clsx from 'clsx';

import Link from 'next/link';

import { UpChevronIcon } from '@/components/ui';
import { Button } from '@/components/ui';

import { ButtonSize, ButtonType } from '@/components/ui/button/types';

import { Services, ServicesPrice } from '@/components/services'


type TCourse = {
	id: number;
	title: string;
	subtitle: string;
	properties: {
		id: number;
		text: string;
	}[];
	services?: {
		id: number;
		price: number;
		curentcy: string;
		properties: {
			id: number;
			text: string;
		}[];
	}[] | null;
	note: string | null;
};

type AccordionProps = {
	course: TCourse;
}

const Accordion = (props: AccordionProps) => {
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
				{
					course.services && 
					<ul className={styles.servicesWrapper}>
					{
						course.services?.map((service)=>
							<ServicesPrice price={service} key={service.id} />
						)
					}
					</ul>
				}
				{ course.note && <p className={styles.note}>{course.note}</p> }
				<div className={styles.buttonWrapper}>
					<Link href={'/'}>
						<Button 
							type={ButtonType.White}
							size={ButtonSize.Desctop}
							title={'Оставить заявку'}
						/>
					</Link>
				</div>
			</section>
		</li>
	);
};

export default Accordion;

