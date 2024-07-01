import styles from './loading-spinner.module.scss';

const LoadingSpinner = () => {
	return (
		<div className={styles.wrapper}>
			<span className={styles.spinner}></span>
		</div>
	);
};

export default LoadingSpinner;
