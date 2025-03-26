import type { Metadata } from 'next';
import React from 'react';
import './globals.scss';
import styles from './layout.module.scss';

import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

export const metadata: Metadata = {
	title: 'Школа Лады/WCDE',
	description:
		'Сильнейшая провидица современности, бизнес-маг, рунолог, этнолог, бизнес-тренер, наставник. Приемы по вопросам бизнеса, личным вопросам, онлайн и офлайн.',
	generator: 'Next.js',
	applicationName: 'Школа Лады/WCDE',
	referrer: 'origin-when-cross-origin',
	keywords: ['Next.js', 'React', 'JavaScript', 'WCDE', 'Школа Лады'],
	icons: [{ url: '/favicon.ico' }],
};

export default function RootLayout({
	children,
	parallel,
}: Readonly<{
	children: React.ReactNode;
	parallel: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Header />
				<main className={styles.main}>
					{children}
					{parallel}
				</main>
				<Footer />
			</body>
		</html>
	);
}
