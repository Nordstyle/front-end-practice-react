import { createSelector } from 'reselect';

const getData = store => store.data;
const getVisibilityFilter = store => store.view;
const getSortNameType = store => store.sortNameType;
const getSortDirection = store => store.sortDirection;

const sortByManyFields = (arr, keys) => {
  return [...arr].sort((a,b) => {
    for (let key of keys) {
      const compared = a[key].localeCompare(b[key]);
      if (compared !== 0 || keys.indexOf(key) === keys.length - 1) return compared;
    }
  })
};

export const getUsersData = createSelector(
  [getData, getSortDirection, getVisibilityFilter, getSortNameType],
  (users,
   direction,
   sortByGroup,
   key) => {
    let sorted = sortByManyFields(users, [sortByGroup, key].filter(Boolean));
    if (direction === 'DESC') sorted.reverse();
    if (sortByGroup) return Object.values(sorted.reduce((a,c) => {
      const group = c.group || 'other';
      if (!a[group]) a[group] = [];
      a[group].push(c);
      return a;
    }, {}));
    return sorted;
  }
);