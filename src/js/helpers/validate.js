const regExpDic = {
  email: /^[^ ]+@[^ ]+\.[a-z]{2,3}$/,
  password: /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{4,}$/,
};

export function validate(el) {
  const regExpName = el.dataset.required;
  console.log(regExpName)
}
