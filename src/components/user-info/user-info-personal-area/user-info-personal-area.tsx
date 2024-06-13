'use client';

import styles from './user-info-personal-area.module.scss';

//import Image from 'next/image';
import Link from 'next/link';
import Image from 'next/image';

import { ButtonSize, ContentPosition } from '@/components/ui/button/types';
import { IconButton, EditIcon, ExitIcon } from '@/components/ui';

type Props = {
	name: string;
	surname: string;
	email: string;
	image: string;
};

const UserInfoPersonalArea = (props: Props) => {
	const { name, surname, email, image } = props;

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
			<article className={styles.userInfo}>
				<article className={styles.name}>
					<h2>{name}</h2>
					<h2>{surname}</h2>
				</article>
				<h2 className={styles.email}>{email}</h2>
				<Link href={'/'}>
					<IconButton
						contentPosition={ContentPosition.Left}
						size={ButtonSize.Desctop}
						title={'Редактировать профиль'}>
						<EditIcon />
					</IconButton>
				</Link>
				<Link href={'/'}>
					<IconButton
						contentPosition={ContentPosition.Left}
						size={ButtonSize.Desctop}
						title={'Выйти из профиля'}>
						<ExitIcon />
					</IconButton>
				</Link>
			</article>
		</section>
	);
};

export default UserInfoPersonalArea;
