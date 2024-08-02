'use client';

import React, { ReactNode } from 'react';
import clsx from 'clsx';

import styles from './form-wrapper.module.scss';

import { CloseIcon } from '@/components/ui';
import { LoadingSpinner } from '@/components/services';

import { useRouter } from 'next/navigation';

import useLoginStore from '@/components/forms/useLoginStore';

type Props = {
	title: string;
	loading: boolean;
	children: ReactNode;
};

const FormWrapper = (props: Props) => {
	const { title, loading, children } = props;

	const router = useRouter();
	const loginReturnPath = useLoginStore((state) => state.loginReturnPath);

	const closeIconOnClick = () => {
		router.push(loginReturnPath, { scroll: false });
	};

	return (
		<div className={styles.formWrapper}>
			{loading ? <LoadingSpinner /> : null}
			<section className={styles.formContent}>
				<div className={styles.title}>
					<h2>{title}</h2>
					<button
						className={styles.closeIcon}
						onClick={closeIconOnClick}
						type={'button'}>
						<CloseIcon />
					</button>
				</div>
				{children}
			</section>
		</div>
	);
};

export default FormWrapper;
