'use client';

import { useState } from 'react';

import styles from './drop-list.module.scss';
import clsx from 'clsx';
import Link from 'next/link';

import { UpChevronIcon } from '@/components/ui';
import { Button } from '@/components/ui';

import { ButtonSize, ButtonType } from '@/components/ui/button/types';

type Props = {
	title: string;
	items: {
		id: number;
		text: string;
 	}[];
	currentItem: string;
	setCurrentItem: (name: string)=> void;
};

const DropList = (props: Props) => {
	const { title, items, currentItem, setCurrentItem } = props;

	const [isActive, setIsActive] = useState(false);

	const list = clsx(styles.list, {
		[styles.listOpened]: isActive,
	});

	return (
		<section className={list}>
			<button className={styles.title} onClick={() => setIsActive(!isActive)}>
				<h2 className={styles.titleText}>{title}</h2>
				<UpChevronIcon />
			</button>
			<nav className={styles.contentWrapper}>
				<ul className={styles.descriptionList}>
					{items?.map((item) => (
						<li className={styles.descriptionItem} key={item.id}>
							<button className={styles.descriptionItem_text}>{item.text}</button>
						</li>
					))}
				</ul>
			</nav>
		</section>
	);
};

export default DropList;
