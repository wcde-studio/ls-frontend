export type TPrice = {
	pay: string,
	descriptions: Array<string>,
};

export type TCourse = {
	name: string,
	suitable: string,
	descriptions: Array<string>,
	prices?: Array<TPrice> | null,
	note: string | null,
};

//export type TCourses = Array<TCourse>;
