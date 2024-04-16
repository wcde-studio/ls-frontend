export type TProperty = {
	id: number;
	text: string;
};

export type TContent = {
	id: number;
	title:1 string;
	content: TProperty[];
};

export type TModule = {
	id: number;
	title: string;
	items: TContent[]
};

export type TCourse = {
	id: number;
	title: string;
	image: string;
	date: string;
	sity: string;
	duration: number;
	goal: string;
	objective: string;
	description: {
		title: TProperty[];
		consists: {
			title: string;
			modules: TModule[];
		};
	};
};

export const courses: Array<TCourse> = [
	{
		id: 1,
		title: '',
		image: '',
		date: '',
		sity: '',
		duration: '',
		goal: '',
		objective: '',
		description: {
			title: [
				{
					id: 1,
					text: '',
				},
				{
					id: 1,
					text: '',
				},
			],
			consists: {
				title: '',
				modules: [
					{
						id: 1,
						title: '',
						items: [
							{
								id: 1,
								title: '',
								content: [
									{
										id: 1,
										text: '',
									},
									{
										id: 1,
										text: '',
									},

 								],
							},

						],
					},

				],
			},
		},
	},

];
