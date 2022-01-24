import EditBioForm from './EditBio.js'
import { getEntryFromDb } from '../../database.js'

const Bio = async () =>{
   const userInfo = await getEntryFromDb('bio')
   console.log(userInfo)
 return `
  <section class="bio">
  <div class="profile-photo"><img src="./images/kevin-hart.jfif" alt="profile-photo" /></div>
  <div class="profile-info">
    <p class="name">${userInfo[0].bioName}</p>
    <p class="about">${userInfo[0].bioDescription}.</p>
    <button class= "edit-bio-button">Edit bio</button>
  </div>
   ${EditBioForm()}
  </section>
`}
  
export default Bio;