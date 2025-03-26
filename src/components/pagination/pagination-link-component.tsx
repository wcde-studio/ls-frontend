'use client';
//import React, { SetStateAction } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

import clsx from 'clsx';
import { usePagination } from '@/hooks';

import RightArrowIcon from '@/components/ui/icons/right-arrow-icon';
import LeftArrowIcon from '@/components/ui/icons/left-arrow-icon';

import styles from './pagination.module.scss';

interface IPagination {
	totalCount: number;
	siblingCount?: number;
	currentPage: number;
	pageSize: number;
	className: string;
}

const PaginationLinkComponent = (props: IPagination) => {
	const {
		totalCount,
		siblingCount = 1,
		currentPage,
		pageSize,
		className,
	} = props;

	const pathname = usePathname();
	const searchParams = useSearchParams();
	const router = useRouter();

	const topic = searchParams.get('topic');

	const createPageURL = (pageNumber: number | string) => {
		const params = new URLSearchParams();
		params.set('page', pageNumber.toString());
		if (topic) params.set('topic', topic);
		return `${pathname}?${params.toString()}`;
	};

	const onPage = (href: string) => {
		router.push(href);
	};

	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize,
	});

	const lastPage =
		paginationRange && paginationRange[paginationRange.length - 1];

	if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
		return null;
	}

	return (
		<ul
			className={clsx(styles.paginationContainer, { [className]: className })}>
			<li
				className={`${styles.paginationItem} ${currentPage === 1 ? styles.disabled : ''}`}
				onClick={() => onPage(createPageURL(currentPage - 1))}>
				<LeftArrowIcon />
			</li>
			{Array.isArray(paginationRange) &&
				paginationRange.map((pageNumber: number | string, index) => {
					return (
						<li
							key={index}
							className={`${styles.paginationItem} ${pageNumber === '...' ? styles.disabled : ''} ${pageNumber === currentPage ? styles.selected : ''}`}
							onClick={() => onPage(createPageURL(pageNumber))}>
							{pageNumber}
						</li>
					);
				})}
			<li
				className={`${styles.paginationItem} ${currentPage === lastPage ? styles.disabled : ''}`}
				onClick={() => onPage(createPageURL(currentPage + 1))}>
				<RightArrowIcon />
			</li>
		</ul>
	);
};

export default PaginationLinkComponent;
