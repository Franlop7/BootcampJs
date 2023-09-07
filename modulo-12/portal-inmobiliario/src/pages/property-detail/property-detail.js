import {
  getPropertyList,
  postContact,
  getEquipmentsList,
} from './property-detail.api';
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

Promise.all([getPropertyList(params.id), getEquipmentsList()]).then(
  ([propertyList, equipmentsList]) => {
    const viewModelPropertyList = mapPropertyDetailFromApiToVM(
      propertyList,
      equipmentsList
    );
    setPropertyValues(viewModelPropertyList);
  }
);

// aqui solo hace una promesa, faltaria hacer lo mismo para el equipmentsList y arriba las hace todas a la vez
//   getPropertyList(params.id).then((propertyList) => {
//   const viewModelPropertyList = mapPropertyDetailFromApiToVM(propertyList);
//   setPropertyValues(viewModelPropertyList);
// });

let formData = {
  email: '',
  message: '',
};

onUpdateField('email', (event) => {
  const value = event.target.value;
  formData = {
    ...formData,
    email: value,
  };

  contactFormValidation
    .validateField('email', formData.email)
    .then((result) => {
      onSetError('email', result);
    });
});

onUpdateField('message', (event) => {
  const value = event.target.value;
  formData = {
    ...formData,
    message: value,
  };

  contactFormValidation
    .validateField('message', formData.message)
    .then((result) => {
      onSetError('message', result);
    });
});

onSubmitForm('contact-button', () => {
  contactFormValidation.validateForm(formData).then((result) => {
    onSetFormErrors(result);
    if (result.succeeded) {
      postContact(formData);
    } else {
      alert('Por favor, debe completar todos los campos requeridos.');
    }
  });
});
