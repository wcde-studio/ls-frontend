import React, { ReactNode, FC } from 'react';
import styles from './accordion-wrapper.module.css';

interface IAccordionWrapperProps {
	children: ReactNode;
}

const AccordionWrapper: FC<IAccordionWrapperProps> = ({ children }) => {
	return (
		<div className={styles.accordionWrapper}>
			<div className={styles.accordionContainer}>
				{children}
			</div>
		</div>
	);
};

export default AccordionWrapper;
