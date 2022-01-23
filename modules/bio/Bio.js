import EditBioForm from './EditBio.js'

const Bio = () =>{

 return `
  <section class="bio">
  <div class="profile-photo"><img src="./images/kevin-hart.jfif" alt="profile-photo" /></div>
  <div class="profile-info">
    <p class="name">Jane Butters</p>
    <p class="about">Hi, I'm Jane, i used to be indecisive but now I'm not so sure.</p>
    <button>Edit bio</button>
  </div>
   ${EditBioForm()}
  </section>
`}
  
export default Bio;