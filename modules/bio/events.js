import { addEntryToDb } from '../../database.js'

const addBioEventListeners = () =>{
  const editBioForm = document.querySelector('.edit-bio-form')
  const editBioButton = document.querySelector('.edit-bio-button')
  const cancelFormButton = document.querySelector('.cancel-edit-bio')

  editBioButton.addEventListener('click', ()=>{
    editBioForm.style.display = 'block'
  })

  editBioForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const bioName = document.querySelector('#bioName').value
    const bioDescription = document.querySelectorAll('#bioDescription').value
    const nameOutput = document.querySelector('.name')
    console.log({bioName})
    nameOutput.innerText = bioName

    addEntryToDb('bio', { bioName, bioDescription })
  })

  cancelFormButton.addEventListener('click', () =>{
    editBioForm.style.display = 'none'
  })
}

export default addBioEventListeners