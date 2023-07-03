import axios from 'axios';
import {useState, useEffect} from 'react';
import ListItem from '../List Item/ListItem';
import styles from './ListView.module.scss'

const ListView = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            console.log('fetch sendo chamada')
            try {
                axios.get('http://localhost:3000/tasks')
                .then(res => setData(res.data))
            }catch(err){
                console.log('Mano, deu esse erro aqui ==> ' + {err})
            }
            
        }
        fetchData()
    }, [])

    return (
        <div className={styles.containertemId}>
            <div className="list">
                <ul>
                    {
                        data.map(task => (
                            <li key={task.id}><ListItem itemId={task.id}>{task.name}</ListItem></li>
                        ))
                    }
                </ul>
            </div>

        </div>
    );
};

export default ListView;