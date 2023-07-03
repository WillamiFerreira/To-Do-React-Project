import styles from './ListItem.module.scss'
import {Link} from 'react-router-dom';
const ListItem = ({children, itemId}) => {
    return (

        <Link to={`/${itemId}`} >
            <div className={styles.item_ct} >
                {children}
            </div>
        </Link>
    );
};

export default ListItem;