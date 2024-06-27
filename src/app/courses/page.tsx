"use client"
import {useMemo, useState } from 'react';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import Pagination from '@/components/pagination';
import data from '@/mock/mock-data.json';
import styles from './courses.module.css';

const PageSize = 6;

export default function Courses() {
	const [currentPage, setCurrentPage] = useState(1);

	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return data.slice(firstPageIndex, lastPageIndex);
	}, [currentPage]);

	return (
		<>
			<Header />
			<main className={styles.main}>
				<table className={styles.table}>
					<thead>
						<tr>
							<th>ID</th>
							<th>FIRST NAME</th>
							<th>LAST NAME</th>
							<th>EMAIL</th>
							<th>PHONE</th>
						</tr>
					</thead>
					<tbody>
						{currentTableData.map(item => {
							return (
								<tr key={item.id}>
									<td>{item.id}</td>
									<td>{item.first_name}</td>
									<td>{item.last_name}</td>
									<td>{item.email}</td>
									<td>{item.phone}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				<div className={styles.paginationWrapper}>
					<Pagination
						className="pagination-bar"
						currentPage={currentPage}
						totalCount={data.length}
						pageSize={PageSize}
						onPageChange={page => setCurrentPage(page as number)}
					/>
				</div>
			</main>
			<Footer />
		</>
	);
}
