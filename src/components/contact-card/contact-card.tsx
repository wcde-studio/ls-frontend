'use client';

import styles from './contact-card.module.scss';

import Link from 'next/link';

type TContactCardProps = {
	contactInfo: {
		name: string;
		specialization: string;
		chats: {
			title: string;
			link: string;
			id: number;
		}[];
		tel?: string;
		id: number;
	};
	key: number;
};

const ContactCard = (props: TContactCardProps) => {
	const { contactInfo } = props;

	const { name, specialization, chats, tel } = contactInfo;

	return (
		<li className={styles.card}>
			<section className={styles.title}>
				<h2 className={styles.name}>{name}</h2>
				<p className={styles.specialization}>{specialization}</p>
			</section>
			<ul className={styles.contacts}>
				{chats?.map((chat) => (
					<li className={styles.contact} key={chat.id}>
						<h2 className={styles.chatTitle}>{chat.title}</h2>
						<Link href={chat.link} className={styles.chatLink}>
							{chat.link}
						</Link>
					</li>
				))}
				<li className={styles.tel}>{tel}</li>
			</ul>
		</li>
	);
};

export default ContactCard;

/*




*/
