import styles from './Button.module.scss'
const Buttom = ({children, onClick, style}) => {
    //On click é sempre uma função.
    return (
        <button className={styles[style]} onClick={onClick}>{children}</button>
    );
};

export default Buttom;