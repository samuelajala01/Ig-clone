const Gallery = () => {
  return `
    <input type ="file" name="photo" id="photoInput">
    <label for="photoInput">
      <i class="add-photo fas fa-plus-square">A</i>
    </label>
      <div class="gallery-nav"></div>
      <section class="gallery">
        <div class="gallery-loader">
          <img src = '../../assets/galleryLoader.svg'alt="">
        </div>
      </section>
  `
}

export default Gallery;