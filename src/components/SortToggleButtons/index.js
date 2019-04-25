import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Wrapper, Item } from './styled';

import Typography from '@material-ui/core/Typography';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const styles = {
  root: {
    display: 'inline-block'
  },
  label: {
    textTransform: 'none'
  }
};

function SortToggleButtons(props) {
  const { classes, handlerSortByName, sortNameType, handlerSortByDirection, sortDirection } = props;
  return (
    <Wrapper>
      <Item>
        <Typography variant="caption" gutterBottom>
          Sort by:
        </Typography>
        <ToggleButtonGroup className={classes.root} value={sortNameType} exclusive onChange={ (e,value) => handlerSortByName(value) }>
          <ToggleButton value="firstName">
            firstname
          </ToggleButton>
          <ToggleButton value="surName">
            surname
          </ToggleButton>
        </ToggleButtonGroup>
      </Item>

      <Item>
        <Typography variant="caption" gutterBottom>
          Direction:
        </Typography>
        <ToggleButtonGroup className={classes.root} value={sortDirection} exclusive onChange={ (e,value) => handlerSortByDirection(value) }>
          <ToggleButton className={classes.label} value="DESC">
            A-z
          </ToggleButton>
          <ToggleButton className={classes.label} value="ASC">
            z-A
          </ToggleButton>
        </ToggleButtonGroup>
      </Item>
    </Wrapper>
  )
}

export default withStyles(styles)(SortToggleButtons);