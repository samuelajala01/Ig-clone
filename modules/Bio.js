 const Bio = () =>{
 
 return `
  <section class="bio">
  <div class="profile-photo"><img src="./images/kevin-hart.jfif" alt="profile-photo" /></div>
  <div class="profile-info">
    <p class="name">Samuel Ajala</p>
    <button>Edit bio</button>
  </div>
  <form class="edit-bio-form">
  <input type="text" id="name" placeholder="Name"/>
  <button id='submit' type="submit">Submit</button> 
  </form>
  </section>
`}
  
export default Bio;