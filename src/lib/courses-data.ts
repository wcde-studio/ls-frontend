interface TCourse {
	id: number;
	name: string;
	image: string;
	date: string;
	city: string;
	end: string;
	duration: string;
	target: string;

	/*
	description: string;
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
}

export const courses: TCourse[] = [
	{
		id: 0,
		name: 'Магия женской силы',
		image: 'women.png',
		date: '05 Mar 2024 00:00:00 PDT',
		city: 'Нижний новгород',
		end: '05 Apr 2024 00:00:00 PDT',
		duration: '16 уроков (32 часа)',
		target: 'Стать настоящей Вестой, женщиной-мечтой для своего супруга.',
	},
	{
		id: 1,
		name: 'Руны',
		image: 'runes.png',
		date: '28 Apr 2024 00:00:00 PDT',
		city: 'Санкт-Питербург',
		end: '05 Apr 2024 00:00:00 PDT',
		duration: '16 уроков (32 часа)',
		target: 'Стать настоящей Вестой, женщиной-мечтой для своего супруга.',
	},
	{
		id: 2,
		name: 'Память Рода',
		image: 'moon.png',
		date: '09 May 2024 00:00:00 PDT',
		city: 'Онлайн',
		end: '05 Apr 2024 00:00:00 PDT',
		duration: '16 уроков (32 часа)',
		target: 'Стать настоящей Вестой, женщиной-мечтой для своего супруга.',
	},
	{
		id: 3,
		name: 'Методика изменения реальности (МИР)',
		image: 'pendulum.png',
		date: '10 Dec 2024 00:00:00 PDT',
		city: 'Нижний новгород',
		end: '05 Apr 2024 00:00:00 PDT',
		duration: '16 уроков (32 часа)',
		target: 'Стать настоящей Вестой, женщиной-мечтой для своего супруга.',
	},
	{
		id: 4,
		name: 'Магия привлечения денег',
		image: 'money.png',
		date: '07 Jun 2024 00:00:00 PDT',
		city: 'Нижний новгород',
		end: '05 Apr 2024 00:00:00 PDT',
		duration: '16 уроков (32 часа)',
		target: 'Стать настоящей Вестой, женщиной-мечтой для своего супруга.',
	},
	{
		id: 5,
		name: 'Родолад',
		image: 'taro.png',
		date: '15 Mar 2024 00:00:00 PDT',
		city: 'Нижний новгород',
		end: '05 Apr 2024 00:00:00 PDT',
		duration: '16 уроков (32 часа)',
		target: 'Стать настоящей Вестой, женщиной-мечтой для своего супруга.',
	},
];
