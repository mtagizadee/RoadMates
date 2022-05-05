import { FC, ReactNode, MouseEvent } from "react";
import styles from './Link.module.scss';

const Link: FC<Props> = ({ to, children, className, onClick }) => {
    return (
        <a href={ to } className={ className? styles.link + ' ' + className : styles.link } onClick={onClick}> { children } </a>
    )
}

type Props = {
    to: string;
    children: ReactNode;
    className?: string;
    onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

export default Link;