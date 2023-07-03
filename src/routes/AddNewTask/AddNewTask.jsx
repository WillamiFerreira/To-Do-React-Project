import Buttom from '../../components/Buttom/Buttom'
import {useNavigate} from 'react-router-dom'


const AddNewTask = () => {
    const navigate = useNavigate();
    const returnToHome = () =>{

        navigate('/')
    
    }
    return (
        <div>
            <h1>Add New Task</h1>
            <Buttom onClick={returnToHome} style='salvar_btn'>Save task</Buttom>

        </div>
    );
};

export default AddNewTask;