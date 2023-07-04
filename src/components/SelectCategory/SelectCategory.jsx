import{ useState, useEffect } from 'react';
import axios from 'axios';


const SelectCategory = ({onChange, value}) => {
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
        <label> Category
            <select name="categories" onChange={onChange} value={value}>
                {
                    categories.map((category) => (
                        <option key={category.id} value={category.name}>{category.name}</option>
                    ))
                }
            </select>
        </label>
    );
};

export default SelectCategory;