import Buttom from '../../components/Buttom/Buttom'
import SelectCategory from '../../components/SelectCategory/SelectCategory';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import TextInput from '../../components/form Fields/TextInput';

import styles from './AddNewTask.module.scss'
import RowRadioButtonsGroup from '../../components/form Fields/RowRadioButtonsGroup';
import TextAreaInput from '../../components/form Fields/TextAreaInput';


const AddNewTask = () => {
    const navigate = useNavigate();
    const defaultInputValues = {
        "status": "to-do",
    }
    const [formValues, setFormValues] = useState({...defaultInputValues});
    //const [deadLine, SetDeadline] = useState('');
    const optionValues = ['to-do', 'doing', 'done']

    /*--------------------------------------*/

    //Função que constroi o objeto
    const handleInputChange = (e) => {
        console.log(e)
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value})

    }

    //console.log(deadLine)

    //console.log(formValues)

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

    console.log(formValues)

    return (
        <div className={styles.container}>
            <div className={styles.form_ct}>
                <h1>
                    {!formValues.title ? "Task Name" : formValues.title}
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <div className={styles.inputs_ct}>
                            {/*--------------- Title Imput */}

                            {/*<div className={styles.title_ct}>
                                <label htmlFor="title">Title</label>
                                <input type="text" id='title' name="title" onChange={handleInputChange} value={formValues.title || ""}   />
                            </div>*/}
                            <TextInput id="outlined-basic" label='Title' name='title' variant="outlined" onChange={handleInputChange} value={formValues.title || ""} />

                            <div className={styles.other_inputs}>
                                <SelectCategory onChange={handleInputChange} value={formValues.categories || ""} label='Category' name="categories" />
                                <TextInput id="outlined-basic" label="Author" name="author" variant="filled" onChange={handleInputChange} value={formValues.author || ""} />
                                {/*--------------- status */}
                                {/*<div className={styles.radios}>
                                    <p>Status</p>
                                    <label>to-do<input type="radio" name='status' value="to-do" onChange={handleInputChange}/></label>
                                    <label>Doing<input type="radio" name='status' value="doing" onChange={handleInputChange}/></label>
                                    <label>Done<input type="radio" name='status' value="done" onChange={handleInputChange}/></label>
                                </div>*/}

                                <RowRadioButtonsGroup values={optionValues} label='Status' onChange={handleInputChange} name="status"  />
                                {/*Deadline ---------------- */}
                                {/*<label>Deadline<input type="date" name="deadline" onChange={handleInputChange} value={formValues.deadline}/></label>*/}
                                <TextInput id="date-input" type='date' label="Deadline" name="deadline" value={formValues.deadline} onChange={handleInputChange} />
                            </div>

                        </div>

                        <div className={styles.text_area_ct}>
                            <label htmlFor="description">Description</label>

                            {/*<textarea 
                            name="description" 
                            id="description" 
                            cols="20" 
                            rows="10" 
                            placeholder='Esse campo é opcional'
                            onChange={handleInputChange}
                            value={formValues.description || undefined}

                            >
                            </textarea>
                            */}
                            <TextAreaInput placeholder="Campo Opcional" />
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