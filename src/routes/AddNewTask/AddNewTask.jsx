import Buttom from '../../components/Buttom/Buttom'
import {useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import styles from './AddNewTask.module.scss'


const AddNewTask = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [categories, setCategories] = useState([]);
    //const [newTask, setNewTask] = useState({});

    useEffect (() => {
        const fetchData = async () => {
            try{
                axios.get('http://localhost:3000/tasks')
                .then(res => setCategories(res.data[0].categories))
            } catch(err){
                console.log(err)
            }
        }
        fetchData()
        console.log(categories)
    }, [])

    const returnToHome = () =>{

        navigate('/')
    
    }
    return (
        <div className={styles.container}>
            <div className={styles.form_ct}>
                <h1>
                    {!title ? "Task Name" : title}
                </h1>
                <form>
                    <div>
                        <div className={styles.inputs_ct}>
                            <div className={styles.title_ct}>
                                <label htmlFor="title">Title</label>
                                <input onChange={(e) => setTitle(e.target.value)} type="text" id='title' />
                            </div>
                            <div className={styles.other_inputs}>
                                <label htmlFor="">Category
                                    <select name="" id="">
                                        {
                                            categories.map((categorie) => (
                                                <option key={categorie.id}>{categorie.name}</option>
                                            ))
                                        }
                                    </select>
                                </label>
                                <label htmlFor="">Author<input type="text" /></label>
                                <label htmlFor="">Status<input type="text" /></label>
                                <label htmlFor="">Endline<input type="date"/></label>
                            </div>
                        </div>
                        <div className={styles.text_area_ct}>
                            <label htmlFor="description">Description</label>
                            <textarea name="" id="description" cols="20" rows="10" placeholder='Esse campo é opcional'>
                            </textarea>
                        </div>
                    </div>
                <Buttom onClick={returnToHome} style='salvar_btn'>Save task</Buttom>
                </form>
            </div>

        </div>
    );
};

export default AddNewTask;