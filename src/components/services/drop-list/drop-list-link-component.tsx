'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import styles from './drop-list.module.scss';
import clsx from 'clsx';

import {
	UpChevronGreyIcon,
	MobileMenuIcon,
	CheckboxRoundIcon,
	CheckboxRingIcon,
	InputCloseIcon,
	CloseIconMobile,
} from '@/components/ui';

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
			<button
				className={clsx(styles.title, styles.desktop)}
				onClick={() => setIsActive(!isActive)}>
				<h2 className={styles.titleText}>{title}</h2>
				<UpChevronGreyIcon />
			</button>
			<button
				className={clsx(styles.title, styles.mobile)}
				onClick={() => setIsActive(!isActive)}>
				<h2 className={styles.titleText}>{currentItem}</h2>
				<MobileMenuIcon />
			</button>
			<nav className={styles.menu}>
				<ul className={styles.menuItems}>
					<li className={clsx(styles.mobileMenuTitle, styles.mobile)}>
						<h3 className={styles.mobileMenuTitleText}>Тематика курса</h3>
						<button onClick={() => setIsActive(!isActive)}>
							<CloseIconMobile />
						</button>
					</li>
					{items?.map((item) => (
						<li
							className={clsx(styles.menuItemWrapper, {
								[styles.activeItem]: currentItem === item.topic,
							})}
							key={item.id}>
							<label className={styles.radioLabel}>
								<input
									className={styles.radioInput}
									type="radio"
									name="radio"
									onChange={() => onTopic(createPageURL(item.topic))}
								/>
								{item.topic}
							</label>
						</li>
					))}
				</ul>
			</nav>
		</section>
	);
};

export default DropListLinkComponent;

/*
			<nav className={styles.menu} onClick={() => setIsActive(!isActive)}>
						<button
								className={clsx(styles.menuItem, styles.desktop)}
								onClick={() => { onTopic(createPageURL(item.topic))}}>
								{item.topic}
						</button>
						<label className={clsx(styles.radioLabel, styles.mobile)}>
							<input 
								className={styles.radioInput}
								type='radio'
								name='radio'
								onChange={() => onTopic(createPageURL(item.topic))}
							/>
							{item.topic}
      			</label>
						<label className={styles.radioLabel}>
							<input 
								className={styles.radioInput}
								type='radio'
								name='radio'
								onChange={() => onTopic(createPageURL(item.topic))}
							/>
							{item.topic}
      			</label>

*/
