import utils from './../utils';

export const createContact = body => ({
  type: 'CREATE_CONTACT',
  payload: utils.createContact(body)
})

export const deleteContact = id => ({
  type: 'DELETE_CONTACT',
  payload: {id}
})

export const getContact = id => ({
  type: 'GET_CONTACT',
  payload: {id}
})

export const updateContact = body => ({
  type: 'UPDATE_CONTACT',
  payload: body
})


