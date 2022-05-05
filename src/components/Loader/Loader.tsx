import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import styles from './Loader.module.scss';

const Loader = () => {
    return (
        <Container className={ styles.container }>
            <div className={ styles.wrapper }>
                <Logo/>
                <div className={ styles.ldsEllipsis }><div></div><div></div><div></div><div></div></div>
            </div>
        </Container>
    )
}

export default Loader;