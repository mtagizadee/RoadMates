import styles from './HomePage.module.scss';
import Header from '../../components/Header/Header';
import PublicationItem from '../../components/PublicationItem/PublicationItem';
import Aside from '../../components/Aside/Aside';
import useHome from './useHome';
import List from '../../components/List/List';
import { Publication } from '../../types';
import Loader from '../../components/Loader/Loader';
import Pagination from '../../components/Pagination/Paginations';
import ErrorPage from '../Error/Error';

const HomePage = () => {
    const { publications, isLoading, isErrorOccured, setPage, numberOfPages, page } = useHome();

    if (isLoading) return <Loader/>
    if (isErrorOccured) return <ErrorPage> <p> <span className={ styles.span }> 505 </span> Something got <span className={ styles.span }> wrong </span>, please try again later on... </p> </ErrorPage>

    return (
        <div className={ styles.container }>
            <Header/> 
            <List className={ styles.list }
                    items={ publications } 
                    renderItem={ (publication: Publication) => 
                        <PublicationItem 
                            publication={{
                                id: publication.id,
                                createdAt: publication.createdAt,
                                updatedAt: publication.updatedAt,
                                expiredAt: publication.expiredAt,
                                from: publication.from,
                                to: publication.to,
                                price: publication.price,
                                criteria: publication.criteria,
                                additionalInfo: publication.additionalInfo,
                                authorId: publication.authorId
                            }}
                            key={publication.id}
                        /> 
                    }
            />
            <Pagination 
                numberOfPages={ numberOfPages } 
                setPage={ setPage } 
                className={ styles.pagination } 
                currentPage={ page }
            />
            <Aside className={ styles.aside }/>
        </div>
    );
}

export default HomePage;