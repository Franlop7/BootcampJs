import { getPropertyList, postContact } from './property-detail.api';
import { history } from '../../core/router';
import { mapPropertyDetailFromApiToVM } from './property-detail.mappers';
import { setPropertyValues } from './property-detail.helpers';
import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
} from '../../common/helpers';
import { contactFormValidation } from './property-detail.validations';

const params = history.getParams();

getPropertyList(params.id).then((propertyList) => {
  const viewModelPropertyList = mapPropertyDetailFromApiToVM(propertyList);
  setPropertyValues(viewModelPropertyList);
});

let contact = {
  email: '',
  message: '',
};

onUpdateField('email', (event) => {
  const value = event.target.value;
  contact = {
    ...contact,
    email: value,
  };

  contactFormValidation.validateField('email', contact.email).then((result) => {
    onSetError('email', result);
  });
});

onUpdateField('message', (event) => {
  const value = event.target.value;
  contact = {
    ...contact,
    message: value,
  };

  contactFormValidation
    .validateField('message', contact.message)
    .then((result) => {
      onSetError('message', result);
    });
});

onSubmitForm('contact-button', () => {
  contactFormValidation.validateForm(contact).then((result) => {
    onSetFormErrors(result);
    if (result.succeeded) {
      postContact(contact);
    } else {
      alert('Por favor, debe completar todos los campos requeridos.');
    }
  });
});
