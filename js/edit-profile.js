import { getFormData, getRequest, postRequest, putRequest } from "./helpers/index.js";

const uuid = localStorage.getItem('uuid') || false;

const drawSkills = (array = []) => {

  let skills = array.map(skill => `
    <span class="rounded-pill">${skill.name}</span>
  `)

  skills = skills.join('')
  return skills
}




(async (d) => {
  const formEdit = d.getElementById('form-edit')
  const formSkill = d.getElementById('form-skill')
  const containerSkills = d.getElementById('container-skills')
  if(!uuid) location.href = './index.html';

  try {
    const resultUser = await getRequest(`users/${uuid}`);
    const { user } = resultUser;
    const skills = user.Skills;
    
    d.getElementById('price_service').value = user.price_service;
    d.getElementById('fullname').textContent = `${user.first_name} ${user.last_name}`;
    d.getElementById('profile').value = user.profile;
    d.getElementById('city').value = user.city;

    containerSkills.innerHTML = drawSkills(skills)

    console.log(user)
  } catch (error) {
    console.log(error.message)
  }

  formEdit.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = getFormData(e.target);
    try {
      const response = await putRequest(data, `users/update/${uuid}`)
      console.log(response)
    } catch (error) {
      console.log(error.message)
    }
  })

  formSkill.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = getFormData(e.target);
    try {
      const response = await postRequest(data, `users/add/skills/${uuid}`)
      console.log(response)
    } catch (error) {
      console.log(error.message)
    }
  })

})(document)