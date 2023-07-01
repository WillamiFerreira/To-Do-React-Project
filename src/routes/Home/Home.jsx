import ListView from '../../components/List View/ListView';
import styles from './Home.module.scss'
import { Outlet } from "react-router-dom";
const Home = () => {
    return (
        <div className={styles.container}>
            <div>
            <h1>Add Task</h1>
            <ListView />
            </div>
            <Outlet />
        </div>
    );
};

export default Home;