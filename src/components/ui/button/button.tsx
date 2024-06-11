import React from 'react';
import clsx from 'clsx';
import styles from './button.module.scss';

import { ButtonSize, ButtonType } from './types';

interface IButtonProps {
	type: ButtonType;
	size: ButtonSize;
	title: string;
	className?: string;
	onClick?: () => void;
	disabled?: boolean;
}

const Button = (props: IButtonProps) => {
	const { type, size, title, className, onClick, disabled = false } = props;

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
