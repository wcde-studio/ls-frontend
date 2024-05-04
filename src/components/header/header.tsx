'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import { LogoIcon, ProfileIcon } from '../ui';
import styles from './header.module.scss';
import Link from 'next/link';

const Header = () => {
	const pathname = usePathname();
	const isActive = (path: string) => path === pathname;

	return (
		<header className={styles.headerContainer}>
			<div className={styles.header}>
				<Link href="/" className={styles.logoContainer}>
					<LogoIcon className={styles.iconLogo} />
					<p className={styles.logoText}>Проектирование жизни и бизнеса</p>
				</Link>
				<nav className={styles.navigation}>
					<Link
						href="/"
						className={clsx(styles.link, isActive('/') && styles.link_active)}>
						Главная
					</Link>
					<Link
						href="/courses"
						className={clsx(styles.link, isActive('/courses') && styles.link_active)}>
						Курсы
					</Link>
					<Link
						href="/"
						className={clsx(styles.link, isActive('/b') && styles.link_active)}>
						Контакты
					</Link>
					<Link
						href="/"
						className={clsx(
							styles.link,
							styles.profileLink,
							isActive('/c') && styles.link_active
						)}>
						<ProfileIcon className={styles.iconProfile} />
						<span className={styles.profileLinkText}>Личный кабинет</span>
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
