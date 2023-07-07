import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
//import FormLabel from '@mui/material/FormLabel';

const RowRadioButtonsGroup = ({values, name, onChangee}) => {


    return (
        <FormControl >
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                <FormControlLabel 
                labelPlacement='top'
                value={values[0]}
                control={<Radio size='small'  />}
                label={values[0]}
                onChange={onChangee} 
                name={name} 
                />

                <FormControlLabel
                labelPlacement='top'
                value={values[1]}
                control={<Radio size='small'  />}
                label={values[1]}
                onChange={onChangee} 
                name={name} 
                />

                <FormControlLabel 
                labelPlacement='top'
                value={values[2]}
                control={<Radio size='small'   />}
                label={values[2]}
                onChange={onChangee} 
                name={name} 
                />

            </RadioGroup>

        </FormControl>
    );
};

export default RowRadioButtonsGroup;