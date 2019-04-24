import React from 'react';
import { connect } from 'react-redux';
import { fetchUserData } from "../../../store/actions";

class Users extends React.Component {
  componentDidMount() {
    this.getData();
    document.title = 'Users list';
  }

  getData() {
    this.props.fetchUserData();
  }
  render() {
    return (
      <div> Users page </div>
    )
  }
}

export default connect(
  store => ({ isLoading: store.isLoading, isError: store.isError, usersData: store.data }),
  { fetchUserData }
)(Users);