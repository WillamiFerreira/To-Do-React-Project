import TextField from '@mui/material/TextField'

const TextInput = ({id, label, name, onChange, value, type}) => {
    return (
        <TextField 
            id={id || "outlined-basic"} 
            label={label} 
            name={name} 
            type={type}
            variant="filled" 
            onChange={onChange} 
            value={value} autoComplete='off' />

    );
};

export default TextInput;