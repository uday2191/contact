import utils from './../utils';

export const getUsers = text => ({
  type: 'GET_USERS',
  payload: utils.getUsers(text).then(res=>res.data)
})