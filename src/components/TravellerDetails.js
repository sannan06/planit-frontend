import React, { Component } from 'react'
import { TextField, Select } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
})(props => <Checkbox color="default" {...props} />);

export default class TravellerDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row" style={{margin:'1rem 0 1rem 0'}}>
                    <div className="col-4">
                        <TextField label="Age" style={{width:'100%'}}/>
                    </div>
                    <div className="col-4">
                    <FormControl style={{width:'100%'}}>
                        <InputLabel htmlFor="age-native-simple">Gender</InputLabel>
                        <Select
                        native
                        inputProps={{
                            name: 'Gender',
                            id: 'age-native-simple',
                        }}
                        >
                        <option value={10}>Male</option>
                        <option value={20}>Female</option>
                        <option value={30}>Other</option>
                        </Select>
                    </FormControl>
                    </div>
                    <div className="col-4">
                    <FormControlLabel
                        control={
                        <GreenCheckbox value="checkedA" />
                        }
                        label="Disability"
                        style={{width:'100%'}}
                    />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
