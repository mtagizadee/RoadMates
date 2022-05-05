import { FC } from "react"
import styles from './Input.module.scss';
import useInput from './useInput';

const Input: FC<Props> = ({ icon, className, setValue, ...props }) => {
    
    const { onChange, onClick } = useInput(setValue);

    return (
        <div className={ className? styles.box + ' ' + className : styles.box }>
            <img src={ icon } alt="icon" className={ styles.icon }/>
            <input { ...props } className={ styles.input } onChange={onChange}/>
            { props.value? <div className={ styles.close } onClick={onClick}>x</div> : null }
        </div>
    )
}

type Props = {
    type: string;
    value: any;
    setValue: (value: any) => void;
    placeholder: string;
    required?: boolean;
    icon: string;
    className?: string;
}

export default Input;