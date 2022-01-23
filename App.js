import Bio from './modules/bio/Bio.js'
import addBioEventListeners from './modules/bio/events.js'
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
  addBioEventListeners()
}

const photoInput = document.querySelector('#photoInput');
// photoInput.addEventListener('change', () =>{
//   console.log(photoInput.value)
// })

const addPhotoButton = document.querySelector('.addPhoto')
// addPhoto.addEventListener('click', () =>{
//   document.getElementById('root').innerHTML += SinglePost()
// })











