'use client';

import {
	useRef,
	useCallback,
	useState,
	useEffect,
	MouseEvent,
	MouseEventHandler,
} from 'react';

import styles from './slider-review.module.scss';

interface ISliderReviewProps {
	name: string;
	sentences: {
		id: number;
		text: string;
	}[];
}

const SliderReview = (props: ISliderReviewProps) => {
	const { name, sentences } = props;

	return (
		<>
			<h2 className={styles.reviewName}>{name}</h2>
			<ul className={styles.reviewSentences}>
				{sentences.map((sentence) => (
					<li key={sentence.id}>
						<p>{sentence.text}</p>
					</li>
				))}
			</ul>
		</>
	);
};

export default SliderReview;
