const EditBio = () => {
  return `
  <form class="edit-bio-form">
  <h3>What do you wanna change?</h3>
    <input type="text" id="bioName" placeholder="Name" required/>
    <input type="text" id="bioDescription" placeholder="Description" required/><br>
    <button type="submit">Change</button> 
    <button type="button" class="cancel-edit-bio">Cancel</button> 
  </form>
  `;
};

export default EditBio;
