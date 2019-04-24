import React from 'react';

import { withStyles } from "@material-ui/core";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = {
  radioGroup: {
    flexDirection: 'row'
  }
};

function CheckboxGroupView(props) {
  const { classes } = props;
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">View:</FormLabel>
      <RadioGroup aria-label="View"
                  name="View"
                  className={classes.radioGroup}
                  // value={}
                  //onChange={this.handleChange}
        >
        <FormControlLabel value="Free" control={<Radio color="primary" />} label="Free" />
        <FormControlLabel value="Group" control={<Radio color="primary" />} label="Group" />
      </RadioGroup>
    </FormControl>
  );
}

export default withStyles(styles)(CheckboxGroupView);