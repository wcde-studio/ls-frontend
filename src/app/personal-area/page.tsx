import styles from './page.module.scss';

import { userInfo } from '@/lib/user-info';
import MyCourses from '@/components/my-courses/my-courses';

import { PersonalAreaUserInfo } from '@/components/user-info';

export default function PersonalArea() {
	return (
		<>
			<section className={styles.section}>
				<h1 className={styles.title}>Личный кабинет</h1>
				<PersonalAreaUserInfo
					name={userInfo.name}
					surname={userInfo.surname}
					email={userInfo.email}
					image={userInfo.image}
				/>
			</section>
			<section className={styles.section}>
				<h1 className={styles.title}>Мои курсы</h1>
				<div className={styles.myCourses}>
					<MyCourses userCourses={userInfo.courses} />
				</div>
			</section>
		</>
	);
}
