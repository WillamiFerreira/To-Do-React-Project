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
        /*<label> Category
            <select name="categories" onChange={onChange} value={value}>
                {
                    categories.map((category) => (
                        <option key={category.id} value={category.name}>{category.name}</option>
                    ))
                }
            </select>
        </label>*/
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" >{label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                name={name}
                onChange={onChange}
                label={label}

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