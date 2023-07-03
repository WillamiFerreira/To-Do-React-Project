import styles from './TaskDetails.module.scss'
import { useParams } from "react-router-dom";


const TaskDetails = () => {
    const {id} = useParams();

    return (
        <div className={styles.container}>
            <h1>TaskDetails</h1>
            <h2>Task de ID {id}</h2>
        </div>
    );
};

export default TaskDetails;