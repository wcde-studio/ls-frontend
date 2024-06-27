import React, { FC } from "react";
import clsx from "clsx";
import { usePagination } from "./usePagination";
import { IPagination } from "./types";
import RightArrowIcon from "../ui/icons/right-arrow-icon";
import LeftArrowIcon from "../ui/icons/left-arrow-icon";
import styles from "./pagination.module.scss";

const Pagination: FC<IPagination> = ({
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className }) => {
    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if ((currentPage === 0) || (paginationRange && paginationRange.length < 2)) {
        return null;
    }

    const onNextPage = () => {
        onPageChange(currentPage + 1);
    };

    const onPreviousPage = () => {
        onPageChange(currentPage - 1);
    };

    const lastPage = paginationRange && paginationRange[paginationRange.length - 1];

    return (
        <ul
            className={clsx(styles.paginationContainer, { [className]: className })}
        >
            <li
                className={`${styles.paginationItem} ${currentPage === 1 ? styles.disabled : ''}`}
                onClick={onPreviousPage}
            >
                <LeftArrowIcon />
            </li>
            {Array.isArray(paginationRange) && paginationRange.map((pageNumber: number | string, index) => {
                return (
                    <li
                        key={index}
                        className={`${styles.paginationItem} ${pageNumber === '...' ? styles.disabled : ''} ${pageNumber === currentPage ? styles.selected : ''}`}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            <li
                className={`${styles.paginationItem} ${currentPage === lastPage ? styles.disabled : ''}`}
                onClick={onNextPage}
            >
                <RightArrowIcon />
            </li>
        </ul>
    );
};

export default Pagination;