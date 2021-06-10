import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const ColorCheckbox = withStyles({
    root: {
        marginLeft: 45,
        width: 54,
        fontFamily: 'SF UI Display',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 19,
        color: 'grey',
        '&$checked': {
        color: '#CF9E1F',
    },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function CheckboxLabels() {
    const [state, setState] = React.useState({
        checkedA: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <FormGroup column>
            <FormControlLabel
                control={<ColorCheckbox checked={state.checkedA}
                onChange={handleChange}
                name="checkedA" />}
                label="100 мл"
        />
            <FormControlLabel
                control={<ColorCheckbox checked={state.checkedB}
                onChange={handleChange}
                name="checkedB" />}
                label="200 мл"
            />
            <FormControlLabel
                control={<ColorCheckbox checked={state.checkedC}
                onChange={handleChange}
                name="checkedC" />}
                label="300 мл"
            />
        </FormGroup>
    );
}
