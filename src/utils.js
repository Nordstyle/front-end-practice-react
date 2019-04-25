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

