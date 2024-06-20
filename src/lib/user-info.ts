interface TUserInfo {
	name: string;
	surname: string;
	email: string;
	image: string;
	id: number;
	courses: {
		active: number[];
		complited: number[];
	};
}

export const userInfo: TUserInfo = {
	name: 'Валерия',
	surname: 'Смиронова',
	email: 'valery9@mail.ru',
	image: 'valery.jpeg',
	id: 1,
	courses: {
		active: [0, 1, 2, 4],
		complited: [3, 5],
	},
};
