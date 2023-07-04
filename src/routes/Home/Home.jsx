import ListView from '../../components/List View/ListView';
import styles from './Home.module.scss'
import { Outlet, useNavigate } from "react-router-dom";
import Button from '../../components/Buttom/Buttom'
const Home = () => {

    const navgate = useNavigate()
    const toAddNewTaskPage = () => {
        navgate('/addnewtask')
    }
    return (
        <div className={styles.container}>
            <div>
            <Button onClick={toAddNewTaskPage}>Add New Task</Button>
            <ListView />
            </div>
            <Outlet />
        </div>
    );
};

export default Home;