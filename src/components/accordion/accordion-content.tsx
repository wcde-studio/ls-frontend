import React, { FC } from 'react';

import styles from './accordion-content.module.css';

import Link from 'next/link';

//import { courses } from '@/lib/courses-data';
import { TCourse } from '@/lib/definitions';

interface IAccordionContent {
	course: TCourse
}

const AccordionContent: FC<IAccordionContent> = ({course}) => {
	return (
		<div className={styles.contentWrapper}>
			<div className={styles.suitableWraper}>
				<p className={styles.suitableTitle}>{`Кому подходит: ${course.suitable}`}</p>
			</div>

			<div className={styles.descriptionWrapper}>
				{
					course.descriptions?.map((description, index: number) => {
						return (
							<ul className={styles.descriptionList} key={index}>
								<li className={styles.descriptionItem}>
									<p className={styles.descriptionItem_text}>{description}</p>
								</li>
							</ul>
						)
					})
				}
			</div>
			<div className={styles.priceWrapper}>
				{
					course.prices?.map((price, index: number) => {
						return (
							<div className={styles.priceCotainer} key={index}>
								<p className={styles.payValue}>{price.pay}</p>
								<div className={styles.descriptionContainer}>
								{
									price.descriptions.map((description, index: number) => 
										<p className={styles.descriptionText} key={index}>{description}</p>
									)
								}
								</div>
							</div>
						)
					})
				}
			</div>
			{
				course.note ? 
					<div className={styles.note}>{course.note}</div>
				 : null
			}
			<div className={styles.applicationLinkWrapper}>
				<Link href={'/'}>
					<div className={styles.applicationLink}>
						Оставить заявку
					</div>
				</Link>
			</div>
		</div>
	);
};

export default AccordionContent;
