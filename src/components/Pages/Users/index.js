import React from 'react';
import { connect } from 'react-redux';
import { fetchUserData, userDataChangeView, userDataChangeSortType } from "../../../store/actions";
import { getUserDataFilteredByName } from '../../../store/selectors'

import UsersPage from './../../UsersPage';

class Users extends React.Component {
  componentDidMount() {
    this.getData();
  }

  getData() {
    this.props.fetchUserData();
  }

  handlerCheckbox = (type) => {
    this.props.userDataChangeView(type);
  };

  handlerSortToggleButtons = (type) => {
    this.props.userDataChangeSortType(type);
  };

  render() {
    const { isLoading, usersData, view, sortNameType } = this.props;
    return (
      <UsersPage usersData={ usersData }
                 isLoading={isLoading}
                 handlerCheckbox={this.handlerCheckbox}
                 handlerSortToggleButtons={this.handlerSortToggleButtons}
                 view={view}
                 sortNameType={sortNameType}/>
    )
  }
}

export default connect(
  store => ({
    isLoading: store.isLoading,
    isError: store.isError,
    usersData: getUserDataFilteredByName(store),
    view: store.view,
    sortNameType: store.sortNameType
  }),
  { fetchUserData, userDataChangeView, userDataChangeSortType }
)(Users);