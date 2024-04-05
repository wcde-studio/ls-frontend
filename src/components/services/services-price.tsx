import React from 'react';

import styles from './services-price.module.css';

type TProperty = {
	id: number;
	text: string;
};

type TPrice = {
	id: number;
	price: number;
	currency: string;
	properties: TProperty[];
};

type Props = {
	price: TPrice;
};

const ServicesPrice = (props: Props) => {
	const { price } = props;

	const options = {
		style: 'currency',
		currency: price.currency,
		minimumFractionDigits: 0,
	};
	const numberFormat = new Intl.NumberFormat('ru-RU', options);
	const priceSymbol = numberFormat.format(price.price);

	return (
		<li className={styles.servicesContainer}>
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

export default ServicesPrice;
