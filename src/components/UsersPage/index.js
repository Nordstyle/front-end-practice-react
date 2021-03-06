import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import CheckboxGroupView from '../CheckboxGroupView';
import TableGrid from '../Table';
import SortToggleButtons from '../SortToggleButtons';
import SimpleButton from '../Button';
import Modal from '../Modal';

import { Wrapper, SidebarWrapper, Content } from './styled';
const styles = {
  paper: {
    width: '100%',
    overflowX: 'auto',
    padding: '20px',
    textAlign: 'center'
  }
};

function UsersPage(props) {
  const { classes, usersData, isLoading, view, handlerCheckbox, handlerSortByName, sortNameType, handlerSortByDirection, sortDirection, handlerAddUser, handlerModalToggle, modalIsOpen } = props;
  return (
    <Wrapper>
      <SidebarWrapper>
        <CheckboxGroupView view={view} handlerCheckbox={handlerCheckbox} />
        <SimpleButton caption='Add user' handlerModalToggle={handlerModalToggle}/>
      </SidebarWrapper>
      <Content>
        <Paper className={classes.paper}>
          <Typography variant="h4" gutterBottom component="h2">
            Users list
          </Typography>
          <SortToggleButtons sortNameType={sortNameType}
                             handlerSortByName={handlerSortByName}
                             sortDirection={sortDirection}
                             handlerSortByDirection={handlerSortByDirection}/>
          { view ? usersData.map((user, idx) => <TableGrid key={idx} usersData={user} isLoading={isLoading} />)
            : <TableGrid usersData={usersData} isLoading={isLoading} /> }
        </Paper>
      </Content>
      { modalIsOpen ? <Modal handlerModalToggle={handlerModalToggle} modalIsOpen={modalIsOpen} handlerAddUser={handlerAddUser} /> : null }
    </Wrapper>
  );
}

export default withStyles(styles)(UsersPage);