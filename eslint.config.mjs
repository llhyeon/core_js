import globals from 'globals';
import pluginJs from '@eslint/js';

const type = {
  isObject: true,
  isArray: true,
  isString: true,
  isNumber: true,
  isNull: true,
  isUndefined: true,
  isFunction: true,
};

const dom = {
  getNode: true,
  getAttr: true,
  setAttr: true,
  attrs: true,
  insertBefore: true,
  insertFirst: true,
  insertLast: true,
  insertAfter: true,
  getCss: true,
  setCss: true,
  css: true,
  addClass: true,
  removeClass: true,
  toggleClass: true,
  clearContents: true,
};

const error = {
  defaultError: true,
  typeError: true,
  syntaxError: true,
  refError: true,
};

export default [
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...type,
        ...dom,
        ...error,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
    },
  },
];
