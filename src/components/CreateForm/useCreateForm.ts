import { useState } from "react";
import { CreatePublicationDto } from "../../dto";
import { setFunction } from "../../types";
import { MouseEvent } from "react";
import PublicationService from "../../services/PublicationService";

const useCreateForm = (setIsModalVisible: setFunction): ReturnType => {
    const [from, setFrom] = useState<string>('');
    const [to, setTo] = useState<string>('');
    const [criteria, setCriteria] = useState<string>('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [price, setPrice] = useState<number>();

    const createOnClick = async () => {
        try {
            const dto: CreatePublicationDto = {
                from, to,
                criteria: criteria !== ''? criteria : undefined,
                additionalInfo: additionalInfo !== ''? additionalInfo : undefined,
                price: price? Number(price) : undefined
            }
            await PublicationService.create(dto);
            setIsModalVisible(false);
        } catch (error) {
            console.log(error)
        }
    }

    return { 
        from, setFrom, 
        to, setTo, 
        criteria, setCriteria, 
        additionalInfo, setAdditionalInfo, 
        price, setPrice,
        createOnClick
    }
}

type ReturnType = {
    from: string;
    setFrom: setFunction;
    to: string;
    setTo: setFunction;
    criteria: string;
    setCriteria: setFunction;
    additionalInfo: string;
    setAdditionalInfo: setFunction;
    price: number | undefined;
    setPrice: setFunction;
    createOnClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default useCreateForm;