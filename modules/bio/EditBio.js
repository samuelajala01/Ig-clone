const EditBio = () => {
  return `
  <form class="edit-bio-form">
    <input type="text" id="bioName" placeholder="Name" required/>
    <input type="text" id="bioDescription" placeholder="Description" required/><br>
    <button type="submit">Submit</button> 
    <button type="button" class="cancel-edit-bio">Cancel</button> 
  </form>
  `
}

export default EditBio