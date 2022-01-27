import EditBioForm from "./EditBio.js";
import { getEntryFromDb } from "../../database.js";

const Bio = async () => {
  const userInfo = (await getEntryFromDb("bio")) || [""];
  return `
  <section class="bio">
  <div class="profile-photo"><img src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/></div>
  <div class="profile-info">
    <p class="name">${userInfo[0] ? userInfo[0].bioName : "Update Bio"}</p>
    <p class="about">${userInfo[0] ? userInfo[0].bioDescription : ""}.</p>
    <button class= "edit-bio-button">Edit bio</button>
  </div>
   ${EditBioForm()}
  </section>
`;
};

export default Bio;
