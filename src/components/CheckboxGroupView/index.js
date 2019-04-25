import React from 'react';

import { withStyles } from "@material-ui/core";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = {
  radioGroup: {
    flexDirection: 'row'
  }
};

function CheckboxGroupView(props) {
  const { classes, handlerCheckbox, view } = props;
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">View:</FormLabel>
      <RadioGroup aria-label="View"
                  name="View"
                  className={classes.radioGroup}
                  value={view}
                  onChange={(e, type) => handlerCheckbox(type)}>
        <FormControlLabel value={''} control={<Radio color="primary" />} label="Free" />
        <FormControlLabel value={'group'} control={<Radio color="primary" />} label="Group" />
      </RadioGroup>
    </FormControl>
  );
}

export default withStyles(styles)(CheckboxGroupView);