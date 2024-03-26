import { TCourse } from './definitions';

export const courses: Array<TCourse> = [
	{
		name: 'Жизнь и самореализация',
		suitable:
			'всем, кто хочет прокачать свою жизнь, стать успешнее и счастливее.',
		descriptions: [
			'Выявим куда стоит двигаться, где «подстелить соломки»;',
			'Экологично, деликатно и быстро помогу устранить все негативные состояния, мешающие достижению желаемого: страхи, панику, блоки, ограничения, внутреннее сопротивление, самосаботаж, выгорание, печаль, апатию, злость, отчаянье, обиду, усталость, негативные программы во всех их проявлениях;',
			'Разберу родовые блоки и программы;',
			'Проведу квантовые расстановки, ремнезию (безгипнотический регресс), память рода;',
			'Приведу в ресурсное состояние, настрою на результат и достижение цели.',
		],
		prices: [
			{
				pay: '17 000 ₽',
				descriptions: ['Разовая консультация', '(длительность 1 час)'],
			},
			{
				pay: '150 000 ₽',
				descriptions: [
					'Пакет 10 консультаций',
					'(можно использовать в течении года)',
				],
			},
			{
				pay: '325 000 ₽',
				descriptions: [
					'Пакет 25 консультаций',
					'(можно использовать в течении года)',
				],
			},
		],
		note: null,
	},
	{
		name: 'Бизнес',
		suitable:
			'Для руководителей, владельцев бизнеса, начинающих бизнесменов и тех, кто только хочет открыть бизнес.',
		descriptions: [
			'Выявим направление, нишу, цветовые решения в логотипе, целевую аудиторию, как в начале бизнеса, так при его развитии;',
			'Подберём идеальные даты в бизнесе: открытие бизнеса, сделки, встречи, заключение договоров. Чтобы всё получилось наилучшим образом;',
			'Расставим приоритеты, высвободим время на себя. «Я ничего не успеваю» уйдёт из твоего лексикона, потому, что будешь успевать в разы больше;',
			'Выстроим вместе пошаговый план успешного развития бизнеса. Поддержу в его реализации и доведу до результата.',
		],
		prices: [
			{
				pay: '17 000 ₽',
				descriptions: ['Разовая консультация', '(длительность 1 час)'],
			},
			{
				pay: '60 000 ₽',
				descriptions: ['Месячное сопровождение', '(4 консультации)'],
			},
			{
				pay: '150 000 ₽',
				descriptions: [
					'Пакет 10 консультаций',
					'(можно использовать в течении года)',
				],
			},
			{
				pay: '260 000 ₽',
				descriptions: ['Полугодовое сопровождение', '(24 консультации)'],
			},
			{
				pay: '500 000 ₽',
				descriptions: ['Годовое сопровождение', '(50 консультаций)'],
			},
		],
		note: null,
	},
	{
		name: 'Корпоративный коучинг',
		suitable:
			'Для владельцев бизнеса с численностью от 5 человек, нуждающихся в эффективности команд и масштабировании бизнеса.',
		descriptions: [
			'Настрою команду на эффективность: сплочённость, чёткое распределение обязанностей и технических задач, систематизацию времени и быструю реализацию планов, обозначу коллективную и частную мотивацию, чтобы команде было выгодно поддерживать друг друга;',
			'️При необходимости подберём кадры, сделаем перестановку на уровнях организационной иерархии.',
		],
		prices: null,
		note: 'Цена договорная (зависит от сложности, целей, количества человек в компании)',
	},
];