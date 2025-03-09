'use client';
import { TelegramIcon, WhatsUpIcon, VKIcon } from '@/components/ui';

type TSocialType = {
	id: number;
	title: string;
	link: string;
};

interface ISocialLinksProps {
	className?: string;
	socials?: TSocialType[]; 
}


const selectIcons = (title: string) => {
	if (title.includes('telegram')) return <TelegramIcon />;
	if (title.includes('vk')) return <VKIcon />;
	if (title.includes('whatsapp')) return <WhatsUpIcon />;
	return null;
};

const SocialLinks = (props: ISocialLinksProps) => {
	const { className, socials } = props;
	return (
		<>
			{socials?.map((social: TSocialType) => {
				return (
					<li className={className} key={social.id}>
						<a href={social.link}>{selectIcons(social.title)}</a>
					</li>
				);
			})}
		</>
	);
};

export default SocialLinks;
