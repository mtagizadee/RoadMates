import { ChangeEvent, MouseEvent } from "react";

const useInput = (setValue: (value: any) => void): ReturnType => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
    const onClick = (e: MouseEvent<HTMLDivElement>) => setValue('');

    return { onChange, onClick }
}

type ReturnType = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick: (e: MouseEvent<HTMLDivElement>) => void;
}

export default useInput;