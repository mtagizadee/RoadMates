import { setFunction } from '../../types'

const usePaginationCard = (setPage: setFunction): ReturnType => {
    const onClick = (page: number) => {
        setPage(page);
    }

    return { onClick }
}

type ReturnType = {
    onClick: (page: number) => void;
}

export default usePaginationCard;