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

	useEffect(() => {
		const refWidth = reviewsRef.current!.getBoundingClientRect().width;
		const leftLimit = 374 - refWidth;
		const rightLimit = reviewsRef.current!.getBoundingClientRect().left;

		reviewsRef.current!.onmousedown = (event) => {
			event.preventDefault();
			reviewsRef.current!.style.position = 'absolute';
			reviewsRef.current!.style.zIndex = '1';
			reviewsRef.current!.ondragstart = () => {
				return false;
			};

			const shiftX =
				event.clientX - reviewsRef.current!.getBoundingClientRect().left;

			const moveAt = (pageX: number, pageY: number) => {
				const refPositionX = pageX - shiftX;
				if (rightLimit > refPositionX && refPositionX > leftLimit) {
					reviewsRef.current!.style.left = pageX - shiftX + 'px';
				}
			};

			const onMouseMove = (event: any) => {
				moveAt(event.pageX, event.pageY);
			};
			document.addEventListener('mousemove', onMouseMove);
			document.addEventListener('mouseup', () => {
				event.preventDefault();
				document.removeEventListener('mousemove', onMouseMove);
			});
		};

		reviewsRef.current!.ontouchstart = (event) => {
			event.preventDefault();
//			reviewsRef.current!.style.position = 'absolute';
//			reviewsRef.current!.style.zIndex = '1';
			reviewsRef.current!.ondragstart = () => {
				return false;
			};

			const shiftX =
				event.touches[0].clientX - reviewsRef.current!.getBoundingClientRect().left;

			const moveAt = (pageX: number, pageY: number) => {
				const refPositionX = pageX - shiftX;
				if (rightLimit > refPositionX && refPositionX > leftLimit) {
					reviewsRef.current!.style.left = pageX - shiftX + 'px';
				}
			};

			const onTouchMove = (event: any) => {
				moveAt(event.changedTouches[0].pageX, event.changedTouches[0].pageY);
			};
			document.addEventListener('touchmove', onTouchMove);
			document.addEventListener('touchup', () => {
				event.preventDefault();
	//			reviewsRef.current!.style.position = 'relative';
	//			reviewsRef.current!.style.zIndex = '0';	
				document.removeEventListener('touchmove', onTouchMove);
			});
		};

}, [reviewsRef]);

	return (
		<div className={styles.slider}>
			<div className={styles.sliderWrapper}>
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
