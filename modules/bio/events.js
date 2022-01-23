import { addEntryToDb } from '../../database.js'

const addBioEventListeners = () =>{
  const editBioForm = document.querySelector('.edit-bio-form')

editBioForm.addEventListener('submit', (e) =>{
  e.preventDefault();
  const bioName = document.querySelector('#bioName').value
const bioDescription = document.querySelectorAll('#bioDescription').value
  const nameOutput = document.querySelector('.name')
  console.log({bioName})
  nameOutput.innerText = bioName

  addEntryToDb('bio', { bioName, bioDescription })
})
}

export default addBioEventListeners