import React from 'react';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

import Accordion from '@/components/accordion/accordion';
import AccordionContent from '@/components/accordion/accordion-content';
import AccordionWrapper from '@/components/accordion/accordion-wrapper';

import { courses } from '@/lib/courses-data';
import { TCourse } from '@/lib/definitions';

export default function Home() {
	return (
		<>
			<Header />
			<AccordionWrapper>
				{courses?.map((course: TCourse, index: number) => {
					return (
						<Accordion title={course.name} key={index}>
							<AccordionContent course={course}/>
						</Accordion>
					);
				})}
			</AccordionWrapper>
			<Footer />
		</>
	);
}
