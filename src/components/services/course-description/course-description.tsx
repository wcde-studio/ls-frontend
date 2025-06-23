'use client';

import styles from './course-description.module.scss';

import { useState } from 'react';
import Link from 'next/link';

import { Button, UpChevronBlueIcon } from '@/components/ui';
import { ButtonSize, ButtonType } from '@/components/ui/button/types';
import clsx from 'clsx';

type TCourseDescriptionProps = {
	target: string;
	goals: string;
	description: string;
	title: string;
	modules: {
		id: number;
		name: string;
		program: {
			id: number;
			title: string;
			text: string;
		}[];
	}[];
	link:string;
};

const CourseDescription = (props: TCourseDescriptionProps) => {
	const { target, goals, description, title, modules, link } = props;
	const [isActive, setIsActive] = useState(false);

	const accordion = clsx(styles.buttonDescription, {
		[styles.accordionOpened]: isActive,
	});

	return (
		<>
			<section className={styles.wrapper}>
				<section className={styles.description}>
					<h2>{'Цель курса:'}</h2>
					<p>{target}</p>
				</section>
				<section className={styles.description}>
					<h2>{'Задача курса:'}</h2>
					<p>{goals}</p>
				</section>
				<div className={styles.separator}></div>
				<section className={styles.description}>
					<h2 className={styles.descriptionMobile}>{'Описание:'}</h2>
					{description.split(/\r?\n/).length
						? description
								.split(/\r?\n/)
								.map((descr, id) => <p key={id}>{descr}</p>)
						: null}
				</section>
				<button
					className={clsx(styles.buttonDescription, styles.mobile, {
						[styles.buttonDescriptionOpened]: isActive,
					})}
					onClick={() => setIsActive(!isActive)}>
					<h2 className={styles.buttonDescriptionText}>
						Смотреть полное описание
					</h2>
					<UpChevronBlueIcon />
				</button>
				<section
					className={clsx(styles.details, {
						[styles.descriptionOpened]: isActive,
					})}>
					<h2>{title}</h2>
					<ul className={styles.modules}>
						{modules.length
							? modules.map((module) => (
									<li key={module.id}>
										{module.name}
										<ul className={styles.module}>
											{module.program.length
												? module.program.map((listItem) => (
														<li key={listItem.id}>
															{listItem.title}
															<ul className={styles.listItem}>
																{listItem
																	? listItem.text
																			?.split(/\r?\n/)
																			.map((text, id) => (
																				<li key={id}>{text}</li>
																			))
																	: null}
															</ul>
														</li>
													))
												: null}
										</ul>
									</li>
								))
							: null}
					</ul>
				</section>
				<Link href={link}>
					<Button
						type={ButtonType.Violet}
						size={ButtonSize.Desctop}
						title={'Учавствовать'}
					/>
				</Link>
				<div className={clsx(styles.separator, styles.mobile)}></div>
			</section>
		</>
	);
};

export default CourseDescription;
