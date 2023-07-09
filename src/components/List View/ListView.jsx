import axios from 'axios';
import {useState, useEffect} from 'react';
import ListItem from '../List Item/ListItem';
import styles from './ListView.module.scss'

const uri = 'https://api-todo-list-ty31.onrender.com';

const ListView = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                axios.get(`${uri}/tasks`)
                .then(res => setData(res.data))
            }catch(err){
                console.log('Mano, deu esse erro aqui ==> ' + {err})
            }
            
        }
        fetchData()
    }, [])

    

    return (
        <div className={styles.container}>
            <div className={styles.list}>
                <ul>
                    {data.map(task => (
                        <li 
                        key={task.id}>
                            <ListItem itemId={task.id}>{task.title}</ListItem>
                        </li>

                    ))}
                </ul>
            </div>

        </div>
    );
};

export default ListView;