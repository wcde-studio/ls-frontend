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

const getCourses = async (
	baseUrl: string,
	path: string,
	currentPage: number,
	pageSize: number,
	topic: string,
	allCourses: string
): Promise<TgetCourses | undefined> => {
	const url = new URL(path, baseUrl);

	url.search = qs.stringify({
		sort: ['date:asc'],
		pagination: {
			page: currentPage,
			pageSize: pageSize,
		},
		filters: {
			topic:
				topic === allCourses
					? {
							$ne: topic,
						}
					: {
							$eq: topic,
						},
		},
		populate: {
			image: {
				fields: ['url'],
			},
		},
	});

	try {
		console.log({ url });
		const res = await fetch(url);
		if (!res.ok) throw new Error('Failed to fetch courses');
		const data = await res.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

export default getCourses;
