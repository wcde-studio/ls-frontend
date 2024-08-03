'use client';
import { ReactNode, useEffect, useMemo } from 'react';
import styles from './modal.module.scss';

import { useRouter, usePathname } from 'next/navigation';

import useLoginStore from '@/components/forms/useLoginStore';

type Props = {
	returnPath?: string;
	children: ReactNode;
};

const Modal = (props: Props) => {
	const { children, returnPath } = props;

	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		if (pathname.indexOf('auth') === -1) {
			document.body.style.overflow='scroll';
		} else {
			document.body.style.overflow='hidden';
		}
	}, [pathname]);

	const loginReturnPath = useLoginStore((state) => state.loginReturnPath);
	const setLoginReturnPath = useLoginStore((state) => state.setLoginReturnPath);

	const modalOnClick = () => {
		router.push(loginReturnPath, { scroll: false });
	};

	return pathname.indexOf('auth') > -1 ? (
		<div>
			<div onClick={modalOnClick} className={styles.modal}></div>
			<div className={styles.content}>{children}</div>
		</div>
	) : null;
};

export default Modal;
