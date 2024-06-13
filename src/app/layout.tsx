import type { Metadata } from 'next';
import React from 'react';
//import { Inter } from "next/font/google";
import './globals.css';
import styles from './layout.module.scss';

import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
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
