function getAttr(node, prop) {
  if (isString(node)) node = getNode(node);

  if (!isString(prop)) typeError('getAttr 함수에 전달된 두 번쨰 인수는 문자 타입이어야 한다.');

  return node.getAttribute(prop);
}

function setAttr(node, prop, value) {
  if (isString(node)) node = getNode(node);
  if (!isString(prop)) typeError('setAttr 함수에 전달된 두 번째 인수는 문자 타입이어야 한다.');

  if (isUndefined(value) || value === '') {
    node.removeAttribute(prop);
    return;
  }

  if (prop.startsWith('data-')) {
    prop = prop.slice(5);

    node.dataset[prop] = value;
    return;
  }

  node.setAttribute(prop, value);
}

const attrs = (node, prop, value) => (!value ? getAttr(node, prop) : setAttr(node, prop, value));
