function defaultError(message) {
  throw new Error(message);
}

function typeError(message) {
  throw new TypeError(message);
}

function syntaxError(message) {
  throw new SyntaxError(message);
}

function refError(message) {
  throw new ReferenceError(message);
}
