import TextField from '@mui/material/TextField'

const TextInput = ({id, name, onChange, value, type}) => {
    return (
        <TextField 
            id={id || "filled-basic"}
            size='small'
            fullWidth
            name={name} 
            type={type}
            variant="outlined" 
            onChange={onChange}
            value={value} autoComplete='off' />

    );
};

export default TextInput;