import React, { SetStateAction } from 'react';

import clsx from 'clsx';
import { usePagination } from '@/hooks';

import RightArrowIcon from '@/components/ui/icons/right-arrow-icon';
import LeftArrowIcon from '@/components/ui/icons/left-arrow-icon';

import styles from './pagination.module.scss';

interface IPagination {
	onPageChange: (currentPage: SetStateAction<number | string>) => void;
	totalCount: number;
	siblingCount?: number;
	currentPage: number;
	pageSize: number;
	className: string;
}

const Pagination = (props: IPagination) => {
	const {
		onPageChange,
		totalCount,
		siblingCount = 1,
		currentPage,
		pageSize,
		className,
	} = props;

	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize,
	});

	if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
		return null;
	}

	const onNextPage = () => {
		onPageChange(currentPage + 1);
	};

	const onPreviousPage = () => {
		onPageChange(currentPage - 1);
	};

	const lastPage =
		paginationRange && paginationRange[paginationRange.length - 1];

	return (
		<ul
			className={clsx(styles.paginationContainer, { [className]: className })}>
			<li
				className={`${styles.paginationItem} ${currentPage === 1 ? styles.disabled : ''}`}
				onClick={onPreviousPage}>
				<LeftArrowIcon />
			</li>
			{Array.isArray(paginationRange) &&
				paginationRange.map((pageNumber: number | string, index) => {
					return (
						<li
							key={index}
							className={`${styles.paginationItem} ${pageNumber === '...' ? styles.disabled : ''} ${pageNumber === currentPage ? styles.selected : ''}`}
							onClick={() => onPageChange(pageNumber)}>
							{pageNumber}
						</li>
					);
				})}
			<li
				className={`${styles.paginationItem} ${currentPage === lastPage ? styles.disabled : ''}`}
				onClick={onNextPage}>
				<RightArrowIcon />
			</li>
		</ul>
	);
};

export default Pagination;
