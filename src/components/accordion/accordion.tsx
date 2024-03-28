'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
//import Link from 'next/link';
import styles from './accordion.module.css';
import { DownChevronIcon, UpChevronIcon } from '@/components/ui';

import { TCourse } from '@/lib/definitions';


interface IAccordionProps {
	course: TCourse;
}

const Accordion = (props: IAccordionProps) => {

	const { course } = props;

	const [isActive, setIsActive] = useState(false);

const title = clsx(
	styles.title,
	{[styles.isActive]: isActive}
);

	return (
		<div className={styles.accordion}>
			<div className={title} onClick={() => setIsActive(!isActive)}>
				<p className={styles.titleText} >{course?.title}</p>
				<div className={styles.icon}>
					{ isActive ? <UpChevronIcon/> : <DownChevronIcon/> }
				</div>
			</div>
			{
				isActive && 
				<div className={styles.content}>
					<p className={styles.subtitle}>{course?.subtitle}</p>
				</div>
			}
		</div>
	);
};

export default Accordion;
