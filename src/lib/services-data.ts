//import { TCourse } from './definitions';

interface TProperties {
	id: number;
	price: number;
	currency: string;
	properties?: {
		id: number;
		text: string;
	}[] | null;
};

interface TService extends Pick<TProperties, 'id' | 'properties'> {
	title: string;
	subtitle: string;
	services?:  TProperties[] | null;
	note: string | null;
};

export const services: Array<TService> = [
	{
		id: 1,
		title: 'Жизнь и самореализация',
		subtitle:
			'всем, кто хочет прокачать свою жизнь, стать успешнее и счастливее.',
		properties: [
			{
				id: 1,
				text: 'Выявим куда стоит двигаться, где «подстелить соломки»;',
			},
			{
				id: 2,
				text: 'Экологично, деликатно и быстро помогу устранить все негативные состояния, мешающие достижению желаемого: страхи, панику, блоки, ограничения, внутреннее сопротивление, самосаботаж, выгорание, печаль, апатию, злость, отчаянье, обиду, усталость, негативные программы во всех их проявлениях;',
			},
			{
				id: 3,
				text: 'Разберу родовые блоки и программы;',
			},
			{
				id: 4,
				text: 'Проведу квантовые расстановки, ремнезию (безгипнотический регресс), память рода;',
			},
			{
				id: 5,
				text: 'Приведу в ресурсное состояние, настрою на результат и достижение цели.',
			},
		],
		services: [
			{
				id: 1,
				price: 17000,
				currency: 'RUB',
				properties: [
					{
						id: 1,
						text: 'Разовая консультация',
					},
					{
						id: 2,
						text: '(длительность 1 час)',
					},
				],
			},
			{
				id: 2,
				price: 150000,
				currency: 'RUB',
				properties: [
					{
						id: 1,
						text: 'Пакет 10 консультаций',
					},
					{
						id: 2,
						text: '(можно использовать в течении года)',
					},
				],
			},
			{
				id: 3,
				price: 325000,
				currency: 'RUB',
				properties: [
					{
						id: 1,
						text: 'Пакет 25 консультаций',
					},
					{
						id: 2,
						text: '(можно использовать в течении года)',
					},
				],
			},
		],
		note: null,
	},
	{
		id: 2,
		title: 'Бизнес',
		subtitle:
			'Для руководителей, владельцев бизнеса, начинающих бизнесменов и тех, кто только хочет открыть бизнес.',
		properties: [
			{
				id: 1,
				text: 'Выявим направление, нишу, цветовые решения в логотипе, целевую аудиторию, как в начале бизнеса, так при его развитии;',
			},
			{
				id: 2,
				text: 'Подберём идеальные даты в бизнесе: открытие бизнеса, сделки, встречи, заключение договоров. Чтобы всё получилось наилучшим образом;',
			},
			{
				id: 3,
				text: 'Расставим приоритеты, высвободим время на себя. «Я ничего не успеваю» уйдёт из твоего лексикона, потому, что будешь успевать в разы больше;',
			},
			{
				id: 4,
				text: 'Выстроим вместе пошаговый план успешного развития бизнеса. Поддержу в его реализации и доведу до результата.',
			},
		],
		services: [
			{
				id: 1,
				price: 17000,
				currency: 'RUB',
				properties: [
					{
						id: 1,
						text: 'Разовая консультация',
					},
					{
						id: 2,
						text: '(длительность 1 час)',
					},
				],
			},
			{
				id: 2,
				price: 60000,
				currency: 'RUB',
				properties: [
					{
						id: 1,
						text: 'Месячное сопровождение',
					},
					{
						id: 2,
						text: '(4 консультации)',
					},
				],
			},
			{
				id: 3,
				price: 150000,
				currency: 'RUB',
				properties: [
					{
						id: 1,
						text: 'Пакет 10 консультаций',
					},
					{
						id: 2,
						text: '(можно использовать в течении года)',
					},
				],
			},
			{
				id: 4,
				price: 260000,
				currency: 'RUB',
				properties: [
					{
						id: 1,
						text: 'Полугодовое сопровождение',
					},
					{
						id: 2,
						text: '(24 консультации)',
					},
				],
			},
			{
				id: 5,
				price: 500000,
				currency: 'RUB',
				properties: [
					{
						id: 1,
						text: 'Годовое сопровождение',
					},
					{
						id: 2,
						text: '(50 консультаций)',
					},
				],
			},
		],
		note: null,
	},
	{
		id: 3,
		title: 'Корпоративный коучинг',
		subtitle:
			'Для владельцев бизнеса с численностью от 5 человек, нуждающихся в эффективности команд и масштабировании бизнеса.',
		properties: [
			{
				id: 1,
				text: 'Настрою команду на эффективность: сплочённость, чёткое распределение обязанностей и технических задач, систематизацию времени и быструю реализацию планов, обозначу коллективную и частную мотивацию, чтобы команде было выгодно поддерживать друг друга;',
			},
			{
				id: 2,
				text: 'При необходимости подберём кадры, сделаем перестановку на уровнях организационной иерархии.',
			},
		],
		services: null,
		note: 'Цена договорная (зависит от сложности, целей, количества человек в компании)',
	},
];