import styles from './page.module.scss';

import { contacts } from '@/lib/contacts-data';
import ContactCard from '@/components/contact-card/contact-card';

import { getApiServerURL, getContacts } from '@/lib/api/api-utils';

type TContactType = {
	id: number;
	name: string;
	specialization: string;
	tel: string;
	chats: {
		id: number;
		title: string;
		link: string;
	}[];
};

export default async function Contacts() {
	const contacts = await getContacts();
	return (
		<>
			<section className={styles.section}>
				<h1 className={styles.title}>Контакты</h1>
				<ul className={styles.contactsList}>
					{contacts?.data.map((contact: TContactType) => (
						<ContactCard contactInfo={contact} key={contact.id} />
					))}
				</ul>
			</section>
		</>
	);
}
