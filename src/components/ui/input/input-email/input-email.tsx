'use client';

import React, { useState, useEffect } from 'react';

import clsx from 'clsx';

import styles from '../input.module.scss';

import { InputType, InputSize, InputName } from '../types';

import {
	Input,
	InputCloseIcon,
	EyeCloseIcon,
	EyeOpenIcon,
} from '@/components/ui';

type Props = {
	name: InputName;
	size: InputSize;
	className?: string;
	error: boolean;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	resetInput: (arg0: string) => void;
};

const InputEmail = (props: Props) => {
	const { name, size, className, value, onChange, error, resetInput } = props;

	const [inputError, setInputError] = useState(false);

	const classNameInput = clsx(className, styles.inputWrapper, {
		[styles[`${size}`]]: size,
		[styles.error]: error,
		[styles.value]: value,
	});

	useEffect(() => {
		//		const valid = value.toLowerCase().match('[^@\\s]+@[^@\\s]+[^@\\s]+') && !error;
		//		value === '' || valid ? setInputError(false) : setInputError(true);
		error ? setInputError(true) : setInputError(false);
	}, [value, error]);

	const onIconClick = () => {
		resetInput(name);
	};

	const icon = value ? <InputCloseIcon /> : false;

	return (
		<Input
			name={name}
			type={InputType.Email}
			size={InputSize.Desctop}
			value={value}
			onChange={onChange}
			error={inputError}
			placeholder={'Email'}
			errorMessage={'Введите корректный email'}
			icon={icon}
			onIconClick={onIconClick}
		/>
	);
};

export default InputEmail;
