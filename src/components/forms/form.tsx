'use client';

import React, { ReactNode } from 'react';
import clsx from 'clsx';

import styles from './form.module.scss';

import { FormName } from './types';

type TFormProps = {
	onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
	name: FormName;
	children: ReactNode;
};

const Form = (props: TFormProps) => {
	const { onSubmit, name, children } = props;

	return (
		<form onSubmit={onSubmit} name={name}>
			{children}
		</form>
	);
};

export default Form;
