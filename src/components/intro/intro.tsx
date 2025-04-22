'use client';
import styles from './intro.module.scss';

import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { LadaVedIcon, LadaVedIconSvg } from '@/components/ui';

import { Button } from '@/components/ui';
import { ButtonSize, ButtonType } from '@/components/ui/button/types';

interface IIntroProps {
	imageSrc: string;
	title: {
		propities: {
			id: number;
			text: string;
		}[];
	};
}

const Intro = (props: IIntroProps) => {
	const { imageSrc, title } = props;

	return (
		<>
			<section className={styles.intro}>
				<div className={styles.desktop}>
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
				<LadaVedIconSvg
					className={clsx(styles.ladaVedIconSvg, styles.mobile)}
				/>
			</section>
			<section className={styles.sectionTitle}>
				{title?.propities.map((propertie, key) => (
					<p
						className={key === 0 ? styles.topTitle : styles.bottomTitle}
						key={propertie.id}>
						{propertie.text}
					</p>
				))}
				<div className={clsx(styles.introButton, styles.mobile)}>
					<Link href={'/courses'}>
						<Button
							type={ButtonType.Violet}
							size={ButtonSize.Desctop}
							title={'Курсы'}
						/>
					</Link>
				</div>
			</section>
		</>
	);
};

export default Intro;

/*
<section className={clsx(styles.intro, styles.mobile)}>
<Image
	alt="lada"
	src={imageSrc}
	width={'320'}
	height={'316'}
	className={styles.ladaImage}
/>
<LadaVedIconSvg className={styles.ladaVedIconSvg} />
</section>
<section className={clsx(styles.sectionTitle, styles.mobile)}>
{title?.propities.map((propertie, key) => (
	<p
		className={key === 0 ? styles.topTitle : styles.bottomTitle}
		key={propertie.id}>
		{propertie.text}
	</p>
))}
<div className={styles.introButton}>
	<Link href={'/courses'}>
		<Button
			type={ButtonType.Violet}
			size={ButtonSize.Desctop}
			title={'Курсы'}
		/>
	</Link>
</div>
</section>
*/
