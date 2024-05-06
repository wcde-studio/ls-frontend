import React from 'react';

import clsx from 'clsx';
import styles from './input-email.module.scss';

import { InputSize } from '../types';

type Props = {
	size: InputSize;
	className?: string;
}

const InputEmail = (props: Props) => {
	const {
		size,
	 className
	} = props;


	const classNameInput = clsx(
		styles.input,
		className,
		{ [styles[`${size}`]]: size }
	);

	return (
		<div className={styles.inputWrapper}>
			<input 
				type={'email'}
				size={'40'}
				placeholder={'email'}
			/>
		</div>
	);
};

export default InputEmail;
