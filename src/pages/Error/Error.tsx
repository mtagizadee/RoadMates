import { FC, ReactNode } from "react";
import Container from "../../components/Container/Container";
import Logo from "../../components/Logo/Logo";
import styles from './Error.module.scss';

const ErrorPage: FC<Props> = ({ children }) => {
    return (
        <Container className={ styles.container }>
            <div className={ styles.wrapper }>
                <Logo/>
                { children }
            </div>
        </Container>
    )
}

type Props = {
    children: ReactNode
}

export default ErrorPage;