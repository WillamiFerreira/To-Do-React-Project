import Textarea from '@mui/joy/Textarea';

const TextAreaInput = ({placeholder}) => {
    return (
        <Textarea placeholder={placeholder} minRows={4} maxRows={4}  />
    );
};

export default TextAreaInput;