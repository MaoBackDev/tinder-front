export const API_URL = 'http://localhost:3000/api';

export const getFormData = (form) => {
  const data = Object.fromEntries(
    new FormData(form)
  )
  return data;
}


export const postRequest = async (data, url) => {
  const response = await fetch(`${API_URL}/${url}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const json = await response.json()
  return json;
}

export const putRequest = async (data, url) => {
  const response = await fetch(`${API_URL}/${url}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const json = await response.json()
  return json;
}

export const getRequest = async (url) => {
  const response = await fetch(`${API_URL}/${url}`)
  const json = await response.json()
  return json;
}