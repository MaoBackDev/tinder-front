import { getRequest } from "./helpers/index.js";

const uuid = localStorage.getItem('uuid') || false;

(async (d) => {
  const nameUser = d.getElementById('name-user')
  if(!uuid) location.href = './index.html'

  try {
    const resultUser = await getRequest(`users/${uuid}`);
    const { user } = resultUser;
    nameUser.textContent = `${user.first_name} ${user.last_name}`
    console.log(user)
  } catch (error) {
    console.log(error.message)
  }



  document.querySelector('button').addEventListener('click', () => {
    localStorage.removeItem('uuid');
    location.reload()
  })
})(document)