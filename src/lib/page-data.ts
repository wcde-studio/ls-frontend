import { AwardType, AwardSize } from '@/components/services';

type TPageData = {
	awards: {
		id: number;
		type: AwardType;
		text: string;
	}[];
};

export const pageData: TPageData = {
	awards: [
		{
			id: 1,
			type: AwardType.Team,
			text: 'Член правления Общероссийской общественной организации «Деловые Женщины России»',
		},
		{
			id: 2,
			type: AwardType.Game,
			text: 'Автор бизнес-игры «Мышление на миллиард»',
		},
		{
			id: 3,
			type: AwardType.Book,
			text: 'Автор книг по этнологии и древней магической традиции',
		},
		{
			id: 4,
			type: AwardType.Leadership,
			text: 'Региональный лидер клуба PRO-женщин',
		},
		{
			id: 5,
			type: AwardType.TVScreen,
			text: 'TV-эксперт Каналы ОРТ, ТВ3, ОТР, НТВ, РенТВ и др.',
		},
		{
			id: 6,
			type: AwardType.TV,
			text: 'Сильнейший участник шоу «Сверхъестественный отбор» на ТВ3',
		},
		{
			id: 7,
			type: AwardType.Prize,
			text: 'Трижды лауреат премии «Успех», «Золотая птица», деловые женщины России 2019, 2020, 2021гг.',
		},
		{
			id: 8,
			type: AwardType.Ribbon,
			text: 'Трижды лауреат телевизионной бизнес-премии за вклад в развитие общества и социальное служение «Маgic Awords»',
		},
		{
			id: 9,
			type: AwardType.Cup,
			text: 'Дважды лауреат премии «Признание года» от республики Башкортостан и канала MTVmix 2018, 2021гг.',
		},
		{
			id: 10,
			type: AwardType.Award,
			text: 'Победитель множества профессиональных соревнований в области магии, в том числе международных',
		},
	],
};
