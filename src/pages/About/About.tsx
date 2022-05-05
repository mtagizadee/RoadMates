import { Link } from 'react-router-dom';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import Logo from '../../components/Logo/Logo';
import { authURls, homePageUrl } from '../../constants';
import styles from './About.module.scss';

const AboutPage = () => {
    return (
        <Container className={ styles.container }>
            <Header/>
            <section className={ styles.section }>
                <p className={ styles.logo }> Road<span className={ styles.span }>Mates</span> </p>
                <p className={ styles.subhead }> Regain you <span className={ styles.span }> convenience </span> on the <span className={ styles.span }> road </span>. </p>
                <p className={styles.subhead}> Cheap - Convenient - Fast </p>
                <svg className={ styles.arrow } viewBox="0 0 16 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className={ styles.path } d="M7.29289 131.707C7.68341 132.098 8.31658 132.098 8.7071 131.707L15.0711 125.343C15.4616 124.953 15.4616 124.319 15.0711 123.929C14.6805 123.538 14.0474 123.538 13.6568 123.929L7.99999 129.586L2.34314 123.929C1.95262 123.538 1.31945 123.538 0.928927 123.929C0.538402 124.319 0.538402 124.953 0.928927 125.343L7.29289 131.707ZM7 -4.37114e-08L6.99999 131L8.99999 131L9 4.37114e-08L7 -4.37114e-08Z" fill="black"/>
                </svg>
                <Link className={styles.button} to={`${authURls.login}`}> Get Started </Link>
            </section>
            <img src={ require('../../assets/images/about.jpg') } alt="Road Image" className={ styles.aside }/>
        </Container>
    )
}

export default AboutPage;