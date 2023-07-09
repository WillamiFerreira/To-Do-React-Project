import Button from '@material-ui/core/Button';
import styles from './Button.module.scss'
const Buttom = ({className, children, onClick, type}) => {
    //On click é sempre uma função.
    return (
        <Button 
        className={className} 
        variant="contained"  
        type={type} 
        onClick={onClick}
        >
        {children}
        </Button>
        //<button className={styles[style]} onClick={onClick} type={type}>{children}</button>
    );
};

export default Buttom;