import React from 'react';

import styles from './services.module.css';

import { TPriceOfServices } from '@/lib/definitions';

interface IServices {
	services?: Array<TPriceOfServices> | null;
}

const Services = (props: IServices) => {
	const { services } = props;
	return (
			<div className={styles.servicesWrapper}>
				{
					services?.map((service) => {
						return (
							<div className={styles.servicesContainer} key={service.id}>
								<p className={styles.price}>{service.price}</p>
								<div className={styles.propertyContainer}>
								{
									service.properties?.map((property) => 
										<p className={styles.propertyText} key={property.id}>{property.text}</p>
									)
								}
								</div>
							</div>
						)
					})
				}
			</div>
	);
};

export default Services;
