import Bio from "./modules/bio/Bio.js";
import addBioEventListeners from "./modules/bio/events.js";
import Gallery from "./modules/gallery/Gallery.js";
import Nav from "./modules/nav/Nav.js";
import { request, addEntryToDb, getEntryFromDb } from "./database.js";
import {
  addGalleryEventListeners,
  addImagesToGallery,
} from "./modules/gallery/events.js";

const rootDiv = document.getElementById("root");

const App = async () => {
  return `
  ${Nav()}
  <div class="container">
    ${await Bio()}
    ${Gallery()}
  </div>
  `;
};

request.onsuccess = async () => {
  rootDiv.innerHTML = await App();
  addBioEventListeners();
  addGalleryEventListeners();
  await addImagesToGallery();
};

request.onerror = () => {};
