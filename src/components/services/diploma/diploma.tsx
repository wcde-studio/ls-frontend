'use client';

import Image from 'next/image';
import styles from './diploma.module.scss';

import { DiplomaSize } from './types';

interface IDiplomaProps {
	src: string;
	size: DiplomaSize;
	alt: string;
}

const Diploma = (props: IDiplomaProps) => {
	const { src, size, alt } = props;

	return (
		<li className={styles.imageWrapper}>
			<Image src={src} width={260} height={370} alt={alt} />
		</li>
	);
};

export default Diploma;
