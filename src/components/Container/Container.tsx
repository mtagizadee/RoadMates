import { FC, ReactNode } from 'react';
import styles from './Container.module.scss';

const Container: FC<Props> = ({ children, className }) => {
    return (
        <div className={ className? styles.container + ' ' + className : styles.container }>
            { children }
        </div>
    )
}

type Props = {
    children: ReactNode;
    className?: string;
}

export default Container;