'use client';

import { useState, useEffect } from 'react';
import styles from './authorization-form.module.scss';
import Link from 'next/link';

import { Button } from '@/components/ui';
import {
	ButtonSize,
	ButtonType,
	ButtonHtmlType,
} from '@/components/ui/button/types';

import { InputEmail } from '@/components/ui';
import { InputPassword } from '@/components/ui';

import { InputSize } from '@/components/ui/input/types';

import { CloseIcon } from '@/components/ui';

type Props = {
	onClose: () => void;
};

const AuthorizationForm = (props: Props) => {
	const { onClose } = props;

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);

	useEffect(() => {
		const valid = email.toLowerCase().match('[^@\\s]+@[^@\\s]+[^@\\s]+');
		email === '' || valid ? setEmailError(false) : setEmailError(true);
	}, [email]);

	useEffect(() => {
		const valid = password.length > 10;
		password === '' || valid ? setPasswordError(false) : setPasswordError(true);
	}, [password]);

	const onSubmit = () => {
		console.log('form submit');
	};

	return (
		<form onSubmit={onSubmit} className={styles.form}>
			<section className={styles.formContent}>
				<div className={styles.title}>
					<h2>Вход</h2>
					<button className={styles.closeIcon} onClick={onClose}>
						<CloseIcon />
					</button>
				</div>
				<ul className={styles.listContent}>
					<li>
						<InputEmail
							size={InputSize.Desctop}
							value={email}
							setValue={setEmail}
							error={emailError}
						/>
					</li>
					<li>
						<InputPassword
							size={InputSize.Desctop}
							value={password}
							setValue={setPassword}
							error={passwordError}
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
		</form>
	);
};

export default AuthorizationForm;
