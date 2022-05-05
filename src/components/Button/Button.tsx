import { FC, ReactNode, MouseEvent } from "react"
import styles from './Button.module.scss';

const Button: FC<Props> = ({ children, className, onClick }) => {
    return (
        <button className={className? styles.button + ' ' + className : styles.button } onClick={onClick}>
            { children } 
        </button>
    )
}

type Props = {
    children: ReactNode;
    className?: string;
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default Button;