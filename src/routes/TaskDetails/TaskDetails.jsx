import styles from './TaskDetails.module.scss'
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';





const TaskDetails = () => {
    const {id} = useParams();
    const [pickedTask, setPickedTask] = useState({});
    const [editedTask, setEditedTask] = useState({});

    useEffect(()=>{
        const fetchData = async () => {
            try{
                axios.get(`http://localhost:3000/tasks/${id}`)
                .then(res => setPickedTask(res.data));
            }catch(err){
                console.log("Deu erro, meu patrão ==> ", err)
            }
        }
        fetchData()
    }, [id])

    console.log(pickedTask)



    return (
        <div className={styles.container}>
            <form>
                <input type="text" value={pickedTask.title} contentEditable='true' />
            </form>
        </div>
    );
};

export default TaskDetails;