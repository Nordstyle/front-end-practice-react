import React from 'react';
import { connect } from 'react-redux';
import { fetchUserData, userDataChangeView } from "../../../store/actions";
import { getUserData } from '../../../store/selectors'

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

  render() {
    const { isLoading, usersData, view } = this.props;
    return (
      <UsersPage usersData={ usersData }
                 isLoading={isLoading}
                 handlerCheckbox={this.handlerCheckbox}
                 view={view}/>
    )
  }
}

export default connect(
  store => ({ isLoading: store.isLoading, isError: store.isError, usersData: getUserData(store), view: store.view }),
  { fetchUserData, userDataChangeView }
)(Users);