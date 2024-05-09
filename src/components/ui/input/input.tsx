'use client';

import React, { ReactNode } from 'react';

import clsx from 'clsx';

import styles from './input.module.scss';

import { InputType, InputSize } from './types';

import { InputCloseIcon, EyeCloseIcon, EyeOpenIcon } from '@/components/ui';

type Props = {
	type: InputType;
	size: InputSize;
	className?: string;
	error: boolean;
	value: string;
	setValue: (arg0: string) => void;
	placeholder: string;
	errorMessage: string;
	icon: ReactNode;
	onIconClick: () => void;
};

const Input = (props: Props) => {
	const {
		type,
		size,
		className,
		value,
		setValue,
		error,
		placeholder,
		errorMessage,
		icon,
		onIconClick,
	} = props;

	const classNameInput = clsx(className, styles.inputWrapper, {
		[styles[`${size}`]]: size,
		[styles.error]: error,
		[styles.value]: value,
	});

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return (
		<div className={classNameInput}>
			<input
				className={styles.input}
				type={type}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
			/>
			<p className={styles.upPlaceholder}>{placeholder}</p>
			<button
				type={'button'}
				className={styles.iconButton}
				onClick={onIconClick}>
				{icon}
			</button>
			<p className={styles.errorMessage}>{errorMessage}</p>
		</div>
	);
};

export default Input;
