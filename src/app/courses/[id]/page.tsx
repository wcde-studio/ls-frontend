import styles from './page.module.scss';

import CourseIntro from '@/components/services/course-intro/course-intro';
import CourseDescription from '@/components/services/course-description/course-description';

import Slider from '@/components/slider/slider';
import { getApiServerURL, getCourse, getLinks } from '@/lib/api/api-utils';
import clsx from 'clsx';

type TCoursePageProps = {
	params: {
		id: string;
	};
};
export default async function CoursePage(props: TCoursePageProps) {
	const { id } = props.params;
	const url = getApiServerURL();
	const courseData = await getCourse(id);
	const linksData = await getLinks();
	const course = courseData?.data[0];
	const participateLink = linksData?.data.filter((link:any) => link.title === 'participate')[0];
	const reviewsLink = linksData?.data.filter((link:any) => link.title === 'reviews')[0];
	return course ? (
		<>
			<section className={styles.section}>
				<h1 className={clsx(styles.title, styles.desktop)}>{course.name}</h1>
				<CourseIntro
					imageUrl={url + course?.image.url}
					date={course.date}
					end={course.end}
					duration={course.duration}
					city={course.city}
					link={participateLink?.link}
				/>
				<h1 className={clsx(styles.title, styles.mobile)}>{course.name}</h1>
			</section>
			<section className={styles.description}>
				<CourseDescription
					target={course.target}
					goals={course.goals}
					description={course.description}
					title={course.title}
					modules={course.modules}
					link={participateLink?.link}
				/>
			</section>
			<section className={styles.section}>
				<h1 className={styles.title}>{'Отзывы'}</h1>
				<div>
					<Slider reviews={course.reviews} link={reviewsLink?.link}/>
				</div>
			</section>
		</>
	) : null;
}
