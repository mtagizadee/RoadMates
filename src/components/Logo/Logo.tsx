import { FC } from 'react';
import styles from './Logo.module.scss';

const Logo: FC<Props> = ({ className }) => {
    return (
        <div className={ className? styles.wrapper + ' ' + className : styles.wrapper }>
            <img src={ require('../../assets/icons/logo.png') } alt="Logo" className={ styles.logo }/>
            <p className={ styles.name }> Road<span className={ styles.span }>Mates</span> </p>
        </div>
    )
}

type Props = {
    className?: string;
}

export default Logo;