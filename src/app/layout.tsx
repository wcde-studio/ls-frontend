import type { Metadata } from 'next';
import React from 'react';
//import { Inter } from "next/font/google";
import './globals.scss';
import styles from './layout.module.scss';

import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

export const metadata: Metadata = {
	title: 'Школа Лады/WCDE',
	description: 'Сильнейшая провидица современности, бизнес-маг, рунолог, этнолог, бизнес-тренер, наставник. Приемы по вопросам бизнеса, личным вопросам, онлайн и офлайн.',
	generator: 'Next.js',
	applicationName: 'Школа Лады/WCDE',
	referrer: 'origin-when-cross-origin',
	keywords: ['Next.js', 'React', 'JavaScript', 'WCDE', 'Школа Лады'],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Header />
				<main className={styles.main}>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
