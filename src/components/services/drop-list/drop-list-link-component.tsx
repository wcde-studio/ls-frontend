'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import styles from './drop-list.module.scss';
import clsx from 'clsx';

import { UpChevronGreyIcon } from '@/components/ui';

type TItem = {
	id: number;
	topic: string;
};

type TDropListProps = {
	title: string;
	items: TItem[];
	currentItem: string;
};

const DropListLinkComponent = (props: TDropListProps) => {
	const { title, items, currentItem } = props;

	const pathname = usePathname();
	const router = useRouter();

	const createPageURL = (topic: string) => {
		const params = new URLSearchParams();
		params.set('topic', topic);
		params.set('page', '1');
		return `${pathname}?${params.toString()}`;
	};

	const onTopic = (href: string) => {
		setIsActive(!isActive);
		router.push(href);

	};

	const [isActive, setIsActive] = useState(false);
	const dropList = clsx(styles.dropList, { [styles.listOpened]: isActive });

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
								[styles.activeItem]: currentItem === item.topic,
							})}
							key={item.id}>
							<button className={styles.menuItem} onClick={() => onTopic(createPageURL(item.topic))}>
								{item.topic}
							</button>
						</li>
					))}
				</ul>
			</nav>
		</section>
	);
};

export default DropListLinkComponent;
