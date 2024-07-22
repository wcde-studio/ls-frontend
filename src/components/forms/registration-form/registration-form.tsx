'use client';

import React, { useState, useEffect } from 'react';
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
import { FormName } from '@/components/forms/types';
import Form from '../form';

import { useInput, useForm } from '@/hooks';

type Props = {
	onClose: () => void;
};


const RegistrationForm = (props: Props) => {
	const { onClose } = props;

	const { inputValue, handleInputChange, resetInputValue } = useInput({
		[InputName.UserName]: '',
		[InputName.UserSurname]: '',
		[InputName.Email]: '',
		[InputName.Telephone]: '',
		[InputName.Telegram]: '',
		[InputName.City]: '',
		[InputName.Password]: '',
		[InputName.RepeatPassword]: '',
		[InputName.ConfirmRegistration]: false,
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
//		[InputName.ConfirmRegistration]: false,
	});

	const router = useRouter();

	useEffect(() => {
		if (valid && checkEnd) {
			onClose();
		}
	}, [valid, checkEnd, onClose]);

	const onClickConfirm = () => {
		onClose();
		router.push('/');
	};

	return (
		<FormWrapper title={'Регистрация'} onClose={onClose} loading={loading}>
			<Form onSubmit={handlerOnSubmit} name={FormName.Registration}>
				<ul className={styles.inputListContent}>
					<li>
						<Input
							name={InputName.UserName}
							size={InputSize.Desctop}
							value={inputValue}
							type={InputType.Text}
							onChange={handleInputChange}
							placeholder={'Имя*'}
							errorMessage={'Введите имя'}
							errors={errors}
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
							errorMessage={'Введите фамилию'}
							errors={errors}
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
							errorMessage={'Введите корректный email'}
							errors={errors}
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
							errorMessage={'Введите телефон'}
							errors={errors}
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
							errorMessage={''}
							errors={errors}
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
							errorMessage={''}
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
					<li>
						<Input
							name={InputName.RepeatPassword}
							size={InputSize.Desctop}
							value={inputValue}
							type={InputType.Password}
							onChange={handleInputChange}
							placeholder={'Повторите пароль*'}
							errorMessage={'Введунные пароли не совпадают'}
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
							errors={errors}
							resetValue={resetInputValue}
						/>
						<p>
							<span>
								{
									'Нажимая кнопку Регистрация, я подтверждаю своё согласие на обработку моих персональных данных, и соглашаюсь с'
								}
							</span>
							<Link
								href={'/contacts'}
								onClick={onClose}
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
							onClick={() => {}}
						/>
					</li>
				</ul>
			</Form>
		</FormWrapper>
	);
};

export default RegistrationForm;
