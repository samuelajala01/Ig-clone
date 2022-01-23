import Bio from './modules/bio/Bio.js'
import Gallery from './modules/gallery/Gallery.js'
import Nav from './modules/nav/Nav.js'
import { request, addEntryToDb, getEntryFromDb} from './database.js'

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

request.onsuccess = () =>{
  addEntryToDb('bio', {name: 'Jane Butters', description: `Hey,I'm Jane!`})
  getEntryFromDb('bio')
}

const editBioForm = document.querySelector('.edit-bio-form')

editBioForm.addEventListener('submit', (e) =>{
  e.preventDefault();
  const nameInput = document.querySelector('#name').value
  const nameOutput = document.querySelector('.name')
  console.log({nameInput})
  nameOutput.innerText = nameInput
})

const bioName = document.querySelector('#bioName').value
const bioDescription = document.querySelectorAll('#bioDescription').value
editBioForm.addEventListener('submit', () => {
    addEntryToDb('bio', { bioName, bioDescription })
})















