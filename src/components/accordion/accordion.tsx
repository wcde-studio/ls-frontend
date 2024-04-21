'use client';

import { useState } from 'react';

import styles from './accordion.module.scss';
import clsx from 'clsx';
import Link from 'next/link';

import { UpChevronIcon } from '@/components/ui';
import { Button } from '@/components/ui';

import { ButtonSize, ButtonType } from '@/components/ui/button/types';

import { Price } from '@/components/services';

type TProperty = {
	id: number;
	text: string;
};

type TPrice = {
	id: number;
	price: number;
	currency: string;
	properties: TProperty[];
};

type TCourse = {
	id: number;
	title: string;
	subtitle: string;
	properties?: TProperty[];
	services?: TPrice[] | null;
	note: string | null;
};

type Props = {
	course: TCourse;
};

const Accordion = (props: Props) => {
	const { course } = props;

	const [isActive, setIsActive] = useState(false);
	const accordion = clsx(styles.accordion, {
		[styles.accordionOpened]: isActive,
	});

	return (
		<li className={accordion}>
			<button className={styles.title} onClick={() => setIsActive(!isActive)}>
				<h2 className={styles.titleText}>{course?.title}</h2>
				<UpChevronIcon />
			</button>
			<section className={styles.contentWrapper}>
				<h3 className={styles.subtitle}>{course?.subtitle}</h3>
				<ul className={styles.descriptionList}>
					{course?.properties?.map((property) => (
						<li className={styles.descriptionItem} key={property.id}>
							<p className={styles.descriptionItem_text}>{property.text}</p>
						</li>
					))}
				</ul>
				{course.services && (
					<ul className={styles.servicesWrapper}>
						{course.services?.map((service) => (
							<Price price={service} key={service.id} />
						))}
					</ul>
				)}
				{course.note && <p className={styles.note}>{course.note}</p>}
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
