import { setFunction } from "../../types";
import { FC } from "react";
import styles from './Pagination.module.scss';
import usePagination from "./usePagination";
import PaginationCard from "../PaginationCard/PaginationCard";

const Pagination: FC<Props> = ({ numberOfPages, setPage, className, currentPage }) => {
    const { pages } = usePagination(numberOfPages);
    return (
        <div className={ className? styles.container + ' ' + className : styles.container }>
            {pages.map(( page: number ) => 
                <PaginationCard
                    setPage={ setPage } 
                    key={ page }  
                    pageNumber={ page } 
                    current={ (page === currentPage) }     
                />)
            }
        </div>
    )
}

type Props = {
    numberOfPages: number;
    setPage: setFunction;
    className?: string;
    currentPage: number;
}

export default Pagination;