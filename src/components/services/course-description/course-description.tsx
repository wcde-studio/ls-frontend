'use client';

import styles from './course-description.module.scss';

import Link from 'next/link';

import { Button } from '@/components/ui';
import { ButtonSize, ButtonType } from '@/components/ui/button/types';

type TCourseDescriptionProps = {
	target: string;
	goals: string;
	description: {
		id: number;
		text: string;
	}[];
	details: {
		title: string;
		modules: {
			id: number;
			name: string;
			list: {
				id: number;
				title: string;
				list: {
					id: number;
					text: string;
				}[];
			}[];
		}[];
	};
};

const CourseDescription = (props: TCourseDescriptionProps) => {
	const { target, goals, description, details } = props;

	return (
		<>
			<section className={styles.wrapper}>
				<section className={styles.description}>
					<h1>{'Цель курса:'}</h1>
					<p>{target}</p>
				</section>
				<section className={styles.description}>
					<h1>{'Задача курса:'}</h1>
					<p>{goals}</p>
				</section>
				<div className={styles.separator}></div>
				<section className={styles.description}>
					<h1>{'Описание:'}</h1>
					{description.length
						? description.map((descr) => <p key={descr.id}>{descr.text}</p>)
						: null}
				</section>
				<section className={styles.details}>
					<h2>{details.title}</h2>
					<ul className={styles.modules}>
						{details.modules.length
							? details.modules.map((module) => (
									<li key={module.id}>
										{module.name}
										<ul className={styles.module}>
											{module.list.length
												? module.list.map((listItem) => (
														<li key={listItem.id}>
															{listItem.title}
															<ul className={styles.listItem}>
																{listItem.list.length
																	? listItem.list.map((listItemList) => (
																			<li key={listItemList.id}>
																				{listItemList.text}
																			</li>
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
				<Link href={'/'}>
					<Button
						type={ButtonType.Violet}
						size={ButtonSize.Desctop}
						title={'Учавствовать'}
					/>
				</Link>
			</section>
		</>
	);
};

export default CourseDescription;
