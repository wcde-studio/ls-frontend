'use client';

import React, { ReactNode } from 'react';
import clsx from 'clsx';

import styles from './form-wrapper.module.scss';

import { CloseIcon } from '@/components/ui';
import { LoadingSpinner } from '@/components/services';

import { useRouter } from 'next/navigation';

import useLoginStore from '@/components/forms/useLoginStore';

type TFormWrapperProps = {
	title?: string;
	text?: string;
	loading?: boolean;
	children?: ReactNode;
	className?: string;
};
;

const FormWrapper = (props: TFormWrapperProps) => {
	const { title = '', text, loading = false, children, className } = props;

	const router = useRouter();
	const loginReturnPath = useLoginStore((state) => state.loginReturnPath);

	const closeIconOnClick = () => {
		router.push(loginReturnPath, { scroll: false });
	};

	const classNameFormWrapper = clsx(className, styles.formWrapper)

	return (
		<div className={classNameFormWrapper}>
			{/*loading ? <LoadingSpinner /> : null*/}
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
				{text ? <p className={styles.text}>{text}</p> : null}
				{children}
			</section>
		</div>
	);
};

export default FormWrapper;
