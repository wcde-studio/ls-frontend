'use client';

import React, { useState, useEffect } from 'react';
import styles from './recovery-form.module.scss';

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

const RecoveryForm = () => {
	const { inputValue, handleInputChange, resetInputValue } = useInput({
		[InputName.Email]: '',
	});

	const { handlerOnSubmit, errors, valid, loading, checkEnd } = useForm({
		[InputName.Email]: false,
	});

	const router = useRouter();
	/*
	useEffect(() => {
		if (valid && checkEnd) {
			router.push('/personal-area');
		}
	}, [valid, checkEnd, router]);
*/

	return valid && checkEnd ? (
		<FormWrapper
			title={'Проверьте почту'}
			text={
				'Мы отправили ссылку для восстановления пароля. Перейдите по этой ссылке, чтобы задать новый пароль.'
			}
		/>
	) : (
		<FormWrapper
			title={'Восстановление пароля'}
			text={
				'Введите адрес электронной почты, указанный при регистрации. Мы отправим ссылку для восстановления пароля.'
			}
			loading={loading}>
			<Form onSubmit={handlerOnSubmit} name={FormName.Recovery}>
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
				</ul>
				<ul className={styles.buttonListContent}>
					<li className={styles.interButton}>
						<Button
							type={ButtonType.Violet}
							size={ButtonSize.Desctop}
							htmlType={ButtonHtmlType.Submit}
							title={'Получить ссылку'}
						/>
					</li>
					<li className={styles.registrationButton}>
						<Button
							type={ButtonType.Transparent}
							size={ButtonSize.Desctop}
							title={'Вспомнил пароль'}
							onClick={() => router.push('/auth/login', { scroll: false })}
						/>
					</li>
				</ul>
			</Form>
		</FormWrapper>
	);
};

export default RecoveryForm;
