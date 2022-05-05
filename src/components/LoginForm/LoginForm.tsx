import { Link } from 'react-router-dom';
import { homePageUrl } from '../../constants';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './LoginForm.module.scss';
import useLoginForm from './useLoginForm';

const LoginForm = () => {
    const {email, setEmail, password, setPassword, onClick} = useLoginForm();

    return (
        <div className={ styles.container }>
            <p className={ styles.logo }>Road<span className={ styles.span }>Mates</span></p>
            <Input className={ styles.input }
                type={'email'} 
                value={email} 
                setValue={setEmail} 
                placeholder={'Email'} 
                icon={require('../../assets/icons/mail.png')}
            />
            <Input className={ styles.input }
                type={'password'} 
                value={password} 
                setValue={setPassword} 
                placeholder={'Password'} 
                icon={require('../../assets/icons/padlock.png')}
            />
            <Button onClick={onClick}> Sign In </Button>
            <p> Already have an accound? <Link to={ '#' }> Sing Up! </Link></p>
            <Link to={'#'}> Forgot Password </Link>
            <Link to={`../../${homePageUrl}`}> Preview </Link>
        </div>
    )
}

export default LoginForm;