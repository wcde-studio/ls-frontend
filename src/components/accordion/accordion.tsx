'use client';

import { useState } from 'react';

import styles from './accordion.module.scss';
import clsx from 'clsx';
import Link from 'next/link';

import { DownChevronIcon, DownChevronMobileIcon } from '@/components/ui';
import { Button } from '@/components/ui';

import { ButtonSize, ButtonType } from '@/components/ui/button/types';

import { Price } from '@/components/services';

interface TProperties {
	id: number;
	price: number;
	currency: string;
	properties?:
		| {
				id: number;
				text: string;
		  }[]
		| null;
}

interface TService extends Pick<TProperties, 'id' | 'properties'> {
	title: string;
	subtitle: string;
	services?: TProperties[] | null;
	note: string | null;
	link: string;
}

type TAccordionProps = {
	service: TService;
	key?: number;
};

const Accordion = (props: TAccordionProps) => {
	const { service, key } = props;

	const [isActive, setIsActive] = useState(false);
	const accordion = clsx(styles.accordion, {
		[styles.accordionOpened]: isActive,
	});
	

	return (
		<li className={accordion}>
			<button className={clsx(styles.title, styles.desktop)} onClick={() => setIsActive(!isActive)}>
				<h2 className={styles.titleText}>{service?.title}</h2>
				<DownChevronIcon />
			</button>
			<button className={clsx(styles.title, styles.mobile)} onClick={() => setIsActive(!isActive)}>
				<h2 className={styles.titleText}>{service?.title}</h2>
				<DownChevronMobileIcon />
			</button>

			<section className={styles.contentWrapper}>
				<div className={styles.subtitle}><b>Кому подходит: </b>{service?.subtitle}</div>
				<ul className={styles.descriptionList}>
					{service?.properties?.map((property) => (
						<li className={styles.descriptionItem} key={property.id}>
							<p className={styles.descriptionItem_text}>{property.text}</p>
						</li>
					))}
				</ul>
				{service.services && (
					<ul className={styles.servicesWrapper}>
						{service.services?.map((service) => (
							<Price price={service} key={service.id} />
						))}
					</ul>
				)}
				{service.note && <p className={styles.note}>{service.note}</p>}
				<div className={styles.buttonWrapper}>
					<Link href={service.link}>
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
