import qs from 'qs';

type TgetCoursesHome = {
	data: {
		id: number;
		documentId: string;
		name: string;
		date: string;
		city: string;
		end: string;
		duration: string;
		target: string;
		goals: string;
		description: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		title: string;
		topic: string;
		image: {
			id: number;
			documentId: string;
			alternativeText: null | string;
			name: string;
			url: string;
		};
	}[];
	meta: {
		pagination: {
			page: number;
			pageSize: number;
			pageCount: number;
			total: number;
		};
	};
};

const getCoursesHome = async (
	baseUrl: string,
	path: string
): Promise<TgetCoursesHome> => {
	const url = new URL(path, baseUrl);

	url.search = qs.stringify({
		sort: ['date:asc'],
		pagination: {
			page: 1,
			pageSize: 6,
		},
		populate: {
			image: {
				fields: ['url'],
			},
		},
	});

	//try {
	const res = await fetch(url);
	//if(!res.ok) throw new Error('Failed to fetch courses');
	const data = await res.json();
	//console.log(data);
	return data;
	//} catch (error) {
	//	throw error;
	//}
};

export default getCoursesHome;
