import styles from './TaskDetails.module.scss'
import CircularProgress from '@mui/joy/CircularProgress';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';

import Buttom from '../../components/Buttom/Buttom'
import SelectCategory from '../../components/SelectCategory/SelectCategory';





const TaskDetails = () => {
    const {id} = useParams();
    const [pickedTask, setPickedTask] = useState({});
    const [editedTask, setEditedTask] = useState({});
    const [showProjectForm, setshowProjectForm ] = useState(false);
    const navigate = useNavigate()



     useEffect(()=>{

        const fetchData = async () => {
            try{
                axios.get(`http://localhost:3000/tasks/${id}`)
                .then(res => setPickedTask(res.data))
            }catch(err){
                console.log("Deu erro, meu patrão ==> ", err)
            }
        }
        fetchData()

    }, [id])

    //Atribuindo o valor do primeiro state ao segundo
    useEffect(() =>{
        setEditedTask(pickedTask)
    }, [pickedTask])

    const toggleProjectForm = () =>{
        setshowProjectForm(!showProjectForm)
    }

    const handleInputChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target;
        setEditedTask({...editedTask, [name]: value})
    }

    const editPost = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        try{
            axios.put(`http://localhost:3000/tasks/${id}`, Object.fromEntries(formData) )
            toggleProjectForm()
        } catch(err){
            console.log(err)
        }  

        navigate('/')
    }

    const excluirTask = async (e) => {
        e.preventDefault()
        try{
            axios.delete(`http://localhost:3000/tasks/${id}`)
            .then(res => console.log(res))

        } catch(err){
            console.log("erro ao deletar" + err)
        }

        navigate('/')

    }
    return (
        <div className={styles.container}>

            <Buttom className={styles.comeBack_btn} onClick={() => navigate('/')}>voltar</Buttom>

            
                {pickedTask.id ? ( //verifica se existe a prop "id" na tarefa obtida pela requisição
                    <>
                        <h1>{pickedTask.title}</h1>

                        <div className={styles.task_data_and_buttons}>
                            {
                                !showProjectForm ? (
                                    <div className={styles.task_data}>
                                        <span></span> <div className={styles.desc_ct}>{pickedTask.description}</div>
                                        <h3><span>Status: </span>{pickedTask.status}</h3>
                                        <h3><span>Author: </span>{pickedTask.author}</h3>
                                        <h3><span>Category: </span>{pickedTask.categories}</h3>
                                        <div className={styles.dates}>
                                            <h3><span>Criation date: </span>{pickedTask.data}</h3>
                                            <h3><span>DeadLine: </span>{pickedTask.deadline}</h3>
                                        </div>
                                    </div>
                                ): (
                                    //-------------------------------
                                    //Form de edição ----------------
                                    <div>
                                        <form onSubmit={editPost} >
                                            <label htmlFor="title">Title</label>
                                            <input type="text" id='title' name="title" onChange={handleInputChange} value={editedTask.title || ""} />
                                            <SelectCategory />
                                            <label>Author<input type="text" name="author" onChange={handleInputChange} value={editedTask.author || ""}/></label>
                                            <div>
                                            <p>Status</p>
                                                <label>to-do<input type="radio" name='status' value="to-do" onChange={handleInputChange} checked={ editedTask.status === 'to-do' ? true : false }/></label>
                                                <label>Doing<input type="radio" name='status' value="doing" onChange={handleInputChange} checked={ editedTask.status === 'doing' ? true : false }/></label>
                                                <label>Done<input type="radio" name='status' value="done" onChange={handleInputChange} checked={ editedTask.status === 'done' ? true : false }/></label>
                                            </div>
                                            <label>Deadline<input type="date" name="deadline" onChange={handleInputChange} value={editedTask.deadline}/></label>
                                            <label htmlFor="description">Description</label>
                                            <textarea
                                                name="description"
                                                id="description"
                                                cols="50"
                                                rows="6"
                                                placeholder='Esse campo é opcional'
                                                onChange={handleInputChange}
                                                value={editedTask.description || undefined}
                                             />
                                            <Buttom type='submit' style='editar_btn'>Salvar</Buttom>
                                        </form>
                                    </div>
                                )
                            }
                            <div className={styles.exclui_e_editar_btns_ct}>
                                { !showProjectForm && (
                                        <Buttom onClick={excluirTask}  >
                                            {!showProjectForm ? 'Excluir Task' : 'Fechar'}
                                        </Buttom>
                                )}
                                <Buttom onClick={toggleProjectForm}>
                                    {!showProjectForm ? 'Editar Task' : 'Fechar'}
                                </Buttom>
                            </div>
                        </div>
                    </>
                
                ) : (//Tela com loading //enquando a prop "id" não tiver um valor válido, essa tela é mostrada

                    <div className={styles.progress_screen}>
                        <CircularProgress color="primary" className={styles.progress} />
                    </div>
                )}
        </div>
    );
};

export default TaskDetails;