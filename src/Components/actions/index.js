export const GET_ALL_CONTACTS = 'GET_ALL_CONTACTS';
export const CREATE_NEW_CONTACT = 'CREATE_NEW_CONTACT';

export const createContact = (contact) => {
    return {
      type: CREATE_NEW_CONTACT,
      contact: contact
    }
  };