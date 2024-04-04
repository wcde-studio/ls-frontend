import React from 'react';

import styles from './services-price.module.css';

const ServicesPrice = (props) => {
	const { price } = props;
	return (
		<li className={styles.servicesContainer}>
			<p className={styles.price}>{`${price.price} ${price.currency}`}</p>
			<ul className={styles.propertyContainer}>
			{
				price.properties?.map((property) => 
					<p className={styles.propertyText} key={property.id}>{property.text}</p>
				)
			}
			</ul>
		</li>
 )
}

export default ServicesPrice;
