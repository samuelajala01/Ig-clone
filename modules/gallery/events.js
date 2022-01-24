import { addEntryToDb, getEntryFromDb } from "../../database.js";

const addGalleryEventListeners = () => {
  const photoInput = document.querySelector('#photoInput');
  photoInput.addEventListener('change', () => { 
    console.log(photoInput.files[0])
    const reader = new FileReader();
    reader.readAsDataURL(photoInput.files[0])

    reader.addEventListener('load', () =>{
      addEntryToDb('gallery', reader.result)
    })
  })
}

const addImagesToGallery = async () => {
  const gallerySection = document.querySelector('.gallery')
  const galleryData = await getEntryFromDb('gallery')
  const galleryItems = galleryData.map(singlePhoto => {
    return `
      <a href="#" class="item">
        <img src=${singlePhoto} alt="">
      </a>
    `
  })
  gallerySection.style.display = 'grid'
  gallerySection.innerHTML = galleryItems.join('')
}

export { addGalleryEventListeners, addImagesToGallery }