import React from 'react';

//import styles from './page.module.css';

import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

import Accordion from '@/components/accordion/accordion';
import AccordionContent from '@/components/accordion/accordion-content';
import AccordionWrapper from '@/components/accordion/accordion-wrapper';

import { courses } from '@/lib/courses-data';
import { TCourse } from '@/lib/definitions';

import { Button } from '@/components/ui'


export default function Home() {
	return (
		<>
			<Header />
				<div style={{maxWidth: '1110px', margin: '0 auto', padding: '5px', display: 'grid', gridTemplateColumns: 'auto auto', gap: '5px'}}>
					<Button type={'button_1'} size={'desctop'}>
						Все курсы
					</Button>
					<Button type={'button_1'} size={'desctop'} disabled={true}>
						Все курсы
					</Button>
					<Button type={'button_1_plus'} size={'desctop'}>
						Все курсы
					</Button>
					<Button type={'button_1_plus'} size={'desctop'} disabled={true}>
						Все курсы
					</Button>
					<Button type={'button_2'} size={'desctop'}>
						Оставить заявку
					</Button>
					<Button type={'button_2'} size={'desctop'} disabled={true}>
						Оставить заявку
					</Button>
					<Button type={'button_3'} size={'desctop'}>
						Оставить заявку
					</Button>
					<Button type={'button_3'} size={'desctop'} disabled={true}>
						Оставить заявку
					</Button>
					<Button type={'button_4'} size={'desctop'}>
						Предыдущий урок
					</Button>
					<Button type={'button_4'} size={'desctop'} disabled={true}>
						Предыдущий урок
					</Button>
					<Button type={'button_5'} size={'desctop'}>
						Следующий урок
					</Button>
					<Button type={'button_5'} size={'desctop'} disabled={true}>
						Следующий урок
					</Button>
					<Button type={'button_6'} size={'desctop'}>
						Редактировать профиль
					</Button>
					<Button type={'button_6'} size={'desctop'} disabled={true}>
						Редактировать профиль
					</Button>
				</div>



			<AccordionWrapper>
				{
					courses?.map((course: TCourse)=> 
						<Accordion course={course} key={course.id} />
					)
				}
			</AccordionWrapper>
			<Footer />
		</>
	);
}
