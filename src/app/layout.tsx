<<<<<<< HEAD
import type { Metadata } from "next";
import React from 'react'
//import { Inter } from "next/font/google";
import "./globals.css";

//const inter = Inter({ subsets: ["latin"] });
=======
import type { Metadata } from 'next';
import React from 'react';
//import { Inter } from "next/font/google";
import './globals.css';
>>>>>>> develop

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
<<<<<<< HEAD
  return (
    <html lang="en">
      <body>
        <header>header</header>
        <main>{children}</main>
        <footer>footer</footer>
      </body>
    </html>
  );
=======
	return (
		<html lang="en">
			<body>
				<main>{children}</main>
			</body>
		</html>
	);
>>>>>>> develop
}
