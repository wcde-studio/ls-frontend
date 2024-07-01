import React, { ReactNode } from 'react';

import clsx from 'clsx';
import styles from './icon-button.module.scss';

import { ButtonSize, ContentPosition, ButtonHtmlType } from '../types';

interface IIconButtonProps {
	children?: ReactNode;
	contentPosition?: ContentPosition;
	size: ButtonSize;
	title: string;
	className?: string;
	onClick?: () => void;
	disabled?: boolean;
	htmlType?: ButtonHtmlType;
}

const IconButton = (props: IIconButtonProps) => {
	const {
		children,
		contentPosition = ContentPosition.Center,
		size,
		title,
		className,
		onClick,
		disabled = false,
		htmlType = ButtonHtmlType.Button,
	} = props;

	const classNameButton = clsx(
		styles.button,
		{ [styles[`${contentPosition}`]]: contentPosition },
		{ [styles[`${size}`]]: size },
		className
	);

	return (
		<button
			disabled={disabled}
			className={classNameButton}
			onClick={onClick}
			type={htmlType}>
			<div className={styles.icon}>{children}</div>
			<p className={styles.title}>{title}</p>
		</button>
	);
};

export default IconButton;
