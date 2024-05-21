'use client';

import React, { useState, useEffect } from 'react';

import clsx from 'clsx';

import styles from '../input.module.scss';

import { InputType, InputSize } from '../types';

import {
	Input,
	InputCloseIcon,
	EyeCloseIcon,
	EyeOpenIcon,
} from '@/components/ui';

type Props = {
	name: string;
	size: InputSize;
	className?: string;
	error: boolean;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputPassword = (props: Props) => {
	const { name, size, className, value, onChange, error } = props;

	const [visibility, setVisibility] = useState(true);

	const classNameInput = clsx(className, styles.inputWrapper, {
		[styles[`${size}`]]: size,
		[styles.error]: error,
		[styles.value]: value,
	});

	const [inputError, setInputError] = useState(false);

	useEffect(() => {
		const valid = value.length > 10 || error;
		value === '' || valid ? setInputError(false) : setInputError(true);
	}, [value, error]);

	const onIconClick = () => {
		setVisibility(!visibility);
	};

	const icon = visibility ? <EyeOpenIcon /> : <EyeCloseIcon />;
	const textType = visibility ? InputType.Text : InputType.Password;

	return (
		<Input
			name={name}
			type={textType}
			size={InputSize.Desctop}
			value={value}
			onChange={onChange}
			error={inputError}
			placeholder={'Пароль'}
			errorMessage={'Введите корректный пароль'}
			icon={icon}
			onIconClick={onIconClick}
		/>
	);
};

export default InputPassword;
