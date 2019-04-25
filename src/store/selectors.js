import { createSelector } from 'reselect';
import { userDataSortSign, userDataSortByName } from './../utils';

const getUsersData = store => store.data;
const getVisibilityFilter = store => store.view;
const getSortNameType = store => store.sortNameType;

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

export const getUserDataFilteredByName = createSelector(
  [getUserData, getSortNameType, getVisibilityFilter],
  (usersData, nameType, visibilityFilter) => {
    switch (nameType) {
      case 'firstName':
      case 'surName':
        return userDataSortByName(usersData, nameType, visibilityFilter);
      default: return usersData;
    }
  }
);