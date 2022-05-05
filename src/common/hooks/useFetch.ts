import axios from "axios";
import { useState } from "react";

export default function useFetch<T>(url: string) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isErrorOccured, setIsErrorOccured] = useState<boolean>(false);

    async function fetch(setData: (state: T) => void) {
        try {
            setIsLoading(true);
            
            const response = await axios.get<T>(url);
            setData(response.data);
        } catch (error) {
            setIsErrorOccured(true)
        } finally {
            setIsLoading(false);
        }
    }

    return { fetch, isLoading, isErrorOccured }
}

type ReturnType = {
    isLoading: boolean;
    isErrorOccured: boolean;
    data: any;
}