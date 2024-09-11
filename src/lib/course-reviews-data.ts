type TReview = {
	id: number;
	name: string;
	sentences: {
		id: number;
		text: string;
	}[];
};

const review: TReview = {
	id: 0,
	name: 'Inna',
	sentences: [
		{
			id: 1,
			text: 'Здравия всем.',
		},
		{
			id: 2,
			text: 'Лада в Перми. Друзья, просто находться с Ладой радом, быть в ее поле, уже счастье. Было столько тревог, сомнений, беспокойства. Лада в Перми. Друзья, просто находться с Ладой радом, быть в ее поле, уже счастье.',
		},
	],
};

const createArray = (count: number, object: TReview) => {
	const arr = [];
	for (let i = 0; i < count; i++) {
		arr.push({ ...object, id: i });
	}
	return arr;
};

export const reviews: TReview[] = createArray(10, review);
