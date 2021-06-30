const regExpDic = {
  email: /^[^ ]+@[^ ]+\.[a-z]{2,3}$/,
  password: /^[0-9a-zA-Z](4,)$/,
};

export function validate(el) {
  const regExpName = el.dataset.required;
  if (!regExpDic[regExpName]) return true;
}
