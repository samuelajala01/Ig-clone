import Bio from './modules/Bio.js'
import Gallery from './modules/Gallery.js'
import Nav from './modules/Nav.js'

const App = () =>{
  return `
  ${Nav()}
  <div class="container">
    ${Bio()}
    ${Gallery()}
  </div>
  `
}


document.getElementById('root').innerHTML = App();

const editBioForm = document.querySelector('.edit-bio-form')

editBioForm.addEventListener('submit', (e) =>{
  const nameInput = document.querySelector('#name').value
  const nameOutput = document.querySelector('.name')
  console.log(nameInput)
  nameOutput.innerText = nameInput

  e.preventDefault();
})













