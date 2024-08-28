'use client';

import styles from './course-description.module.scss';

import Link from 'next/link';

import { Button } from '@/components/ui';
import { ButtonSize, ButtonType } from '@/components/ui/button/types';

type Props = {
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

const CourseDescription = (props: Props) => {
	const { target, goals, description, details } = props;

	return (
		<>
			<section className={styles.wrapper}>
				<section className={styles.description}>
					<h1 className={styles.title}>{'Цель курса:'}</h1>
					<p className={styles.text}>{target}</p>
				</section>
				<section className={styles.description}>
					<h1 className={styles.title}>{'Задача курса:'}</h1>
					<p className={styles.text}>{goals}</p>
				</section>
				<div className={styles.separator}></div>

				<section className={styles.description}>
					<h1 className={styles.title}>{'Описание:'}</h1>
					{description.length
						? description.map((descr) => (
								<p className={styles.text} key={descr.id}>
									{descr.text}
								</p>
							))
						: null}
				</section>
				<section className={styles.details}>
					<h2 className={styles.titleDetails}>{details.title}</h2>
					<ul>
						{details.modules.length
							? details.modules.map((module) => (
									<li key={module.id}>
										<h3 className={styles.moduleName}>{module.name}</h3>
										<ul className={styles.moduleList}>
											{module.list.length
												? module.list.map((list) => (
														<li key={list.id} className={styles.list}>
															<h4 className={styles.listTitle}>{list.title}</h4>
															<ul className={styles.listList}>
																{list.list.length
																	? list.list.map((lst) => (
																			<li
																				key={lst.id}
																				className={styles.listListText}>
																				{lst.text}
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
