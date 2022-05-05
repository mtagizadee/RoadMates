import { FC, MouseEvent } from 'react';
import { setFunction } from '../../types';
import styles from './PaginationCard.module.scss';
import usePaginationCard from './usePaginationCard';

const PaginationCard: FC<Props> = ({ pageNumber, current, setPage }) => {
    const { onClick } = usePaginationCard(setPage);

    return (
        <div onClick={ () => onClick(pageNumber) } className={ current? styles.card + ' ' + styles.current : styles.card }>
            { pageNumber }    
        </div>
    )
}

type Props = {
    current: boolean;
    pageNumber: number;
    setPage: setFunction;
}

export default PaginationCard;