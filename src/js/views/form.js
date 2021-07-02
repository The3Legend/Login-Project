export function inputErrorTemplate(msg){
  return `
  <div class="invalid-feedback">${msg}</div>
  `;
}

export function showInputError(el){
  const parent = el.parentElement;
  const msg = el.dataset.invalidMassage || 'Invalid input'
  const templata = inputErrorTemplate(msg);
  el.classList.add('is-invalid');
  parent.insertAdjacentHTML('beforeend',templata)
}
