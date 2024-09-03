'use client';

import { useState, useCallback } from 'react';

import styles from './drop-list.module.scss';
import clsx from 'clsx';

import { UpChevronGreyIcon } from '@/components/ui';

type TItem = {
	id: number;
	text: string;
};

type TDropListProps = {
	title: string;
	items: TItem[];
	currentItem: TItem;
	setCurrentItem: (item: TItem) => void;
};

const DropList = (props: TDropListProps) => {
	const { title, items, currentItem, setCurrentItem } = props;

	const [isActive, setIsActive] = useState(false);
	const dropList = clsx(styles.dropList, { [styles.listOpened]: isActive });

	const itemOnClick = (item: TItem) => () => {
		setCurrentItem(item);
		setIsActive(false);
	};

	return (
		<section className={dropList}>
			<button className={styles.title} onClick={() => setIsActive(!isActive)}>
				<h2 className={styles.titleText}>{title}</h2>
				<UpChevronGreyIcon />
			</button>
			<nav className={styles.menu}>
				<ul className={styles.menuItems}>
					{items?.map((item) => (
						<li
							className={clsx(styles.menuItemWrapper, {
								[styles.activeItem]: currentItem.text === item.text,
							})}
							key={item.id}>
							<button className={styles.menuItem} onClick={itemOnClick(item)}>
								{item.text}
							</button>
						</li>
					))}
				</ul>
			</nav>
		</section>
	);
};

export default DropList;
