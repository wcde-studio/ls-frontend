'use client';

import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import { LogoIcon, ProfileIcon, MenuIcon, CloseIcon } from '../ui';
import styles from './header.module.scss';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';

const Header = () => {
	const pathname = usePathname();
	const isActive = (path: string) => path === pathname;
	const [menuOpen, setMenuOpen] = useState(false);
	const [y, setY] = useState(0);
	const [scrollUp, setScrollUp] = useState(false);

	const handlerNavigation = useCallback(() => {
		if (y > window?.scrollY) {
			setScrollUp(true);
		} else {
			setScrollUp(false);
		}
		setY(window?.scrollY);
	}, [y]);

	useEffect(() => {
		//		console.log(scrollUp);
		window.addEventListener('scroll', handlerNavigation);
		return () => window.removeEventListener('scroll', handlerNavigation);
	}, [handlerNavigation]);

	useEffect(() => {
		setMenuOpen(false);
	}, [pathname]);

	return (
		<header
			className={clsx(
				styles.headerContainer,
				{ [styles.menuOpen]: menuOpen },
				{ [styles.sticky]: scrollUp }
			)}>
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
						className={clsx(
							styles.link,
							isActive('/courses') && styles.link_active
						)}>
						Курсы
					</Link>
					<Link
						href="/contacts"
						className={clsx(
							styles.link,
							isActive('/contacts') && styles.link_active
						)}>
						Контакты
					</Link>
				</nav>
				<button
					onClick={() => setMenuOpen(!menuOpen)}
					className={clsx(styles.menuButton, styles.mobile)}>
					<MenuIcon />
				</button>
				<button
					className={clsx(styles.closeButton, styles.mobile)}
					onClick={() => setMenuOpen(!menuOpen)}>
					<CloseIcon />
				</button>
			</div>
		</header>
	);
};

export default Header;
/*
	import React, { useEffect } from 'react';
	import useLoginStore from '@/components/forms/useLoginStore';

	const login = useLoginStore((state) => state.login);
	const setLoginReturnPath = useLoginStore((state) => state.setLoginReturnPath);

	useEffect(() => {
		pathname.indexOf('auth') === -1 ? setLoginReturnPath(pathname) : null;
	}, [pathname, setLoginReturnPath]);

					<Link
						href={login ? '/auth/personal-area' : '/auth/login'}
						scroll={false}
						className={clsx(
							styles.link,
							styles.profileLink,
							isActive('/personal-area') && styles.link_active
						)}>
						<ProfileIcon className={styles.iconProfile} />
						<span className={styles.profileLinkText}>Личный кабинет</span>
					</Link>

*/
