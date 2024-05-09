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

const InputEmail = (props: Props) => {
	const { size, className, value, setValue, error } = props;

	const classNameInput = clsx(className, styles.inputWrapper, {
		[styles[`${size}`]]: size,
		[styles.error]: error,
		[styles.value]: value,
	});

	const onIconClick = () => {
		setValue('');
	};

	const icon = value ? <InputCloseIcon /> : false;

	return (
		<Input
			type={InputType.Email}
			size={InputSize.Desctop}
			value={value}
			setValue={setValue}
			error={error}
			placeholder={'Email'}
			errorMessage={'Введите корректный email'}
			icon={icon}
			onIconClick={onIconClick}
		/>
	);
};

export default InputEmail;
