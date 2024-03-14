import React from "react";

import styles from './page.module.css';
import Accordion from '@/components/accordion/accordion';

export default function Home() {
  return (
    <main>
      <div className={styles['page-wrapper']}>
        <div className={styles['accordion-container']}>
          <Accordion title={'Бизнес'}>
            <div>БизнесБизнесБизнес</div>
          </Accordion>
          <Accordion title={'Корпоративный коучинг'}>
            <div>Корпоративный коучингКорпоративный коучинг</div>
          </Accordion>
          <Accordion title={'Жизнь и самореализация'}>
            <div>Жизнь и самореализацияЖизнь и самореализация</div>
          </Accordion>
        </div>
      </div>
    </main>
  );
}
