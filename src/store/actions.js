import { FETCH_USERDATA_REQUEST, FETCH_USERDATA_FAILED, FETCH_USERDATA_SUCCESS, USERDATA_CHANGE_VIEW } from './constants';
import { getUsersData } from './../api';

export const fetchUserData = () => dispatch => {
  dispatch({ type: FETCH_USERDATA_REQUEST });
  getUsersData()
    .then(data => {
      if (!data || data.error) {
        return dispatch({ type: FETCH_USERDATA_FAILED })
      }
      dispatch({ type: FETCH_USERDATA_SUCCESS, payload: data })
    })
    .catch(err => { dispatch({ type: FETCH_USERDATA_FAILED, payload: err })})
};

export const userDataChangeView = view => dispatch => {
  dispatch({ type: USERDATA_CHANGE_VIEW, payload: view })
};