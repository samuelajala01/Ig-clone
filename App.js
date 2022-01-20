import Bio from './modules/bio/Bio.js'
import Gallery from './modules/gallery/Gallery.js'
import Nav from './modules/nav/Nav.js'
import {request, addEntryToDB} from './database.js'

const rootDiv = document.getElementById('root')

const App = () =>{
  return `
  ${Nav()}
  <div class="container">
    ${Bio()}
    ${Gallery()}
  </div>
  `
}


rootDiv.innerHTML = App();

const editBioForm = document.querySelector('.edit-bio-form')

editBioForm.addEventListener('submit', (e) =>{
  const nameInput = document.querySelector('#name').value
  const nameOutput = document.querySelector('.name')
  console.log(nameInput)
  nameOutput.innerText = nameInput

  e.preventDefault();
})













