'use client';

import React, { ReactNode } from 'react';
import clsx from 'clsx';

import styles from './form-wrapper.module.scss';

import { CloseIcon } from '@/components/ui';
import { LoadingSpinner } from '@/components/services';

type Props = {
	onClose: () => void;
	title: string;
	//	className?: string;
	loading: boolean;
	children: ReactNode;
};

const FormWrapper = (props: Props) => {
	const { onClose, title, loading, children } = props;

	//	const formClassName = clsx(className, styles.form);

	return (
		<div className={styles.formWrapper}>
			{loading ? <LoadingSpinner /> : null}
			<section className={styles.formContent}>
				<div className={styles.title}>
					<h2>{title}</h2>
					<button
						className={styles.closeIcon}
						onClick={onClose}
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
