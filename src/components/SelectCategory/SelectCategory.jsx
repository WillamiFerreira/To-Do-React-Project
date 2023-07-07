import{ useState, useEffect } from 'react';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const SelectCategory = ({onChange, value, label, name}) => {
    const [categories, setCategories] = useState([]);
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
    }, [])

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label"></InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                name={name}
                onChange={onChange}
                size='small'
                variant='outlined'
                margin='dense'

            >
                {
                    categories.map((category)=>(
                        <MenuItem key={category.id} value={category.name}>{category.name}</MenuItem>
                    ))
                }

            </Select>
        </FormControl>
    );
};

export default SelectCategory;