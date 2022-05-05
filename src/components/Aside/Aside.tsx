import { FC } from "react";
import Link from "../Link/Link";
import styles from './Aside.module.scss';
import useAside from "./useAside";

const Aside: FC<Props> = ({ className }) => {
    const { profiles } = useAside();
    
    return (
        <aside className={ className? styles.aside + ' ' + className : styles.aside }>
            <div className={ styles.content }> 
                <div className={ className? styles.profile + ' ' + className : styles.profile }>
                    <img src={ require('../../assets/images/1211040.jpg') } alt="profile photo" className={ styles.photo }/>
                    <p> <Link className={ styles.nickname } to={ '#' }> MT </Link> <br /> 0$ </p>
                </div>                                       
            </div>
        </aside>
    )
}

type Props = {
    className?: string;
}

export default Aside;