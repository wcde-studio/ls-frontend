'use client';

import React, { useState } from 'react';

import clsx from 'clsx';

import styles from './input.module.scss';

import { InputType, InputSize, InputName } from './types';

import { 
	InputCloseIcon, 
	EyeCloseIcon, 
	EyeOpenIcon
} from '@/components/ui';

type Props = {
	name: InputName;
	type: InputType;
	size: InputSize;
	className?: string;
	errors: Record<string, boolean>;
	value: Record<string, string>;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
	errorMessage: string;
	resetValue: (arg0: string) => void;
};

const Input = (props: Props) => {
	const {
		name,
		type,
		size,
		className,
		value,
		onChange,
		errors,
		placeholder,
		errorMessage,
		resetValue,
	} = props;

	const [visibility, setVisibility] = useState(false);

	const classNameInput = clsx(className, styles.inputWrapper, {
		[styles[`${size}`]]: size,
		[styles.error]: errors[name],
		[styles.value]: value[name],
	});

	const onIconClick = {
		[InputType.Email]: () => resetValue(name),
		[InputType.Text]: () => resetValue(name),
		[InputType.Password]: () => setVisibility(!visibility),
	};

	const icon = {
		[InputType.Email]: value[name] ? <InputCloseIcon /> : null,
		[InputType.Text]: value[name] ? <InputCloseIcon /> : null,
		[InputType.Password]: visibility ? <EyeOpenIcon /> : <EyeCloseIcon />,
	};

	const currentType = {
		[InputType.Email]: type,
		[InputType.Text]: type,
		[InputType.Password]: visibility ? InputType.Text : InputType.Password,
	};

	return (
		<div className={classNameInput}>
			<input
				name={name}
				className={styles.input}
				type={currentType[type]}
				value={value[name]}
				placeholder={placeholder}
				onChange={onChange}
			/>
			<p className={styles.upPlaceholder}>{placeholder}</p>
			<button
				type={'button'}
				className={styles.iconButton}
				onClick={onIconClick[type]}>
				{icon[type]}
			</button>
			<p className={styles.errorMessage}>{errorMessage}</p>
		</div>
	);
};

export default Input;
