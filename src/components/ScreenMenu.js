import "../components/SelectSkin.js";
import "../components/InfoPopup.js";
import styles from "./ScreenMenu.css?inline";
import { version } from "../../package.json";
import { navManager } from "../modules/navManager.js";    // eslint-disable-line

class ScreenMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --image-head: url("images/skins/${localStorage.getItem("skin") ?? "original"}.png");
      }
      ${styles}
    `;
  }

  connectedCallback() {
    this.render();
    const [input, ...selects] = this.shadowRoot.querySelectorAll("input[type=text], select:not([disabled])");
    const skinSelect = this.shadowRoot.querySelector("select-skin");
    const actionSelect = this.shadowRoot.querySelector("select[name='action']");
    skinSelect.addEventListener("selectskin", ({ detail }) => this.changeHead(detail));

    input.addEventListener("input", () => this.updateURL());
    selects.forEach(field => field.addEventListener("change", () => this.updateURL()));
    this.shadowRoot.querySelector("button").addEventListener("click", () => this.copyURL());
    actionSelect.addEventListener("change", async () => {
      if (actionSelect.options[actionSelect.selectedIndex].value === "confetti") {
        (await import("canvas-confetti")).default();
      }
    });
  }

  async copyURL() {
    const channel = this.shadowRoot.querySelector("input[name=channel]");
    if (!channel.value) {
      channel.reportValidity();
    } else {
      localStorage.setItem("channel", channel.value);
      const textarea = this.shadowRoot.querySelector("textarea");
      const button = this.shadowRoot.querySelector("button");
      const url = textarea.value;
      textarea.select();
      button.textContent = "¡URL copiada!";
      await navigator.clipboard.writeText(url);
    }
  }

  changeHead(name) {
    this.style.setProperty("--image-head", `url("images/skins/${name}.png")`);
    this.updateURL();
  }

  getURL() {
    const url = new URL(location.href);
    const baseUrl = `${url.origin}${url.pathname}`;
    const [channel, ...selects] = [...this.shadowRoot.querySelectorAll("input[type=text], select:not([disabled])")];
    const channelName = channel.value;
    const selectSkin = this.shadowRoot.querySelector("select-skin");
    const params = selects
      .filter(select => select[select.selectedIndex].value !== "none")
      .map(select => `${select.name}=${select[select.selectedIndex].value}`);
    params.push(`skin=${selectSkin.value}`);
    const urlSearch = params.join("&");
    return `${baseUrl}?channel=${channelName.toLowerCase()}&${urlSearch}`;
  }

  updateURL() {
    const textarea = this.shadowRoot.querySelector("textarea");
    const button = this.shadowRoot.querySelector("button");
    textarea.value = this.getURL();
    localStorage.setItem("url", this.getURL());
    button.textContent = "Copiar URL";
  }

  render() {
    const channel = localStorage.getItem("channel") ?? "";
    this.shadowRoot.innerHTML = /* html */`
    <style>${ScreenMenu.styles}</style>
    <div class="logo">
      <img src="images/logo.png" alt="Logo DiploPollo">
      <span class="version">v${version}</span>
    </div>
    <div class="container">

      <div class="data">

        <label>
          <p>Skin</p>
          <info-popup text="Elige la skin del pollo que más te guste"></info-popup>
          <select-skin></select-skin>
        </label>

        <label>
          <p>Canal de Twitch</p>
          <span class="info">
            <info-popup text="Canal de Twitch al que queremos conectarnos">
              <span>ℹ</span>
            </info-popup>
          </span>
          <input type="text" name="channel" placeholder="ManzDev" value="${channel}"
                required pattern="([a-zA-Z0-9_])+">
        </label>

        <label>
          <p>Modalidad</p>
          <span class="info">
            <info-popup text="El cuello del pollo crece cuando el chat escribe comandos o cuando dona bits" translate-top="-63px">
              <span>ℹ</span>
            </info-popup>
          </span>
          <select name="mode">
            <option value="command" selected>Comando !pollo</option>
            <option value="bit">Bits (Donaciones)</option>
            <option value="sub">Subs/Gifts (Suscripciones)</option>
          </select>
        </label>

        <label>
          <p>Interacción</p>
          <span class="info">
            <info-popup text="Cuando hay una interacción con el pollo, ocurre algo adicional" translate-top="-63px">
              <span>ℹ</span>
            </info-popup>
          </span>
          <select name="action">
            <option value="none" selected>Ninguna</option>
            <option value="confetti">Party</option>
          </select>
        </label>

        <label>
          <p>Autodecrecimiento</p>
          <span class="info">
            <info-popup text="Cuando no hay interacción con el pollo durante un tiempo, el cuello va decreciendo por sí solo." translate-top="-63px">
              <span>ℹ</span>
            </info-popup>
          </span>
          <select name="decrease">
            <option value="1">Activado</option>
            <option value="none" selected>Desactivado</option>
          </select>
        </label>

        <label>
          <p>Idle ghost</p>
          <span class="info">
            <info-popup text="Cuando no hay interacción con el pollo durante un tiempo, el pollo se vuelve semitransparente." translate-top="-63px">
              <span>ℹ</span>
            </info-popup>
          </span>
          <select name="ghost">
            <option value="1">Activado</option>
            <option value="none" selected>Desactivado</option>
          </select>
        </label>

        <label>
          <p>Sonido</p>
          <span class="info">
            <info-popup text="Activa los sonidos. Desmarcado, mutea los sonidos." translate-top="-63px">
              <span>ℹ</span>
            </info-popup>
          </span>
          <select name="sound">
            <option value="1">Activado</option>
            <option value="none" selected>Desactivado</option>
          </select>
        </label>

        <label>
          <p>DiploPollo 3000™</p>
          <span class="info">
            <info-popup text="Funcionalidad especial">
              <span>ℹ</span>
            </info-popup>
          </span>
          <select name="multineck" disabled>
            <option value="1">Activado</option>
            <option value="none" selected>Desactivado</option>
          </select>
        </label>

        <textarea class="code" readonly>${localStorage.getItem("url") ?? ""}</textarea>
        <button>Copiar URL</button>
        <small>Copia esta URL y pegala en el OBS como fuente de navegador.</small>
      </div>
    </div>
    <div class="preview">
      <div class="group">
        <div class="head"></div>
        <div class="neck"></div>
      </div>
    </div>
    `;
  }
}

customElements.define("screen-menu", ScreenMenu);
