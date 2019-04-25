import { createSelector } from 'reselect';
import { userDataSortSign } from './../utils';

const getUsersData = store => store.data;
const getVisibilityFilter = store => store.view;

export const getUserData = createSelector(
  [getUsersData, getVisibilityFilter],
  (usersData, visibilityFilter) => {
    switch (visibilityFilter) {
      case 'Free': return usersData;
      case 'Group': return userDataSortSign(usersData);
      default: return usersData;
    }
  }
);