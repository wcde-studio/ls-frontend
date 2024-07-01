'use client';
import styles from './price.module.scss';

interface TProperties {
	id: number;
	price: number;
	currency: string;
	properties?:
		| {
				id: number;
				text: string;
		  }[]
		| null;
}

type Props = {
	price: TProperties;
	key?: number;
};

const Price = (props: Props) => {
	const { price } = props;

	const options = {
		style: 'currency',
		currency: price.currency,
		minimumFractionDigits: 0,
	};
	const numberFormat = new Intl.NumberFormat('ru-RU', options);
	const priceSymbol = numberFormat.format(price.price);

	return (
		<li className={styles.container}>
			<p className={styles.price}>{`${priceSymbol}`}</p>
			<ul className={styles.propertyContainer}>
				{price.properties?.map((property) => (
					<p className={styles.propertyText} key={property.id}>
						{property.text}
					</p>
				))}
			</ul>
		</li>
	);
};

export default Price;
