import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationSchema = {
  field: {
    email: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.email,
        message: 'Introduce un email válido',
      },
    ],
    message: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
  },
};

export const contactFormValidation = createFormValidation(validationSchema);
