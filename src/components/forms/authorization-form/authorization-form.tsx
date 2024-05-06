'use client';

import styles from './authorization-form.module.scss';
import Link from 'next/link';

import { Button } from '@/components/ui';
import { ButtonSize, ButtonType, ButtonHtmlType } from '@/components/ui/button/types';

import { InputEmail } from '@/components/ui';
import { InputSize } from '@/components/ui/input/types';

import { CloseIcon } from '@/components/ui';

type Props = {
	onClose: ()=> void;
};

const AuthorizationForm = (props: Props) => {

	const {
		onClose
 } = props;

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
						<InputEmail />
					</li>
					<li>
						<input />
					</li>
					<li>
						<input />
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