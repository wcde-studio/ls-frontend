interface TCourse {
	id: number;
	name: string;
	image: string;
	date: string;
	sity: string;
/*
	duration: string;
	description: string;
	target: string;
	objective: 
		{
			id: number;
			text: string;
		}[];
	consists: {
		title: string;
		descriptions: {
			id: number;
			title: string;
			description: {
				id: number;
				text: string;
			}[];
		}[];
	}
*/
};

export const courses = [
	{
		id: 0,
		name: 'Магия женской силы',
		image: 'women.png',
		date: '05 Mar 2024 00:00:00 PDT',
		sity: 'Нижний новгород'
	},
	{
		id: 1,
		name: 'Руны',
		image: 'runes.png',
		date: '28 Apr 2024 00:00:00 PDT',
		sity: 'Санкт-Питербург'
	},
	{
		id: 2,
		name: 'Память Рода',
		image: 'moon.png',
		date: '09 May 2024 00:00:00 PDT',
		sity: 'Онлайн'
	},
	{
		id: 3,
		name: 'Методика изменения реальности (МИР)',
		image: 'pendulum.png',
		date: '10 Dec 2024 00:00:00 PDT',
		sity: 'Нижний новгород'
	},
	{
		id: 4,
		name: 'Магия привлечения денег',
		image: 'money.png',
		date: '07 Jun 2024 00:00:00 PDT',
		sity: 'Нижний новгород'
	},
	{
		id: 5,
		name: 'Родолад',
		image: 'taro.png',
		date: '15 Mar 2024 00:00:00 PDT',
		sity: 'Нижний новгород'
	}
];

