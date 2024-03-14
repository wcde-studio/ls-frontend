import React, { FC, ReactNode } from 'react';
//import Link from 'next/link';
import styles from './accordion.module.css';
import DownChevronIcon from '@/ui/icons/down-chevron-icon';

interface IAccordionFormProps {
  title: string;
  children: ReactNode;
}

const Accordion: FC<IAccordionFormProps> = ({title, children}) => {
  return (
    <div className={styles['accordion']}>
      <details className={styles['accordion-details']}>
      <summary className={styles['accordion-summary']}>
        <p className={styles['accordion-summary-title']}>
          {title}
        </p>
        <div className={styles['accordion-summary-chevron']}>
          <DownChevronIcon />
        </div>
      </summary>
      <div className={styles['accordion-details-content']}>
        {children}
      </div>
      </details>
    </div>
  );
};

export default Accordion;
