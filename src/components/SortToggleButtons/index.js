import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const styles = {
  root: {
    display: 'inline-block'
  }
};

function SortToggleButtons(props) {
  const { classes, handlerSortToggleButtons, sortNameType } = props;
  return (
    <div>
      <Typography variant="caption" gutterBottom>
        Sort by:
      </Typography>
      <ToggleButtonGroup className={classes.root} value={sortNameType} exclusive onChange={ (e,value) => handlerSortToggleButtons(value) }>
        <ToggleButton value="firstName">
          firstname
        </ToggleButton>
        <ToggleButton value="surName">
          surname
        </ToggleButton>
      </ToggleButtonGroup>
    </div>

  )
}

export default withStyles(styles)(SortToggleButtons);