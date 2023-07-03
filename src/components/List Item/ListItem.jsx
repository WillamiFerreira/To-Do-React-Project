import styles from './ListItem.module.scss'
import {Link} from 'react-router-dom';
const ListItem = ({children, itemId}) => {

    const toDetails = () =>{
        //console.log(itemId)
    }

    return (

        <Link to={`/${itemId}`} >
            <div className={styles.item_ct} onClick={toDetails}>
                {children}
            </div>
        </Link>
    );
};

export default ListItem;