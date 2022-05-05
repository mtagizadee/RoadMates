import { useState, MouseEvent } from "react";
import { setFunction } from "../../types";

const useHeader = (): ReturnType => {
    const [search, setSearch] = useState<string>('');
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    const createOnClick = (e: MouseEvent<HTMLAnchorElement>) => {
        setIsModalVisible(true);
    }

    const cancelOnClick = (e: MouseEvent<HTMLButtonElement>) => {
        setIsModalVisible(false);
    }

    return { search, setSearch, isModalVisible, createOnClick, cancelOnClick, setIsModalVisible }
}

type ReturnType = {
    search: string;
    setSearch: setFunction;
    isModalVisible: boolean;
    createOnClick: (e: MouseEvent<HTMLAnchorElement>) => void;
    cancelOnClick: (e: MouseEvent<HTMLButtonElement>) => void;
    setIsModalVisible: setFunction;
}

export default useHeader;