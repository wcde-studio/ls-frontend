'use server';
import styles from './footer.module.scss';
import { getSocials } from '@/lib/api/api-utils';

//import React from 'react';

import Link from 'next/link';

import { WCDEIcon } from '@/components/ui';
import SocialLinks from '@/components/services/social-links/social-links';

const Footer = async () => {
	const data = await getSocials();
	const socials = data?.data;

	return (
		<footer className={styles.footer}>
			<div className={styles.footerWrapper}>
				<div className={styles.footerContainer}>
					<nav className={styles.siteMapContainer}>
						<ul className={styles.siteMapLinksWrapper}>
							<li className={styles.siteMapLinkWrapper}>
								<div className={styles.siteMapLink}>
									<Link href={'/'}>Главная</Link>
								</div>
							</li>
							<li className={styles.siteMapLinkWrapper}>
								<div className={styles.siteMapLink}>
									<Link href={'/courses'}>Курсы</Link>
								</div>
							</li>
							<li className={styles.siteMapLinkWrapper}>
								<div className={styles.siteMapLink}>
									<Link href={'/contacts'}>Контакты</Link>
								</div>
							</li>
						</ul>
					</nav>
					<div className={styles.socialLinksContainer}>
						<ul className={styles.socialLinksWrapper}>
							<SocialLinks socials={socials} />
						</ul>
					</div>
				</div>
				<div className={styles.attention}>
					<p className={styles.attentionText}>
						{
							'Любое копирование материалов сайта допускается только с разрешения правообладателя'
						}
					</p>
				</div>
			</div>
			<div className={styles.privacyPolicy}>
				<div className={styles.privacyPolicyWrapper}>
					<div className={styles.privacyPolicyLink}>
						<Link href={'/'}>Пользовательское соглашение</Link>
					</div>
					<div className={styles.creators}>
						<div className={styles.creatorsLogo}>
							<WCDEIcon />
						</div>
						<div className={styles.creatorsName}>Сделано WCDE.studio 2023</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

/*
							<li className={styles.siteMapLinkWrapper}>
								<div className={styles.siteMapLink}>
									<Link href={'/auth/personal-area'}>Личный кабинет</Link>
								</div>
							</li>
*/
