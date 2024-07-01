import React from 'react';

import clsx from 'clsx';
import styles from './button.module.scss';

import { ButtonSize, ButtonType, ButtonHtmlType } from './types';

interface IButtonProps {
	type: ButtonType;
	size: ButtonSize;
	title: string;
	className?: string;
	onClick?: () => void;
	disabled?: boolean;
	htmlType?: ButtonHtmlType;
}

const Button = (props: IButtonProps) => {
	const {
		type,
		size,
		title,
		className,
		onClick,
		disabled = false,
		htmlType = ButtonHtmlType.Button,
	} = props;

	const classNameButton = clsx(
		styles.button,
		{ [styles[`${size}`]]: size },
		{ [styles[`${type}`]]: type },
		className
	);

	return (
		<button
			disabled={disabled}
			className={classNameButton}
			onClick={onClick}
			type={htmlType}>
			{title}
		</button>
	);
};

export default Button;
