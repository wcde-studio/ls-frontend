import { TelegramIcon, WhatsUpIcon, VKIcon } from '@/components/ui';
import { getSocials } from '@/lib/api/api-utils';

interface ISocialLinksProps {
	className?: string;
}

type TSocialType = {
	id: number;
	title: string;
	link: string;
};

const selectIcons = (title: string) => {
	if (title.includes('telegram')) return <TelegramIcon />;
	if (title.includes('vk')) return <VKIcon />;
	if (title.includes('whatsapp')) return <WhatsUpIcon />;
	return null;
};

const SocialLinks = async (props: ISocialLinksProps) => {
	const { className } = props;
	const data = await getSocials();
	const socials = data?.data;

	return (
		<>
			{socials.map((social: TSocialType) => {
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
