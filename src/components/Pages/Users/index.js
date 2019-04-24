import React from 'react';
import { connect } from 'react-redux';
import { fetchUserData } from "../../../store/actions";

import UsersPage from './../../UsersPage';

class Users extends React.Component {
  componentDidMount() {
    this.getData();
  }
  getData() {
    this.props.fetchUserData();
  }
  render() {
    const { isLoading, isError, usersData } = this.props;
    return (
      <UsersPage usersData={ usersData } isLoading={isLoading} />
    )
  }
}

export default connect(
  store => ({ isLoading: store.isLoading, isError: store.isError, usersData: store.data }),
  { fetchUserData }
)(Users);