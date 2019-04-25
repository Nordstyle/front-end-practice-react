/***
 * Преобразуем из объекта в массив для рендеринга
 * @param obj
 * @returns {Array}
 */
const userObjToArr = obj => {
  let resultArr = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      resultArr = [...resultArr, obj[key]]
    }
  }
  return resultArr;
};

const sortByNameType = (data, type) => data.sort((a,b) => a[type].localeCompare(b[type]));
const sortByDirection = (data) => data.reverse();
const sortArrByName = (data, type) => data.map(item => sortByNameType(item, type));
const sortArrByDirection = (data) => data.map(item => sortByDirection(item));

/***
 * Группируем данные пользователей по признаку
 * @param data {Array} - Массив пользователей
 * @returns {Array}
 */
export const userDataSortSign = (data) => {
  const prepareObject = {};
  for (const user of data) {
    if (prepareObject[user.group]) {
      prepareObject[user.group] = [...prepareObject[user.group], user];
    } else {
      prepareObject[user.group] = [user];
    }
  }
  return userObjToArr(prepareObject);
};

export const userDataSortByName = (data, type, filter) => {
  let result = [];
  if (!type) return data;
  if (filter === 'Free') {
    result = sortByNameType(data, type);
  } else {
    result = sortArrByName(data, type, filter);
  }
  return result;
};

export const userDataSortByDirection = (data, type) => {
  let result = [];
  if (!type) return data;
  if (type === 'DESC') {
    result = sortByDirection(data);
  } else {
    result = sortArrByDirection(data);
  }
  return result;
};