import styles from './page.module.scss';

import { services } from '@/lib/services-data';
import { pageData } from '@/lib/page-data';

import { contacts } from '@/lib/contacts-data';
import ContactCard from '@/components/contact-card/contact-card';

export default function Contacts() {
	return (
		<>
			<section className={styles.section}>
				<h1 className={styles.title}>Контакты</h1>
				<ul className={styles.contactsList}>
					{contacts?.map((contact)=>(
						<ContactCard
							contactInfo={contact}
							key={contact.id}
						/>
					))}
				</ul>
			</section>
		</>
	);
}
