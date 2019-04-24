import React from 'react';
import { connect } from 'react-redux';
import { fetchUserData } from "../../../store/actions";

import UsersPage from './../../UsersPage';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'Free'
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    this.props.fetchUserData();
  }

  handlerCheckbox = (type) => {
    this.setState({
      view: type
    })
  }

  render() {
    const { isLoading, isError, usersData } = this.props;
    const { view } = this.state;
    return (
      <UsersPage usersData={ usersData }
                 isLoading={isLoading}
                 handlerCheckbox={this.handlerCheckbox}
                 view={view}/>
    )
  }
}

export default connect(
  store => ({ isLoading: store.isLoading, isError: store.isError, usersData: store.data }),
  { fetchUserData }
)(Users);