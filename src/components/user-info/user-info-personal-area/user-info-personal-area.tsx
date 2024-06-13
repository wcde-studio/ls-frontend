'use client';

import styles from './user-info-personal-area.module.scss';

//import Image from 'next/image';
import Link from 'next/link';
import Image from 'next/image';

//import { LadaVedIcon, LadaVedIconSvg } from '@/components/ui';

type Props = {
	name: string;
	surname: string
	email: string;
	image: string;
};

const UserInfoPersonalArea = (props: Props) => {

	const {
		name,
		surname,
		email,
		image,
	} = props;

	return (
		<section className={styles.wrapper}>
			<Image 
				src={`/users/${image}`}
				width={169}
				height={169}
				alt={'user foto'}
				quality={100}
				className={styles.image} 
			/>
			<article  className={styles.userInfo}>
				<article className={styles.name}>
					<h2>{name}</h2>
					<h2>{surname}</h2>
				</article>
				<h2  className={styles.email}>{email}</h2>
				<Link href={'/'}>edit profile</Link>
				<Link href={'/'}>exit profile</Link>
			</article>
		</section>
	);
};

export default UserInfoPersonalArea;


