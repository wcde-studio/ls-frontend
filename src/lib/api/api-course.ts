import qs from 'qs';

type TgetCourses = {
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
		modules: {
			id: number;
			name: string;
			program: {
				id: number;
				title: string;
				text: string;
			}[];
		}[];
		reviews: {
			id: number;
			name: string;
			text: string;
		}[];
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

const getCourse = async (
	baseUrl: string,
	path: string,
	id: number
): Promise<TgetCourses | undefined> => {
	const url = new URL(path, baseUrl);

	url.search = qs.stringify({
		filters: {
			id: id,
		},
		populate: {
			image: {
				fields: ['url'],
			},
			modules: {
				populate: {
					fields: ['name'],
					program: {
						populate: true,
					},
				},
			},
			reviews: {
				populate: true,
			},
		},
	});

	try {
		const res = await fetch(url);
		if (!res.ok) throw new Error('Failed to fetch courses');
		const data = await res.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

export default getCourse;
