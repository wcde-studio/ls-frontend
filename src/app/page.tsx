import React from "react";

import styles from './page.module.css';
import Accordion from '@/components/accordion/accordion';
import { courses } from '@/lib/courses-data';
import { TCourse } from '@/lib/definitions';


export default function Home() {
  return (
    <main>
      <div className={styles['page-wrapper']}>
        <div className={styles['accordion-container']}>
        {
          courses?.map((course: TCourse, index) => {
            return (
              <Accordion title={course.name} key={index}>
                <div>{course.suitable}</div>
              </Accordion>
            )
          })
        }
        </div>
      </div>
    </main>
  );
}
