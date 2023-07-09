import Textarea from '@mui/joy/Textarea';

const TextAreaInput = ({placeholder, value, onChange, name, disabled}) => {
    return (
        <Textarea 
            placeholder={placeholder} 
            minRows={4} 
            maxRows={4} 
            value={value} 
            onChange={onChange}
            name={name}
            disabled={disabled}
            variant='outlined'
            size='lg'
            
        />
    );
};

export default TextAreaInput;