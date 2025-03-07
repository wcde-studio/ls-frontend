import qs from 'qs';

export function getApiServerURL() {
	return process.env.NEXT_PUBLIC_API_SERVER_HOST ?? 'http://127.0.0.1:1337';
}

export async function getServerData(
	path: string,
	searchParams: Record<string, any>
) {
	const baseUrl = getApiServerURL();
	const url = new URL(path, baseUrl);

	url.search = qs.stringify(searchParams);

	try {
		const res = await fetch(url, { cache: 'no-store' });
		const data = await res.json();
		return data;
	} catch (error) {
		console.log(`error fetching data to ${path}: `, error);
		throw error;
	}
}

export async function getContacts() {
	const path = '/api/contacts';
	const searchParams = {
		populate: {
			chats: {
				populate: true,
			},
		},
	};
	return await getServerData(path, searchParams);
}

export async function getSocials() {
	const path = '/api/socials';
	const searchParams = {
		populate: true,
	};
	return await getServerData(path, searchParams);
}

export async function getAwards() {
	const path = '/api/awards';
	const searchParams = {
		populate: true,
	};
	return await getServerData(path, searchParams);
}

export async function getDiplomas() {
	const path = '/api/diplomas';
	const searchParams = {
		populate: {
			src: {
				fields: ['url'],
			},
		},
	};
	return await getServerData(path, searchParams);
}

export async function getServices() {
	const path = '/api/services';
	const searchParams = {
		populate: {
			services: {
				populate: '*',
			},
			properties: {
				populate: '*',
			},
		},
	};
	return await getServerData(path, searchParams);
}

export async function getCoursesHome() {
	const path = '/api/courses';
	const searchParams = {
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
	};
	return await getServerData(path, searchParams);
}

export async function getIntro() {
	const path = '/api/intro';
	const searchParams = {
		populate: {
			image: {
				fields: ['url'],
			},
			title: {
				populate: '*',
			},
		},
	};
	return await getServerData(path, searchParams);
}

export async function getCourse(id: string) {
	const path = '/api/courses';
	const searchParams = {
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
	};
	return await getServerData(path, searchParams);
}

export async function getServerDataFromClient(
	path: string,
	searchParams: Record<string, any>
) {
	const baseUrl = getApiServerURL();
	const url = new URL(path, baseUrl);

	url.search = qs.stringify(searchParams);

	try {
		const res = await fetch(url, { cache: 'no-store' });
		const data = await res.json();
		return data;
	} catch (error) {
		console.log(`error fetching data to ${path}: `, error);
		throw error;
	}
}

export async function getCourses(
	currentPage: number,
	pageSize: number,
	topic: string,
	allCourses: string
) {
	const path = '/api/courses';
	const searchParams = {
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
	};

	return await getServerDataFromClient(path, searchParams);
}

export async function getCourseTopics() {
	const path = '/api/courses';
	const searchParams = {
			fields: ['topic']
	};

	return await getServerData(path, searchParams);
}

