'use client';

import React, { ReactNode } from 'react';
import clsx from 'clsx';

import styles from './form.module.scss';

import { FormName } from './types';
import { useForm } from '@/hooks';

type Props = {
	onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
	className: string;
	name: FormName;
	loading: boolean;
	children: ReactNode;
};

const Form = (props: Props) => {
	const { onSubmit, className, name, loading, children } = props;

	const formClassName = clsx(className, styles.form);

	return (
		<form onSubmit={onSubmit} className={formClassName} name={name}>
			{
				loading ? (
					<div className={styles.loading}>loading</div>
				) : null
			}
			{children}
		</form>
	);
};

export default Form;
