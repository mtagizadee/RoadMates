import { FC, ReactNode } from "react"
import styles from './Form.module.scss';

const Form: FC<Props> = ({ children, className }) => {
    return (
        <form className={className? styles.form + ' ' + className : styles.form  }>
            { children }
        </form>
    )
}

type Props = {
    children: ReactNode;
    className?: string;
}

export default Form;