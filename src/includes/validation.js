import {
  defineRule, Field as VeeField, Form as VeeForm, ErrorMessage,
} from 'vee-validate';
import {
  required, min, max, alpha_spaces as alphaSpaces, email,
  min_value as minVal, max_value as maxVal, confirmed,
} from '@vee-validate/rules';

export default {
  install(app) {
    app.component('VeeField', VeeField);
    app.component('VeeForm', VeeForm);
    app.component('ErrorMessage', ErrorMessage);

    defineRule('required', required);
    defineRule('min', min);
    defineRule('max', max);
    defineRule('alphaSpaces', alphaSpaces);
    defineRule('email', email);
    defineRule('minVal', minVal);
    defineRule('maxVal', maxVal);
    defineRule('confirmed', confirmed);
  },
};
