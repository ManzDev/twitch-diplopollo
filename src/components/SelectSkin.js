import SKINS from "../assets/skins.json";

class SelectSkin extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        display: block;
        width: 100%;
        min-height: 50px;
        background: #000;
      }
      .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2px;

        & img {
          width: calc(20px * 2);
          height: calc(20px * 2);
          object-fit: cover;
          object-position: right 4px top 0;
          border: 3px solid black;
          cursor: pointer;

          &.selected {
            border-color: gold;
          }
        }
      }
    `;
  }

  preload() {
    SKINS.forEach(skin => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.href = `images/skins/${skin.value}.png`;
      link.as = "image";
      document.head.append(link);
    });
  }

  get value() {
    const url = new URL(this.shadowRoot.querySelector("img.selected").src).pathname;
    return url
      .replace("/twitch-diplopollo/images/skins/", "")
      .replace("/images/skins/", "")
      .replace(".png", "");
  }

  connectedCallback() {
    this.preload();
    this.render();

    this.images = [...this.shadowRoot.querySelectorAll("img")];
    const firstImage = this.images[0];
    firstImage.classList.add("selected");
    this.images.forEach((image, index) =>
      image.addEventListener("click", () => this.selectSkin(index)));
  }

  selectSkin(index) {
    this.shadowRoot.querySelector("img.selected").classList.remove("selected");
    this.images[index].classList.add("selected");
    const event = new CustomEvent("selectskin", {
      composed: true,
      bubbles: true,
      detail: SKINS[index].value
    });
    this.dispatchEvent(event);
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${SelectSkin.styles}</style>
    <div class="container">
      ${SKINS.map(skin => /* html */`<img src="images/skins/${skin.value}.png" alt="${skin.name}" title="${skin.name}">`).join("")}
    </div>`;
  }
}

customElements.define("select-skin", SelectSkin);
