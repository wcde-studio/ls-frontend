'use client';

import React, { useState, useEffect } from 'react';

import styles from './authorization-form.module.scss';

import Link from 'next/link';

import { Button, Input } from '@/components/ui';

import {
	ButtonSize,
	ButtonType,
	ButtonHtmlType,
} from '@/components/ui/button/types';

import { InputSize, InputName, InputType } from '@/components/ui/input/types';
import { FormName } from '@/components/forms/types';
import Form from '../form';

import { useInput, useForm } from '@/hooks';

type Props = {
	onClose: () => void;
};

const AuthorizationForm = (props: Props) => {
	const { onClose } = props;

	const { inputValue, handleInputChange, resetInputValue } = useInput({
		[InputName.Email]: '',
		[InputName.Password]: '',
		[InputName.UserName]: '',
	});

	const { handlerOnSubmit, errors, valid, loading, checkEnd } = useForm({
		[InputName.Email]: false,
		[InputName.Password]: false,
		[InputName.UserName]: false,
	});

	useEffect(() => {
		if (valid && checkEnd) onClose();
	}, [valid, checkEnd, onClose]);

	return (
		<Form
			title={'Вход'}
			onClose={onClose}
			onSubmit={handlerOnSubmit}
			name={FormName.Authorization}
			loading={loading}>
			<ul className={styles.listContent}>
				<li>
					<Input
						name={InputName.Email}
						size={InputSize.Desctop}
						value={inputValue}
						type={InputType.Email}
						onChange={handleInputChange}
						placeholder={'Email'}
						errorMessage={'Введите корректный email'}
						errors={errors}
						resetValue={resetInputValue}
					/>
				</li>
				<li>
					<Input
						name={InputName.Password}
						size={InputSize.Desctop}
						value={inputValue}
						type={InputType.Password}
						onChange={handleInputChange}
						placeholder={'Пароль'}
						errorMessage={'Введите корректный пароль'}
						errors={errors}
						resetValue={resetInputValue}
					/>
				</li>
			</ul>
			<ul className={styles.listContent}>
				<li>
					<Button
						type={ButtonType.Violet}
						size={ButtonSize.Desctop}
						htmlType={ButtonHtmlType.Submit}
						title={'Войти'}
					/>
				</li>
				<li>
					<Button
						type={ButtonType.Transparent}
						size={ButtonSize.Desctop}
						title={'Забыли пароль?'}
					/>
				</li>
				<li>
					<Button
						type={ButtonType.Transparent}
						size={ButtonSize.Desctop}
						title={'Регистрация'}
					/>
				</li>
			</ul>
		</Form>
	);
};

export default AuthorizationForm;
