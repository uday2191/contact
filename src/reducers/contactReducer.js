const initialState = {
    contacts : [],
    loading: false,
    currentContact: {}
}

function guidGenerator() {
  var S4 = function() {
     return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };
  return (S4()+S4()+"");
}

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CREATE_CONTACT':
        let contacts = state.contacts;
        let contact = action.payload.data;
        contact.id = guidGenerator();
        contacts.push(contact);
        return {
          ...state,
          contacts
        }
        break;
    
      case 'DELETE_CONTACT':
        let id = action.payload.id;
        contacts = [];
        state.contacts.forEach( (contact) => {
          if(contact.id !== id) {
            contacts.push(contact);
          }
        });

        return {
          ...state,
          contacts
        }
        
      case 'GET_CONTACT':
        id = action.payload.id;
        let currentContact = {};
        state.contacts.forEach( (contact, index) => {
          if (id == contact.id) {
            currentContact = contact;
          }
        });
        return {
          ...state,
          currentContact
        }

      case 'UPDATE_CONTACT':
        let body = action.payload;
        contacts = [];
        state.contacts.forEach( (contact, index) => {
          if (contact.id == body.id) {
            contacts.push(body)
          }else{
            contacts.push(contact);
          }
        });

        return {
          ...state,
          contacts
        }
      default:
        return state
    }
}

export default contactReducer;