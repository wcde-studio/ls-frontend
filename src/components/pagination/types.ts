import { SetStateAction } from "react";

export interface IPagination {
    onPageChange: (currentPage: SetStateAction<number | string>) => void;
    totalCount: number;
    siblingCount?: number;
    currentPage: number;
    pageSize: number;
    className: string
}

export type TUsePaginationProps = {
    totalCount: number;
    pageSize: number;
    siblingCount: number,
    currentPage: number
}