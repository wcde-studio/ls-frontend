'use client';

import React, { useState, useEffect } from 'react';

import styles from './authorization-form.module.scss';

import Link from 'next/link';

import { Button, CloseIcon, InputEmail,  InputPassword } from '@/components/ui';

import {
	ButtonSize,
	ButtonType,
	ButtonHtmlType,
} from '@/components/ui/button/types';

import { InputSize, InputName } from '@/components/ui/input/types';
import { FormName } from  '@/components/forms/types';
import  Form  from '../form';

import { useInput, useForm } from '@/hooks';

type Props = {
	onClose: () => void;
};

const AuthorizationForm = (props: Props) => {
	const { onClose } = props;

	const { input, handleInputChange, resetInput } = useInput({
		 [InputName.Email]: '',
		 [InputName.Password]: '',
	});

	const { 
		handlerOnSubmit, 
		errors, 
		valid, 
		loading, 
		checkEnd
		} = useForm({[InputName.Email]: false, [InputName.Password]: false });

		useEffect(() => {
			if(valid && checkEnd) onClose();
		}, [valid, checkEnd, onClose]);

	return (
		<Form onSubmit={handlerOnSubmit} className={styles.form} name={FormName.Authorization} loading={loading}>
			<section className={styles.formContent}>
				<div className={styles.title}>
					<h2>Вход</h2>
					<button className={styles.closeIcon} onClick={onClose} type={'button'}>
						<CloseIcon />
					</button>
				</div>
				<ul className={styles.listContent}>
					<li>
						<InputEmail
							name={InputName.Email}
							size={InputSize.Desctop}
							value={input[InputName.Email]}
							onChange={handleInputChange}
							error={errors[InputName.Email]}
							resetInput={resetInput}
						/>
					</li>
					<li>
						<InputPassword
							name={InputName.Password}
							size={InputSize.Desctop}
							value={input[InputName.Password]}
							onChange={handleInputChange}
							error={errors[InputName.Password]}
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
			</section>
		</Form>
	);
};

export default AuthorizationForm;
