import { FC } from "react";
import Input from "../Input/Input"
import Link from "../Link/Link"
import Logo from "../Logo/Logo"
import styles from './Header.module.scss';
import useHeader from "./useHeader";
import Modal from "../Modal/Modal";
import CreateForm from "../CreateForm/CreateForm";

const Header: FC<Props> = ({ className }) => {
    const { 
        search, 
        setSearch, 
        isModalVisible, 
        createOnClick,
        cancelOnClick,
        setIsModalVisible
    } = useHeader();
    
    return (
        <>
            <Modal visible={isModalVisible}> 
                <CreateForm cancelOnClick={cancelOnClick} setIsModalVisible={setIsModalVisible}/>
            </Modal>
            <header className={ className? styles.header + ' ' + className : styles.header }> 
                <Logo/>
                <Input 
                    type={ 'text' } 
                    value={ search } 
                    setValue={ setSearch }
                    placeholder={ 'Search...' } 
                    icon={ require('../../assets/icons/search.ico') }
                    className={ styles.search }
                />
                <nav>
                    <ul className={ styles.list }>
                        <li> <Link to={'#'}> Home </Link> </li>
                        <li> <Link to={ '#' } onClick={createOnClick}> Create </Link> </li>
                        <li> <Link to={ '#' }> Messanger </Link> </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

type Props = {
    className?: string;
}

export default Header;