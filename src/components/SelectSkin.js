import "../components/InfoPopup.js";
import SKINS from "../assets/skins.json";

class SelectSkin extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.currentIndex = 0;
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
    const url = new URL(location.href);
    SKINS.forEach(skin => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.href = `${url.href}images/skins/${skin.value}.png`;
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

  left() {
    this.unselectAll();
    this.currentIndex = (this.currentIndex - 1) >= 0 ? this.currentIndex - 1 : this.images.length + (this.currentIndex - 1);
    this.images[this.currentIndex].classList.add("selected");
    this.selectSkin(this.currentIndex);
    localStorage.setItem("skin", this.images[this.currentIndex].dataset.name);
  }

  right() {
    this.unselectAll();
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.images[this.currentIndex].classList.add("selected");
    this.selectSkin(this.currentIndex);
    localStorage.setItem("skin", this.images[this.currentIndex].dataset.name);
  }

  unselectAll() {
    this.shadowRoot.querySelector("img.selected").classList.remove("selected");
  }

  connectedCallback() {
    this.preload();
    this.render();

    addEventListener("keydown", (ev) => {
      const { key } = ev;
      const isPrev = key === "ArrowLeft" || key === "ArrowUp";
      const isNext = key === "ArrowRight" || key === "ArrowDown";

      if (isPrev || isNext) {
        ev.preventDefault();
      }

      isPrev && this.left();
      isNext && this.right();
    });

    const images = this.images = [...this.shadowRoot.querySelectorAll("img")];
    const getSkinFromStorage = localStorage.getItem("skin") ?? "original";
    images.forEach((image, index) => {
      image.addEventListener("click", () => {
        this.selectSkin(index);
        localStorage.setItem("skin", image.dataset.name);
      });
      if (image.src.includes(getSkinFromStorage)) {
        image.classList.add("selected");
      }
    });
  }

  selectSkin(index) {
    this.currentIndex = index;
    this.unselectAll();
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
      ${SKINS.map(skin => /* html */`
        <info-popup text="${skin.name}" translate-top="-38px">
          <img src="images/skins/${skin.value}.png" data-name="${skin.value}" alt="${skin.name}">
        </info-popup>
      `).join("")}
    </div>`;
  }
}

customElements.define("select-skin", SelectSkin);
