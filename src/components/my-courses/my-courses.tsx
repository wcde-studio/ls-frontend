'use client';

import React, { useState, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';

import styles from './my-courses.module.scss';

import { courses } from '@/lib/courses-data';
import { PersonalAreaCourseCard, MainCourseCard } from '@/components/course-card';

import { Button } from '@/components/ui';
import { ButtonSize, ButtonType } from '@/components/ui/button/types';

type Props = {
 userCourses: {
		active: number[];
		complited:number [];
	}
}

const MyCourses = (props: Props) => {

	const { userCourses } = props;
	const [link, setLink] = useState<'active' | 'complited'>('active');

	const isActive = (name: 'active' | 'complited') =>  name === link;
	const handler = (name: 'active' | 'complited') => () => setLink(name);

	const coursesList = useMemo(() => {
		const currentCourses: number[] = userCourses[link];
		const list = courses.filter((course) => {
			for(const id of currentCourses) {
				if (course.id === id) {
					return course;
				}
			}
	});
		return list;
	}, [link, userCourses]);

	return (
		<>
			<nav className={styles.nav}>
				<ul>
					<li className={clsx(styles.link, isActive('active') && styles.active)}>
						<button onClick={handler('active')}>Активные</button>
					</li>
					<li className={clsx(styles.link, isActive('complited') && styles.active)}>
						<button onClick={handler('complited')}>Заверщенные</button>
					</li>
				</ul>
			</nav>
			{
				coursesList.length ? (
					<ul className={styles.coursesList}>
						{
							coursesList?.map((course) => (<PersonalAreaCourseCard course={course} key={course.id} />))
						}
					</ul>
				) : (
					<section className={styles.message}>
						{
							link === 'active' ? (
								<h2 className={styles.messageTitle}>{'У вас нет активных курсов'}</h2>
							) : (
								<h2 className={styles.messageTitle}>{'У вас нет завершённых курсов'}</h2>
							)
						}
						<Link href={'/'} >
							<Button
								type={ButtonType.Violet}
								size={ButtonSize.Desctop}
								title={'Выбрать курс'}
							/>
						</Link>
					</section>
					)
				}
		</>
	);
};

export default MyCourses;
