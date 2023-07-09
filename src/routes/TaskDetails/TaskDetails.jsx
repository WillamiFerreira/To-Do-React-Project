import styles from './TaskDetails.module.scss'
import CircularProgress from '@mui/joy/CircularProgress';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';

import Buttom from '../../components/Buttom/Buttom'
import SelectCategory from '../../components/SelectCategory/SelectCategory';
import TextAreaInput from '../../components/form Fields/TextAreaInput';
import TextInput from '../../components/form Fields/TextInput';
import RowRadioButtonsGroup from '../../components/form Fields/RowRadioButtonsGroup';





const TaskDetails = () => {
    const {id} = useParams();
    const [pickedTask, setPickedTask] = useState({});
    const [editedTask, setEditedTask] = useState({});
    const optionValues = ['to-do', 'doing', 'done']
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

        navigate(`/${id}`)
        window.location.reload();
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
        window.location.reload()

    }
    return (
        <div className={styles.container}>

            <Buttom className={styles.comeBack_btn} onClick={() => navigate('/')}>voltar</Buttom>

            
                {pickedTask.id ? ( //verifica se existe a prop "id" na tarefa obtida pela requisição
                    <>
                        <div className={styles.title_ct}>
                            <h1>{pickedTask.title}</h1>
                        </div>

                        <div className={styles.task_data_and_buttons}>
                            {
                                !showProjectForm ? (
                                    <div className={styles.task_data}>
                                        {/* <span></span> <div className={styles.desc_ct}>{pickedTask.description}</div> */}
                                        <label> <h4>Description: </h4>
                                            <TextAreaInput value={pickedTask.description} disabled='true' />
                                        </label>
                                        {/* <h3><span>Status: </span>{pickedTask.status}</h3> */}
                                        <label> <h4>Status: </h4>
                                            <TextInput value={pickedTask.status} disabled='true'  />
                                        </label>
                                        {/* <h3><span>Author: </span>{pickedTask.author}</h3> */}
                                        <label> <h4>Author: </h4>
                                            <TextInput value={pickedTask.author} disabled='true'  />
                                        </label>
                                        <label> <h4>Category: </h4>
                                            <TextInput value={pickedTask.categories} disabled='true'  />
                                        </label>
                                        <div className={styles.dates}>
                                            {/* <h3><span>Criation date: </span>{pickedTask.data}</h3> */}
                                            <label><h4>Create: </h4>
                                                <TextInput value={pickedTask.data} disabled='true'  />
                                            </label>
                                            {/* <h3><span>DeadLine: </span>{pickedTask.deadline}</h3> */}
                                            <label> <h4>Endline: </h4>
                                                <TextInput value={pickedTask.deadline} disabled='true' />
                                            </label>
                                        </div>
                                    </div>
                                ): (
                                    //-------------------------------
                                    //Form de edição ----------------
                                    <div className={styles.form_ct}  >
                                        <form onSubmit={editPost} >
                                            <label> <h4>Title</h4>
                                                <TextInput 
                                                    type='text'
                                                    name='title'
                                                    value={editedTask.title}
                                                    onChange={handleInputChange} 
                                                />
                                            </label>
                                            <label><h4>Author</h4>
                                                <TextInput
                                                    type="text" 
                                                    name="author" 
                                                    onChange={handleInputChange} 
                                                    value={editedTask.author || ""}
                                                />
                                            </label>

                                            
                                            <label>
                                                <h4>Status</h4>
                                                <RowRadioButtonsGroup
                                                    values={optionValues}
                                                    name='status'
                                                    onChangee={handleInputChange}
                                                />
                                            </label>
                                            
                                            <label><h4>Deadline</h4>
                                                <TextInput
                                                    type="date" 
                                                    name="deadline" 
                                                    onChange={handleInputChange} 
                                                    value={editedTask.deadline}
                                                />
                                            </label>
                                            
                                            <label><h4>Description</h4>
                                            <TextAreaInput
                                                name="description"
                                                onChange={handleInputChange}
                                                value={editedTask.description || undefined}

                                            />
                                            </label>
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