import { addEntryToDb, clearAllEntries } from "../../database.js";

const addBioEventListeners = () => {
  const editBioForm = document.querySelector(".edit-bio-form");
  const editBioButton = document.querySelector(".edit-bio-button");
  const cancelFormButton = document.querySelector(".cancel-edit-bio");

  editBioButton.addEventListener("click", () => {
    editBioForm.style.display = "block";
  });

  editBioForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const bioName = document.querySelector("#bioName").value;
    const bioDescription = document.querySelector("#bioDescription").value;
    const bioNameOutput = document.querySelector(".name");
    const bioDescriptionOutput = document.querySelector(".about");

    clearAllEntries("bio");
    addEntryToDb("bio", { bioName, bioDescription });
    bioNameOutput.innerText = bioName;
    bioDescriptionOutput.innerText = bioDescription;
    editBioForm.style.display = "none";
  });

  cancelFormButton.addEventListener("click", () => {
    editBioForm.style.display = "none";
  });
};

export default addBioEventListeners;
