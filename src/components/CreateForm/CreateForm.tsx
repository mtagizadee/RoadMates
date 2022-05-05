import Form from "../Form/Form";
import Input from "../Input/Input";
import useCreateForm from "./useCreateForm";
import styles from './CreateForm.module.scss';
import Button from "../Button/Button";
import { FC, MouseEvent } from "react";
import { setFunction } from "../../types";

const CreateForm: FC<Props> = ({ cancelOnClick, setIsModalVisible }) => {
    const {
        from, setFrom,
        to, setTo,
        price, setPrice,
        criteria, setCriteria,
        additionalInfo, setAdditionalInfo,
        createOnClick
    } = useCreateForm(setIsModalVisible);

    return (
        <Form className={ styles.form }>
            <Input 
                type={'text'} 
                value={from} 
                setValue={setFrom} 
                placeholder={'From'} 
                icon={require('../../assets/icons/destination.png')}
                required={true}
                className={ styles.input }
            />
            <Input 
                type={'text'} 
                value={to} 
                setValue={setTo} 
                placeholder={'To'} 
                icon={require('../../assets/icons/destination.png')}
                required={true}
                className={ styles.input }
            />
            <Input 
                type={'number'} 
                value={price} 
                setValue={setPrice} 
                placeholder={'Price'} 
                icon={require('../../assets/icons/price.png')}
                className={ styles.input }
            />
            <Input 
                type={'text'} 
                value={criteria} 
                setValue={setCriteria} 
                placeholder={'Criteria'} 
                icon={require('../../assets/icons/criteria.png')}
                className={ styles.input }
            />
            <Input 
                type={'text'} 
                value={additionalInfo} 
                setValue={setAdditionalInfo} 
                placeholder={'Additional Information'} 
                icon={require('../../assets/icons/info.png')}
                className={ styles.input }
            />
            <div className={ styles.buttonBox }>
                <Button onClick={cancelOnClick} className={ styles.button }> Cancel </Button>
                <Button onClick={createOnClick} className={ styles.button }> Create </Button>
            </div>                              
        </Form>
    )
}

type Props = {
    cancelOnClick: (e: MouseEvent<HTMLButtonElement>) => void;
    setIsModalVisible: setFunction;
}

export default CreateForm;