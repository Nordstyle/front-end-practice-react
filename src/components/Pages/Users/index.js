import React from 'react';
import { connect } from 'react-redux';
import { fetchUserData, userDataChangeView, userDataChangeSortType, userDataChangeSortDirection, userDataAddUser } from "../../../store/actions";
import { getUserDataFilteredByDirection } from '../../../store/selectors'

import UsersPage from './../../UsersPage';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    }
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    this.props.fetchUserData();
  }

  handlerCheckbox = (type) => {
    this.props.userDataChangeView(type);
  };

  handlerSortByName = (type) => {
    this.props.userDataChangeSortType(type);
  };

  handlerSortByDirection = (type) => {
    this.props.userDataChangeSortDirection(type);
  };

  handlerAddUser = (user) => {
    this.setState({ modalIsOpen: false });
    this.props.userDataAddUser(user);
  };

  handlerModalToggle = (value) => {
    this.setState({ modalIsOpen: value })
  };

  render() {
    const { isLoading, usersData, view, sortNameType, sortDirection } = this.props;
    return (
      <UsersPage usersData={ usersData }
                 isLoading={isLoading}
                 handlerCheckbox={this.handlerCheckbox}
                 handlerSortByName={this.handlerSortByName}
                 handlerSortByDirection={this.handlerSortByDirection}
                 handlerModalToggle={this.handlerModalToggle}
                 handlerAddUser={this.handlerAddUser}
                 view={view}
                 sortNameType={sortNameType}
                 sortDirection={sortDirection}
                 modalIsOpen={this.state.modalIsOpen}/>
    )
  }
}

export default connect(
  store => ({
    isLoading: store.isLoading,
    isError: store.isError,
    usersData: getUserDataFilteredByDirection(store),
    view: store.view,
    sortNameType: store.sortNameType,
    sortDirection: store.sortDirection
  }),
  { fetchUserData, userDataChangeView, userDataChangeSortType, userDataChangeSortDirection, userDataAddUser }
)(Users);