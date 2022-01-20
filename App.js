import Bio from './modules/bio/Bio.js'
import Gallery from './modules/gallery/Gallery.js'
import Nav from './modules/nav/Nav.js'

const rootDiv = document.getElementById('root')

const request = indexedDB.open('instagram', 1)
request.onsuccess = () => {
  console.log('Success')
}

request.onerror = () => {
  console.log('Error')
}

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













