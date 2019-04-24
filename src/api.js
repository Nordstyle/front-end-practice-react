const getJSON = url => fetch(url)
  .then(resp => {
    if (resp.status !== 200) throw new Error(resp.statusText)
    return resp;
  })
  .then(r => r.json());

export const getUsersData = () => getJSON('http://www.json-generator.com/api/json/get/cfltKrrdDS?indent=2');