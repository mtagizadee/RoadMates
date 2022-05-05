import { useEffect, useState } from "react";
import useFetch from "../../common/hooks/useFetch";
import { apiRequestURLs } from "../../constants";
import { Publication, setFunction } from "../../types";

const useHome = (): ReturnType => {
    const [publications, setPublications] = useState<Publication[]>([]);
    const [page, setPage] = useState<number>(1);
    const [numberOfPages, setNumberOfPages] = useState<number>(1);

    const numberOfPagesConfig = useFetch<number>(apiRequestURLs.publications.getNumberOfPages);
    const publicationsConfig = useFetch<Publication[]>(apiRequestURLs.publications.pagination + page)

    useEffect(() => {
        numberOfPagesConfig.fetch(setNumberOfPages);
        publicationsConfig.fetch(setPublications);
     }, [page]);
      
    return {
        publications, 
        isLoading: publicationsConfig.isLoading, 
        isErrorOccured: publicationsConfig.isErrorOccured, 
        setPage, page, numberOfPages 
    }
}

type ReturnType = {
    publications: Publication[];
    isLoading: boolean;
    isErrorOccured: boolean;
    page: number;
    setPage: setFunction;
    numberOfPages: number;
}

export default useHome;