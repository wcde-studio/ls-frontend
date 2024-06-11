'use client';

import styles from './contact-card.module.scss';

//import Image from 'next/image';
import Link from 'next/link';

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
		<li className={styles.card}>
			<section className={styles.title}>
				<h2 className={styles.name}>{name}</h2>
				<p className={styles.status}>{status}</p>
			</section>
			<ul className={styles.contacts}>
				{chats?.map((chat)=>(
					<li className={styles.contact} key={chat.id}>
						<h2 className={styles.chatTitle}>{chat.title}</h2>
						<Link href={`https://t.me/${chat.link}`} className={styles.chatLink}>{chat.link}</Link>
					</li>
				))}
				<li className={styles.tel}>{tel}</li>
			</ul>
		</li>
	);
};

export default UserInfoPersonalArea;


