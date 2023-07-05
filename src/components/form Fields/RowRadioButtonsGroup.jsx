import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const RowRadioButtonsGroup = ({values, label, name, onChange}) => {

    return (
        <FormControl >
            <FormLabel id="demo-row-radio-buttons-group-label">{label}</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                <FormControlLabel value={values[0]} control={<Radio />} label={values[0]} onChange={onChange} name={name}  />
                <FormControlLabel value={values[1]} control={<Radio />} label={values[1]} onChange={onChange} name={name} />
                <FormControlLabel value={values[2]} control={<Radio />} label={values[2]} onChange={onChange} name={name} />
            </RadioGroup>

        </FormControl>
    );
};

export default RowRadioButtonsGroup;