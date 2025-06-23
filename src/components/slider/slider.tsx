'use client';
import {
	useRef,
	useState,
} from 'react';

import styles from './slider.module.scss';

import Link from 'next/link';

import { Button } from '@/components/ui';
import { ButtonSize, ButtonType } from '@/components/ui/button/types';

import SliderReview from '@/components/services/slider-review/slider-review';
//import { clearInterval, clearTimeout, setInterval, setTimeout } from 'timers';

interface ISliderProps {
	reviews: {
		id: number;
		name: string;
		text: string;
	}[];
	link: string;
}

const Slider = (props: ISliderProps) => {
	const { reviews, link } = props;
	const reviewsRef = useRef<null | HTMLUListElement>(null);
	const sliderWrapperRef = useRef<null | HTMLDivElement>(null);
	
	const [initialPosition, setInitialPosition] = useState(null);
	const [moving, setMoving] = useState(false);
	const [transform, setTransform] = useState(0);
	const [lastPageX, setLastPageX] = useState(0);
	const [transformValue, setTransformValue] = useState(0);
	//const [animationName, setAnimationName] = useState('');
	//const [intervalDiff, setIntervalDiff] = useState(1);


	const gestureStart = (e: any) => {
		e.preventDefault();
		setInitialPosition(e.pageX);
		setMoving(true);
		const style = window.getComputedStyle(reviewsRef.current!);
		const transformMatrix = style.getPropertyValue('transform'); 
		if (transformMatrix !== 'none') {
			setTransform(parseInt(transformMatrix.split(',')[4].trim()));
		}
		reviewsRef.current!.style.animationName = 'none';
		reviewsRef.current!.style.transform = `translateX(${parseInt(transformMatrix.split(',')[4].trim())}px)`;

	};

	const gestureMove = (e: any) => {	
		e.preventDefault();
		if (moving) {
			const diff = e.pageX - initialPosition!;
			if (e.pageX - lastPageX > 0) {
				if (transformValue > 0) {
					return;
				}
			} else {
				if (Math.abs(transformValue) > reviewsRef.current!.offsetWidth - sliderWrapperRef.current!.offsetWidth) {
					return;
				}
			}
			setTransformValue(transform + diff);
			reviewsRef.current!.style.transform = `translateX(${transformValue}px)`;
		}	
		setLastPageX(e.pageX);	
	};

	const gestureTouchStart = (e: any) => {
		//e.preventDefault();
		setInitialPosition(e.touches[0].clientX);
		setMoving(true);
		const style = window.getComputedStyle(reviewsRef.current!);
		const transformMatrix = style.getPropertyValue('transform'); 
		if (transformMatrix !== 'none') {
			setTransform(parseInt(transformMatrix.split(',')[4].trim()));
		}
		reviewsRef.current!.style.animationName = 'none';
		reviewsRef.current!.style.transform = `translateX(${parseInt(transformMatrix.split(',')[4].trim())}px)`;

	};

	const gestureTouchMove = (e: any) => {	
		//e.preventDefault();
		if (moving) {
			const diff = e.touches[0].clientX - initialPosition!;
			if (e.pageX - lastPageX > 0) {
				if (transformValue > 0) {
					return;
				}
			} else {
				if (Math.abs(transformValue) > reviewsRef.current!.offsetWidth - sliderWrapperRef.current!.offsetWidth) {
					return;
				}
			}
			setTransformValue(transform + diff + 2);
			reviewsRef.current!.style.transform = `translateX(${transformValue}px)`;
		}	
		setLastPageX(e.pageX);	
	};

	const gestureEnd = (e: any) => {
		setMoving(false);
	};
	const gestureOver = (e: any) => {
		reviewsRef.current!.style.animationPlayState = 'paused';
	};

	const gestureLeave = (e: any) => {
		reviewsRef.current!.style.animationName = '';
		reviewsRef.current!.style.animationPlayState = 'running';	
	};
	
	return (
		<div className={styles.slider}>
			<div  className={styles.sliderWrapper} ref={sliderWrapperRef}
				onMouseDown={gestureStart}
				onMouseMove={gestureMove}
				onMouseUp={gestureEnd}
				onMouseLeave={gestureLeave}
				onMouseOver={gestureOver}

				onTouchStart={gestureTouchStart}
				onTouchMove={gestureTouchMove}
				
			>						
				<ul  
					ref={reviewsRef}
					className={styles.reviews}
				>
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
			<Link href={link}>
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
