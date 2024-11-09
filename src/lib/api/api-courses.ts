import qs from 'qs';

type TgetCourses = {
  data:
    {
      id: number,
      documentId: string,
      name: string,
      date: string,
      city: string,
      end: string,
      duration: string,
      target: string,
      goals: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      publishedAt: string,
      title: string,
      topic: string,
      image: {
        id: number,
        documentId: string,
        alternativeText: null | string,
        name: string,
        url: string
      }
    }[],
		meta: {
			pagination: {
				page: number,
				pageSize: number,
				pageCount: number,
				total: number
			}
		}
	}

const getCourses = async (baseUrl: string, path: string): Promise<TgetCourses>  => {
	
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
			}
		},
	});
		const res = await fetch(url);
		const data = await res.json();
		return data;	
};


export default getCourses;
