import styles from './Button.module.scss'
const Buttom = ({children, onClick, style, type}) => {
    //On click é sempre uma função.
    return (
        <button className={styles[style]} onClick={onClick} type={type}>{children}</button>
    );
};

export default Buttom;