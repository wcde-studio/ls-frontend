import { ReactNode } from 'react';
import styles from './modal.module.scss';

type Props = {
	children: ReactNode;
	modalOn: boolean;
	onClick: ()=>void;
};

const Modal = (props: Props) => {

	const {
		children,
		modalOn=false,
		onClick=()=>{}
	} = props;

	return modalOn ? (
		<div className={styles.modal}>
			<div className={styles.background} onClick={onClick}></div>
			<div className={styles.content}>
			 {children}
			</div>
		</div>
	) : null;
};

export default Modal;
