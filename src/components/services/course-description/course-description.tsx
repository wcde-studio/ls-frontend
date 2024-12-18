'use client';

import styles from './course-description.module.scss';

import Link from 'next/link';

import { Button } from '@/components/ui';
import { ButtonSize, ButtonType } from '@/components/ui/button/types';

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
};

const CourseDescription = (props: TCourseDescriptionProps) => {
	const { target, goals, description, title, modules } = props;

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
					{description.split(/\r?\n/).length
						? description
								.split(/\r?\n/)
								.map((descr, id) => <p key={id}>{descr}</p>)
						: null}
				</section>
				<section className={styles.details}>
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
