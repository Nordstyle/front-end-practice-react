import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import CheckboxGroupView from '../CheckboxGroupView';
import TableGrid from '../Table';

import { Wrapper, SidebarWrapper, Content } from './styled';
const styles = {
  paper: {
    padding: '20px',
    textAlign: 'center'
  }
};

function UsersPage(props) {
  const { classes, usersData, isLoading, view, handlerCheckbox } = props;
  return (
    <Wrapper>
      <SidebarWrapper>
        <CheckboxGroupView view={view} handlerCheckbox={handlerCheckbox} />
      </SidebarWrapper>
      <Content>
        <Paper className={classes.paper}>
          <Typography variant="h4" gutterBottom component="h2">
            Users list
          </Typography>
          <TableGrid usersData={usersData} isLoading={isLoading} />
        </Paper>
      </Content>
    </Wrapper>
  );
}

export default withStyles(styles)(UsersPage);