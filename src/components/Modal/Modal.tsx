import { FC, ReactNode } from "react";
import Container from "../Container/Container";
import styles from './Modal.module.scss';

const Modal: FC<Props> = ({ children, visible }) => {
    return (
        <>
            { visible?         
                <Container className={ styles.background }>
                    <div className={ styles.content }>
                        { children }
                    </div>
                </Container> : undefined
            }
        </>
    )
}

type Props = {
    visible: boolean;
    children: ReactNode; 
}

export default Modal;