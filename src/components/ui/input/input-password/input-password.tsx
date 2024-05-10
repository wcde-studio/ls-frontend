'use client';

import React, { useState } from 'react';

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
	size: InputSize;
	className?: string;
	error: boolean;
	value: string;
	setValue: (arg0: string) => void;
};

const InputPassword = (props: Props) => {
	const { size, className, value, setValue, error } = props;

	const [visibility, setVisibility] = useState(true);

	const classNameInput = clsx(className, styles.inputWrapper, {
		[styles[`${size}`]]: size,
		[styles.error]: error,
		[styles.value]: value,
	});

	const onIconClick = () => {
		setVisibility(!visibility);
	};

	const icon = visibility ? <EyeOpenIcon /> : <EyeCloseIcon />;
	const textType = visibility ? InputType.Text : InputType.Password;

	return (
		<Input
			type={textType}
			size={InputSize.Desctop}
			value={value}
			setValue={setValue}
			error={error}
			placeholder={'Пароль'}
			errorMessage={'Введите корректный пароль'}
			icon={icon}
			onIconClick={onIconClick}
		/>
	);
};

export default InputPassword;
