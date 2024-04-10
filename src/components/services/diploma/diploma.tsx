'use client';

import Image from 'next/image';

import { DiplomaSize } from './types';

interface IDiplomaProps {
	src?: string;
	size?: DiplomaSize;
	alt?: string;
}

const Diploma = (props: IDiplomaProps) => {
	const {
		src = '/diploma/certificate-parent-child-coaching.png',
		size = DiplomaSize.Desctop,
		alt = 'certificateparent child coaching',
	} = props;

	return (
		<li>
			<Image src={src} width={260} height={370} alt={alt} />
		</li>
	);
};

export default Diploma;
