import { useState, MouseEvent } from "react";
import { setFunction } from "../../types";

const useLoginForm = (): ReturnType => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onClick = () => {
        // Implement this
    }

    return { email, setEmail, password, setPassword, onClick }
}

type ReturnType = {
    email: string;
    setEmail: setFunction;
    password: string;
    setPassword: setFunction;
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default useLoginForm;