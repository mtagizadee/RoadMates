import { useEffect, useState } from "react";

const usePagination = (numberOfPages: number): ReturnType => {
    const [pages, setPages] = useState<number[]>([]);

    const getArrayOfPages = () => {
        let result = Array.from(Array(numberOfPages).keys());
        result = result.map( (num: number) => num + 1);
        setPages(result);
    }

    useEffect(() => { getArrayOfPages() }, []);


    return { pages }
}

type ReturnType = {
    pages: number[];
}

export default usePagination;