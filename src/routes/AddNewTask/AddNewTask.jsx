import styles from './AddNewTask.module.scss'
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import RowRadioButtonsGroup from '../../components/form Fields/RowRadioButtonsGroup';
import SelectCategory from '../../components/SelectCategory/SelectCategory';
import TextAreaInput from '../../components/form Fields/TextAreaInput';
import TextInput from '../../components/form Fields/TextInput';
import Buttom from '../../components/Buttom/Buttom'


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

                            <label>
                                <h4>Title</h4>
                                <TextInput
                                    id="outlined-basic"
                                    name='title'
                                    label='Title'
                                    variant="outlined"
                                    onChange={handleInputChange}
                                    value={formValues.title || ""}
                                />
                            </label>
                            
                           
                            <label>
                                <h4>Category</h4>
                                <SelectCategory
                                    name="categories"
                                    label='Category'
                                    onChange={handleInputChange}
                                    value={formValues.categories || ""}
                                />
                            </label>

                            <label>
                                <h4>Author</h4>
                                <TextInput
                                id="outlined-basic"
                                label="Author"
                                name="author"
                                variant="outlined"
                                onChange={handleInputChange}
                                value={formValues.author || ""}
                                />
                            </label>

                            <label>
                                <h4>Status</h4>
                                <RowRadioButtonsGroup
                                values={optionValues}
                                name="status"
                                onChange={handleInputChange}
                                />
                            </label>

                            <label>
                                <h4>Deadline</h4>
                                <TextInput
                                id="date-input"
                                type='date'
                                label="Deadline"
                                name="deadline"
                                onChange={handleInputChange}
                                value={formValues.deadline}
                                />
                            </label>

                        </div>

                        <div className={styles.text_area_ct}>
                            <label><h4>Description</h4>

                            <TextAreaInput
                            placeholder="Campo Opcional"
                            name="description"
                            onChange={handleInputChange} 
                            value={formValues.description || undefined}
                            />
                            </label>
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