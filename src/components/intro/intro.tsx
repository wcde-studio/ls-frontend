import styles from './intro.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import { LadaVedIcon, LadaVedIconSvg } from '@/components/ui';

import { Button } from '@/components/ui';
import { ButtonSize, ButtonType } from '@/components/ui/button/types';

const Intro = () => {
	return (
		<>
			<section className={styles.intro}>
				<div>
					<LadaVedIconSvg className={styles.ladaVedIconSvg} />
					<div className={styles.introButton}>
						<Link href={'/'} >
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
					src={'/lada-intro.png'}
					width={'637'}
					height={'622'}
					className={styles.ladaImage}
				/>
			</section>
			<section className={styles.sectionTitle}>
				<p className={styles.topTitle}>{'Организационно-управленческий психолог, корпоративный бизнес-тренер, мотиватор, наставник'}</p>
				<p className={styles.bottomTitle}>{'А ещё сильнейшая провидица современности, бизнес-маг, рунолог, этнолог, физик'}</p>
			</section>
		</>
	);
}

export default Intro;
