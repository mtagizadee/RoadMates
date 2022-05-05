import Container from '../../../components/Container/Container';
import LoginForm from '../../../components/LoginForm/LoginForm';
import styles from './Login.module.scss';


const LoginPage = () => {
    return (
        <Container className={ styles.container }>
            <LoginForm/>
        </Container>
    )
}

export default LoginPage;