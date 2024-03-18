import React from 'react';

import styles from './accordion-content.module.css';

import Link from 'next/link';

const AccordionContent = () => {
	return (
		<div className={styles.contentWrapper}>
			<div className={styles.suitableWraper}>
				<p className={styles.suitableTitle}>Кому подходит</p>
				<span className={styles.suitableText}></span>
			</div>
			<div className={styles.descriptionWrapper}>
				<ul className={styles.descriptionList}>
					<li className={styles.descriptionItem}>
						<div className={styles.descriptionItem_dot}></div>
						<span className={styles.descriptionItem_text}></span>
					</li>
				</ul>
			</div>
			<div className={styles.priceWrapper}>
				<div className={styles.paiceCotainer}>
					<p className={styles.payValue}></p>
					<div className={styles.descriptionContainer}>
						<span className={styles.descriptionText}></span>
					</div>
				</div>
			</div>
			<div className={styles.note}></div>
			<div className={styles.applicationLink}>
				<Link href={'/'}>Оставить заявку</Link>
			</div>
		</div>
	);
};

export default AccordionContent;
