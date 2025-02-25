import styles from './intro.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import { LadaVedIcon, LadaVedIconSvg } from '@/components/ui';

import { Button } from '@/components/ui';
import { ButtonSize, ButtonType } from '@/components/ui/button/types';

interface IIntroProps {
	imageSrc: string;
	title: {
		propities: {
			id: number;
			text: string;
		}[]
	}
};

const Intro = (props: IIntroProps) => {
	const { imageSrc, title} = props;

	return (
		<>
			<section className={styles.intro}>
				<div>
					<LadaVedIconSvg className={styles.ladaVedIconSvg} />
					<div className={styles.introButton}>
						<Link href={'/courses'}>
							<Button
								type={ButtonType.Violet}
								size={ButtonSize.Desctop}
								title={'Курсы'}
							/>
						</Link>
					</div>
				</div>
				<Image
					alt="lada"
					src={imageSrc}
					width={'637'}
					height={'622'}
					className={styles.ladaImage}
				/>
			</section>
			<section className={styles.sectionTitle}>
				{
					title?.propities.map((propertie, key)=>
					<p 
						className={key === 0 ? styles.topTitle : styles.bottomTitle}
						key={propertie.id}
					>
						{propertie.text}
					</p>
					)
				}
			</section>
		</>
	);
}; 

export default Intro;
