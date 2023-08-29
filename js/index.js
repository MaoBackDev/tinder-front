import { API_URL, getFormData, postRequest } from "./helpers/index.js";

(async (d) => {
  const formUserRegister = d.getElementById('form-user-register');
  const formCompanyRegister = d.getElementById('form-company-register');
  const formLogin = d.getElementById('form-login');
 
  formUserRegister.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = getFormData(e.target);
    
    try {
      const result = await postRequest(data, 'auth/register')
    } catch (error) {
      console.log(error)
    }
  })

  formCompanyRegister.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = getFormData(e.target);
    
    try {
      const result = await postRequest(data, 'auth/register/company')
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  })

  formLogin.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = getFormData(e.target);
    
    try {
      const result = await postRequest(data, 'auth/login');
      localStorage.setItem('uuid', result.uuid);
      data.type === 'user' ? location.href = './profile.html' : location.href = './company.html'

    } catch (error) {
      console.log(error)
    }
  })
})(document)