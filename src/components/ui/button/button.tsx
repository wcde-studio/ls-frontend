import React from 'react';
import clsx from 'clsx';
import styles from './button.module.css';

import { PlusIcon, PreviousIcon, NextIcon, EditIcon } from '@/components/ui';

interface IProps
	extends React.PropsWithChildren {
	type?: 'button_1' | 'button_1_plus' | 'button_2' | 'button_3' | 'button_4' | 'button_5' | 'button_6';
	size? : 'desctop' | 'pad' | 'mobile'
	onClick?: () => void;
	disabled?: boolean;
}

const Button = (props: IProps) => {
	const {children, type='button_1', size = 'desctop', onClick, disabled=false} = props;

	const classNameButton = clsx(
		styles.button,
		{[styles[`${size}`]]: size},
		{[styles[`${type}`]]: type}
	);

	const buttonIcons = {
		button_1: { left: null, right: null },
		button_1_plus: { left:  <PlusIcon />, right: null },
		button_2: { left: null, right: null },
		button_3: { left: null, right: null },
		button_4: { left: <PreviousIcon />, right: null },
		button_5: { left: null, right: <NextIcon /> },
		button_6: { left: <EditIcon />, right: null },
	};

//console.log(buttonIcons[type].left);

	return (
		<button disabled={disabled} className={classNameButton} onClick={onClick}>
			<div className={styles.title_container}>
				<div className={clsx(styles.icon, styles.left_icon)}>
					{buttonIcons[type]?.left}
				</div>
				<div className={styles.title}>
					{children}
				</div>
				<div className={clsx(styles.icon, styles.right_icon)}>
					{buttonIcons[type]?.right}
				</div>
			</div>
		</button>
	);
};

export default Button;
