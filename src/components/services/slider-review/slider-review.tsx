'use client';

import styles from './slider-review.module.scss';

interface ISliderReviewProps {
	name: string;
	text: string;
}

const SliderReview = (props: ISliderReviewProps) => {
	const { name, text } = props;
	const sentences = text.split(/\r?\n/);

	return (
		<>
			<h2 className={styles.reviewName}>{name}</h2>
			<ul className={styles.reviewSentences}>
				{sentences.map((sentence, id) => (
					<li key={id}>
						<p>{sentence}</p>
					</li>
				))}
			</ul>
		</>
	);
};

export default SliderReview;
