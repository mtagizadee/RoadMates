import { FC } from 'react';
import { Publication } from '../../types';
import Link from '../Link/Link';
import styles from './PublicationItem.module.scss';

const PublicationItem: FC<Props> = ({ publication }) => {
    return (
        <div className={ styles.container }>
            <header className={ styles.header }> 
                <img src= {require('../../assets/images/1137727.jpg') } alt="profile photo" className={ styles.photo }/>
                <Link className={ styles.nickname } to={ '#' }> Kha </Link>
            </header>
            <section className={ styles.section }> 
                <div className={ styles.contentBox }> 
                    <div className={ styles.content }> 
                        <p className={ styles.main }> 
                            { publication.from } {'-->'} { publication.to } |
                            <span className={ styles.price }> { publication.price }$ </span> 
                        </p> 
                        <p className={ styles.title }> Criteria: </p>
                        <p className={ styles.text }> 
                            { publication.criteria? publication.criteria : 'Nothing here...' } 
                        </p>
                        <p className={ styles.title }> Additional Information: </p> 
                        <p className={ styles.text }> 
                            { publication.additionalInfo? publication.additionalInfo : 'Nothing here...' } 
                        </p> 
                    </div>
                </div>
            </section>
            <footer className={ styles.footer }> <div className={ styles.apply }> </div> </footer>
        </div>
    )
}

type Props = {
    publication: Publication;
}

export default PublicationItem;