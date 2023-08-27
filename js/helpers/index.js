export const API_URL = 'http://localhost:3000/api';

export const getFormData = (form) => {
  const data = Object.fromEntries(
    new FormData(form)
  )
  return data;
}

// const fdata = {
//   first_name: 'el valor',
//   last_name: 'su valor'
// }