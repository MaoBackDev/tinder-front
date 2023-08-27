import { API_URL, getFormData } from "./helpers/index.js";

const register = async (data) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const json = await response.json()
  return json;
}


(async (d) => {

  const formuserRegister = d.getElementById('form-user-register')
 
  formuserRegister.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = getFormData(e.target);
    console.log(data)
    
    try {
      const resUserregister = await register(data)
      console.log(resUserregister)
    } catch (error) {
      console.log(error)
    }
  })


})(document)