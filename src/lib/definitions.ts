export type TProperty ={
	id: number,
	text: string
};
export type TPriceOfServices = {
	id: number,
	price: string,
	properties: Array<TProperty>,
};

export type TCourse = {
	id: number,
	title: string,
	subtitle: string,
	properties: Array<TProperty>,
	services?: Array<TPriceOfServices> | null,
	note: string | null,
};

//export type TCourses = Array<TCourse>;
