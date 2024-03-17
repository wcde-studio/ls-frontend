import styles from './footer.module.css';
import React from 'react';

import Link from 'next/link';

//import WCDEIcon from '@/ui/icons/wcde-icon';
//import TelegramIcon from '@/ui/icons/telegram-icon';
//import WhatsUpIcon from '@/ui/icons/whats-up-icon';
//import VKIcon from '@/ui/icons/vk-icon';

import { WCDEIcon, TelegramIcon, WhatsUpIcon, VKIcon } from '@/components/ui';

const Footer = () => {
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
									<Link href={'/'}>Курсы</Link>
								</div>
							</li>
							<li className={styles.siteMapLinkWrapper}>
								<div className={styles.siteMapLink}>
									<Link href={'/'}>Контакты</Link>
								</div>
							</li>
							<li className={styles.siteMapLinkWrapper}>
								<div className={styles.siteMapLink}>
									<Link href={'/'}>Личный кабинет</Link>
								</div>
							</li>
						</ul>
					</nav>
					<div className={styles.socialLinksContainer}>
						<ul className={styles.socialLinksWrapper}>
							<li className={styles.socialLink}>
								<Link href={'/'}>
									<TelegramIcon />
								</Link>
							</li>
							<li className={styles.socialLink}>
								<Link href={'/'}>
									<WhatsUpIcon />
								</Link>
							</li>
							<li className={styles.socialLink}>
								<Link href={'/'}>
									<VKIcon />
								</Link>
							</li>
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
