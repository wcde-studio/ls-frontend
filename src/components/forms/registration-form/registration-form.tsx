'use client';

//import React, { useState, useEffect } from 'react';
import styles from './registration-form.module.scss';

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
//import { FormName } from '@/components/forms/types';
//import Form from '../form';

import { useInput, useForm, useFormState } from '@/hooks';

import registerUserAction  from '@/lib/data/actions/auth-actions';
import { useEffect } from 'react';

const RegisterForm = () => {
	const { inputValue, handleInputChange, resetInputValue } = useInput({
		[InputName.UserName]: '',
		[InputName.UserSurname]: '',
		[InputName.Email]: '',
		[InputName.Telephone]: '',
		[InputName.Telegram]: '',
		[InputName.City]: '',
		[InputName.Password]: '',
		[InputName.RepeatPassword]: '',
		//		[InputName.ConfirmRegistration]: false,
	});

	const { handlerOnSubmit, errors, valid, loading, checkEnd } = useForm({
		[InputName.UserName]: false,
		[InputName.UserSurname]: false,
		[InputName.Email]: false,
		[InputName.Telephone]: false,
		[InputName.Telegram]: false,
		[InputName.City]: false,
		[InputName.Password]: false,
		[InputName.RepeatPassword]: false,
		[InputName.ConfirmRegistration]: false,
	});

	const router = useRouter();

	const initialState = {
		data: null,
	};

	const {formState, formSubmit, isProcessing} = useFormState(initialState, registerUserAction);
	//console.log(isProcessing);
	
	useEffect(() => {
//		console.log(formState);
	}, [formState]);


	return valid && checkEnd ? (
		<FormWrapper title={''} text={'Вы успешно зарегистрировались'} />
	) : (
		<FormWrapper title={'Регистрация'} loading={isProcessing}>
			{/*<Form onSubmit={handlerOnSubmit} name={FormName.Registration}>*/}
			<form onSubmit={formSubmit}>
				<ul className={styles.inputListContent}>
					<li>
						<Input
							name={InputName.UserName}
							size={InputSize.Desctop}
							value={inputValue}
							type={InputType.Text}
							onChange={handleInputChange}
							placeholder={'Имя*'}
							errorMessage={formState?.zodErrors?.[InputName.UserName]}
							resetValue={resetInputValue}
						/>
					</li>
					<li>
						<Input
							name={InputName.UserSurname}
							size={InputSize.Desctop}
							value={inputValue}
							type={InputType.Text}
							onChange={handleInputChange}
							placeholder={'Фамилия*'}
							errorMessage={formState?.zodErrors?.[InputName.UserSurname]}
							resetValue={resetInputValue}
						/>
					</li>
					<li>
						<Input
							name={InputName.Email}
							size={InputSize.Desctop}
							value={inputValue}
							type={InputType.Email}
							onChange={handleInputChange}
							placeholder={'Email*'}
							errorMessage={formState?.zodErrors?.[InputName.Email]}
							resetValue={resetInputValue}
						/>
					</li>
					<li>
						<Input
							name={InputName.Telephone}
							size={InputSize.Desctop}
							value={inputValue}
							type={InputType.Tel}
							onChange={handleInputChange}
							placeholder={'Телефон*'}
							errorMessage={formState?.zodErrors?.[InputName.Telephone]}
							resetValue={resetInputValue}
						/>
					</li>
					<li>
						<Input
							name={InputName.Telegram}
							size={InputSize.Desctop}
							value={inputValue}
							type={InputType.Text}
							onChange={handleInputChange}
							placeholder={'Ник в телеграм'}
							errorMessage={formState?.zodErrors?.[InputName.Telegram]}
							resetValue={resetInputValue}
						/>
					</li>
					<li>
						<Input
							name={InputName.City}
							size={InputSize.Desctop}
							value={inputValue}
							type={InputType.Text}
							onChange={handleInputChange}
							placeholder={'Город'}
							errorMessage={formState?.zodErrors?.[InputName.City]}
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
							errorMessage={formState?.zodErrors?.[InputName.Password]}
							resetValue={resetInputValue}
						/>
					</li>
					<li>
						<Input
							name={InputName.RepeatPassword}
							size={InputSize.Desctop}
							value={inputValue}
							type={InputType.Password}
							onChange={handleInputChange}
							placeholder={'Повторите пароль*'}
							errorMessage={formState?.zodErrors?.[InputName.RepeatPassword]}
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
							title={'Зарегистрироваться'}
						/>
					</li>
					<li className={styles.confirm}>
						<Input
							name={InputName.ConfirmRegistration}
							size={InputSize.Desctop}
							value={inputValue}
							type={InputType.Checkbox}
							onChange={handleInputChange}
							resetValue={resetInputValue}
						/>
						<p>
							<span>
								{
									'Нажимая кнопку Регистрация, я подтверждаю своё согласие на обработку моих персональных данных, и соглашаюсь с'
								}
							</span>
							<Link
								scroll={false}
								href={'/contacts'}
								className={styles.confirmLink}>
								{'политикой сайта'}
							</Link>
						</p>
					</li>
					<li className={styles.registrationButton}>
						<Button
							type={ButtonType.Transparent}
							size={ButtonSize.Desctop}
							title={'Войти с паролем'}
							onClick={() => router.push('/auth/login', { scroll: false })}
						/>
					</li>
				</ul>
			</form>
			{/*</Form>*/}
		</FormWrapper>
	);
};

export default RegisterForm;
