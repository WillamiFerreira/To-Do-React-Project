import Buttom from '../../components/Buttom/Buttom'
import SelectCategory from '../../components/SelectCategory/SelectCategory';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';



import styles from './AddNewTask.module.scss'


const AddNewTask = () => {
    const navigate = useNavigate();
    //const [categories, setCategories] = useState([]);
    const defaultInputValues = {
        "status": "to-do",
    }
    const [formValues, setFormValues] = useState({...defaultInputValues});


    //chamando as categorias do JSON------------------------
    /*useEffect (() => {
        const fetchData = async () => {
            try{
                axios.get('http://localhost:3000/tasks')
                .then(res => setCategories(res.data[0].categories))
            } catch(err){
                console.log(err)
            }
        }
        fetchData()
    }, [])*/

    /*--------------------------------------*/

    //Função que constroi o objeto
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value})

    }

    //Enviando a task criada para o BD -----------------

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        try{
            axios.post('http://localhost:3000/tasks', Object.fromEntries(formData))
        } catch(err){
            console.log('A porra do erro =>' + {err})
        }
        navigate('/')
    }
    //console.log(formValues)

    return (
        <div className={styles.container}>
            <div className={styles.form_ct}>
                <h1>
                    {!formValues.title ? "Task Name" : formValues.title}
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <div className={styles.inputs_ct}>

                            <div className={styles.title_ct}>
                                <label htmlFor="title">Title</label>
                                <input type="text" id='title' name="title" onChange={handleInputChange} value={formValues.title || ""}   />
                            </div>

                            <div className={styles.other_inputs}>
                                    <SelectCategory onChange={handleInputChange} value={formValues.categories || ""} />
                                

                                    <label>Author<input type="text" name="author" onChange={handleInputChange} value={formValues.author || ""}/></label>

                                    <div className={styles.radios}>
                                        <p>Status</p>
                                        <label>to-do<input type="radio" name='status' value="to-do" onChange={handleInputChange}/></label>
                                        <label>Doing<input type="radio" name='status' value="doing" onChange={handleInputChange}/></label>
                                        <label>Done<input type="radio" name='status' value="done" onChange={handleInputChange}/></label>
                                    </div>
                                    <label>Deadline<input type="date" name="deadline" onChange={handleInputChange} value={formValues.deadline}/></label>
                                
                            </div>

                        </div>

                        <div className={styles.text_area_ct}>
                            <label htmlFor="description">Description</label>

                            <textarea 
                            name="description" 
                            id="description" 
                            cols="20" 
                            rows="10" 
                            placeholder='Esse campo é opcional'
                            onChange={handleInputChange}
                            value={formValues.description || undefined}

                            >
                            </textarea>
                        </div>
                    </div>
                    <div className={styles.save_task_btn_ct}>
                        <Buttom onClick={() => navigate('/')}>Voltar</Buttom>
                        <Buttom type='submit'>Save task</Buttom>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddNewTask;