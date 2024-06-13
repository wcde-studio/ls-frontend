interface TContact {
	name: string;
	status: string;
	chats: {
		title: string;
		link: string;
		id: number;
	}[];
	tel?: string;
	id: number;
}

export const contacts: TContact[] = [
	{
		name: 'Лада',
		status: 'Ведунья',
		chats: [
			{
				title: 'Личный Телеграм:',
				link: 't.me/lada_vedunia',
				id: 1,
			},
			{
				title: 'Чат:',
				link: '@lada_vedunia',
				id: 2,
			},
			{
				title: 'Отзывы:',
				link: '@lada_vedunia',
				id: 3,
			},
		],
		tel: '',
		id: 1,
	},
	{
		name: 'Ильвир',
		status: 'Администратор',
		chats: [
			{
				title: 'Личный Телеграм:',
				link: 't.me/Ilvirhan',
				id: 1,
			},
		],
		tel: '+7 977 260-49-19',
		id: 2,
	},
];
