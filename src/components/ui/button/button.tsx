import React from 'react';
import clsx from 'clsx';
import styles from './button.module.css';

import { ButtonSize, ButtonType } from './types';

interface IButtonProps {
	className?: string;
	type?: ButtonType;
	size?: ButtonSize;
	title: string;
	onClick?: () => void;
	disabled?: boolean;
}

const Button = (props: IButtonProps) => {
	const {
		className,
		type = ButtonType.White,
		size = ButtonSize.Desctop,
		title,
		onClick,
		disabled = false,
	} = props;

	const classNameButton = clsx(
		styles.button,
		className,
		{ [styles[`${size}`]]: size },
		{ [styles[`${type}`]]: type }
	);

	return (
		<button disabled={disabled} className={classNameButton} onClick={onClick}>
			{title}
		</button>
	);
};

export default Button;
