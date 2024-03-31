'use client';

import React, { useState } from 'react';
import styles from './accordion.module.css';
import clsx from 'clsx';

import Link from 'next/link';

import { UpChevronIcon } from '@/components/ui';
import { TCourse } from '@/lib/definitions';
import { Button } from '@/components/ui'

import Services from '@/components/services/services'


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
		<div className={accordion}>
			<div className={styles.accordionWrapper}>
				<div className={styles.title} onClick={() => setIsActive(!isActive)}>
					<p className={styles.titleText}>
						{course?.title}
					</p>
				<div className={styles.icon}><UpChevronIcon/></div>
			</div>
			<div className={styles.contentWrapper}>
				<div className={styles.content}>
					<p className={styles.subtitle}>{course?.subtitle}</p>
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
					<div className={styles.applicationLinkWrapper}>
						<Link href={'/'}>
							<Button type={'button_2'} size={'desctop'}>
								Оставить заявку
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
		</div>
	);
};



export default Accordion;

