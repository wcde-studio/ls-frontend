'use client';

import React, { ReactNode } from 'react';
import clsx from 'clsx';

import styles from './form.module.scss';

import { CloseIcon } from '@/components/ui';

import { FormName } from './types';
import { useForm } from '@/hooks';

type Props = {
	onClose: () => void;
	title: string;
	onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
	//	className?: string;
	name: FormName;
	loading: boolean;
	children: ReactNode;
};

const Form = (props: Props) => {
	const { onClose, title, onSubmit, name, loading, children } = props;

	//	const formClassName = clsx(className, styles.form);

	return (
		<form onSubmit={onSubmit} className={styles.form} name={name}>
			{loading ? <div className={styles.loading}>loading</div> : null}
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
		</form>
	);
};

export default Form;
