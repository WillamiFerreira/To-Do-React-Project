import styles from './TaskDetails.module.scss'
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';

import Buttom from '../../components/Buttom/Buttom'





const TaskDetails = () => {
    const {id} = useParams();
    const [pickedTask, setPickedTask] = useState({});
    //const [editedTask, setEditedTask] = useState({});
    const [showProjectForm, setshowProjectForm ] = useState(false);

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

    const toggleProjectForm = () =>{
        setshowProjectForm(!showProjectForm)
    }



    return (
        <div className={styles.container}>
            {
                pickedTask.title ? (
                    <div>
                        <h1>{pickedTask.title}</h1>
                        {
                            !showProjectForm ? (
                                <div>
                                    <h3><span>Status: </span>{pickedTask.status}</h3>
                                    <h3><span>Author: </span>{pickedTask.author}</h3>
                                    <h3><span>Category: </span>{pickedTask.categories}</h3>
                                    <h3><span>DeadLine: </span>{pickedTask.deadline}</h3>
                                    <span>Description:</span> {pickedTask.description}

                                </div>
                            ): (
                                <div>
                                    <form >


                                        <Buttom type='submit' style='editar_btn'>Salvar</Buttom>
                                    </form>
                                </div>
                            )
                        }
                        <button onClick={toggleProjectForm}>
                            {
                                !showProjectForm ? 'Editar Projeto' : 'Fechar'
                            }
                        </button>
                    </div>

                ) : (
                    <p>Loading</p>
                )
            }
        </div>
    );
};

export default TaskDetails;