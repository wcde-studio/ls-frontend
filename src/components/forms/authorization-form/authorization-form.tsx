'use client';

import React, { useState, useEffect } from 'react';
import styles from './authorization-form.module.scss';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Button, Input } from '@/components/ui';
import FormWrapper from '@/components/services/form-wrapper/form-wrapper';

import {
	ButtonSize,
	ButtonType,
	ButtonHtmlType,
} from '@/components/ui/button/types';

import { InputSize, InputName, InputType } from '@/components/ui/input/types';
import { FormName } from '@/components/forms/types';
import Form from '../form';

import { useInput, useForm } from '@/hooks';

import useLoginStore from '@/components/forms/useLoginStore';

const AuthorizationForm = () => {
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

	const router = useRouter();

	useEffect(() => {
		if (valid && checkEnd) {
			router.push('/personal-area');
		}
	}, [valid, checkEnd, router]);

	return (
		<FormWrapper title={'Вход'} loading={loading}>
			<Form onSubmit={handlerOnSubmit} name={FormName.Authorization}>
				<ul className={styles.inputListContent}>
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
				<ul className={styles.buttonListContent}>
					<li className={styles.interButton}>
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
							onClick={() => router.push('/auth/reset', { scroll: false })}
						/>
					</li>
					<li className={styles.registrationButton}>
						<Button
							type={ButtonType.Transparent}
							size={ButtonSize.Desctop}
							title={'Регистрация'}
							onClick={() => router.push('/auth/register', { scroll: false })}
						/>
					</li>
				</ul>
			</Form>
		</FormWrapper>
	);
};

export default AuthorizationForm;
