class CustomGallery extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 2rem 0;
        }
        .gallery-title {
          font-family: 'Britannic Bold', sans-serif;
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: #1f2937;
        }
        .gallery-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1rem;
          padding: 0 1rem;
        }
        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
          aspect-ratio: 4/3;
        }
        .gallery-item:hover {
          transform: scale(1.03);
        }
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }
        .gallery-item:hover img {
          transform: scale(1.1);
        }
        .gallery-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          color: white;
          padding: 1rem;
          transform: translateY(100%);
          transition: transform 0.3s;
        }
        .gallery-item:hover .gallery-caption {
          transform: translateY(0);
        }
      </style>
      <h2 class="gallery-title">NASZA GALERIA</h2>
      <div class="gallery-container">
        <div class="gallery-item">
          <img src="http://static.photos/construction/640x360/1" alt="Podnośnik koszowy w akcji">
<div class="gallery-caption">Prace na wysokościach</div>
        </div>
        <div class="gallery-item">
          <img src="https://huggingface.co/spaces/Matyldaaaaa/podno-niki-l-skie-wysoko-to-nasza-specjalno/resolve/main/images/IMG_8908.JPG" alt="Wycinka drzew">
          <div class="gallery-caption">Wycinka drzew</div>
        </div>
        <div class="gallery-item">
          <img src="https://huggingface.co/spaces/Matyldaaaaa/podno-niki-l-skie-wysoko-to-nasza-specjalno/resolve/main/images/IMG_0573.JPG" alt="Mycie elewacji">
          <div class="gallery-caption">Mycie elewacji</div>
        </div>
        <div class="gallery-item">
          <img src="https://huggingface.co/spaces/Matyldaaaaa/podno-niki-l-skie-wysoko-to-nasza-specjalno/resolve/main/images/IMG_8908.JPG" alt="Montaż reklamy">
          <div class="gallery-caption">Montaż reklam</div>
        </div>
        <div class="gallery-item">
          <img src="http://static.photos/construction/640x360/2" alt="Malowanie elewacji">
<div class="gallery-caption">Malowanie elewacji</div>
        </div>
        <div class="gallery-item">
          <img src="https://huggingface.co/spaces/Matyldaaaaa/podno-niki-l-skie-wysoko-to-nasza-specjalno/resolve/main/images/IMG_0573.JPG" alt="Podnośnik JLG">
          <div class="gallery-caption">Nasz sprzęt</div>
        </div>
</div>
    `;
  }
}
customElements.define('custom-gallery', CustomGallery);