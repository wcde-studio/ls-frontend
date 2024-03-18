import React, { FC, ReactNode } from 'react';
//import Link from 'next/link';
import styles from './accordion.module.css';
import DownChevronIcon from '@/ui/icons/down-chevron-icon';

interface IAccordionFormProps {
	title: string;
	children: ReactNode;
}

const Accordion: FC<IAccordionFormProps> = ({ title, children }) => {
	return (
		<div className={styles.accordion}>
			<details className={styles.accordionDetails}>
				<summary className={styles.accordionSummary}>
					<p className={styles.accordionSummaryTitle}>{title}</p>
					<div className={styles.accordionSummaryChevron}>
						<DownChevronIcon />
					</div>
				</summary>
				<div className={styles.accordionDetailsContent}>{children}</div>
			</details>
		</div>
	);
};

export default Accordion;
