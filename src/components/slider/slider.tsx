'use client';
import {
	useRef,
	useCallback,
	useState,
	useEffect,
	MouseEvent,
	MouseEventHandler,
} from 'react';

import styles from './slider.module.scss';

import Link from 'next/link';

import { Button } from '@/components/ui';
import { ButtonSize, ButtonType } from '@/components/ui/button/types';

import SliderReview from '@/components/services/slider-review/slider-review';

interface ISliderProps {
	reviews: {
		id: number;
		name: string;
		text: string;
	}[];
} 

const Slider = (props: ISliderProps) => {
	const { reviews } = props;
	const reviewsRef = useRef<null | HTMLUListElement>(null);
	const sliderWrapperRef = useRef<null | HTMLDivElement>(null);


	useEffect(() => {
		const refWidth = reviewsRef.current!.getBoundingClientRect().width;
		//const leftLimit = 374 - refWidth;
		const leftLimit = refWidth;
		const rightLimit = reviewsRef.current!.getBoundingClientRect().left;

		//reviewsRef.current!.onmousedown = (event) => {
		sliderWrapperRef.current!.onmousedown = (event) => {
			event.preventDefault();
			const shiftX = event.clientX - reviewsRef.current!.getBoundingClientRect().left;

			const moveAt = (pageX: number, pageY: number) => {
				const refPositionX = pageX - shiftX;
				//if (rightLimit > refPositionX && refPositionX > leftLimit) {
					reviewsRef.current!.style.left = pageX - shiftX + 'px';
				//}
			};

			const onMouseMove = (event: any) => {
				moveAt(event.pageX, event.pageY);
			};

			document.addEventListener('mousemove', onMouseMove);
			document.addEventListener('mouseup', () => {
				document.removeEventListener('mousemove', onMouseMove);
				//				reviewsRef.current!.onmouseup = null;
			});
		};
	}, [reviewsRef, sliderWrapperRef]);

	return (
		<div className={styles.slider}>
			<div ref={sliderWrapperRef} className={styles.sliderWrapper}>
				<ul ref={reviewsRef} className={styles.reviews}>
					{reviews.map((review) => (
						<li className={styles.review} key={review.id}>
							<SliderReview
								name={`${review.name} ${review.id}`}
								text={review.text}
							/>
						</li>
					))}
				</ul>
			</div>
			<Link href={'/'}>
				<Button
					type={ButtonType.Violet}
					size={ButtonSize.Desctop}
					title={'Все отзывы'}
				/>
			</Link>
		</div>
	);
};

export default Slider;