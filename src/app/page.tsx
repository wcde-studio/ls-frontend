import React from "react";

import styles from './page.module.css';

import { courses } from '@/lib/courses-data';
import { TCourse } from '@/lib/definitions';

import Accordion from '@/components/accordion/accordion';
import AccordionContent from '@/components/accordion/accordion-content';
export default function Home() {
  return (
    <main>
      <div className={styles['page-wrapper']}>
        <div className={styles['accordion-container']}>
        {
          courses?.map((course: TCourse, index) => {
            return (
              <Accordion title={course.name} key={index}>
                <AccordionContent/>
              </Accordion>
            )
          })
        }
        </div>
      </div>
    </main>
  );
}
