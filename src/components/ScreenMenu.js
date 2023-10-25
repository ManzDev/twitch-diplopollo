import styles from "./ScreenMenu.css?inline";

class ScreenMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return styles;
  }

  connectedCallback() {
    this.render();
    const [input, ...selects] = this.shadowRoot.querySelectorAll("input[type=text], select:not([disabled])");
    input.addEventListener("input", () => this.updateURL());
    selects.forEach(field => {
      field.addEventListener("change", () => this.updateURL());
    });
    this.shadowRoot.querySelector("button").addEventListener("click", () => this.copyURL());
  }

  async copyURL() {
    const url = this.shadowRoot.querySelector("textarea").value;
    await navigator.clipboard.writeText(url);
  }

  getURL() {
    const url = new URL(location.href);
    const baseUrl = `${url.origin}${url.pathname}`;
    const [channel, ...selects] = [...this.shadowRoot.querySelectorAll("input[type=text], select:not([disabled])")];
    const channelName = channel.value;
    const urlSearch = selects.map(select => `${select.name}=${select[select.selectedIndex].value}`).join("&");
    return `${baseUrl}?channel=${channelName.toLowerCase()}&${urlSearch}`;
  }

  updateURL() {
    const textarea = this.shadowRoot.querySelector("textarea");
    textarea.value = this.getURL();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${ScreenMenu.styles}</style>
    <img src="images/logo.png" alt="Logo DiploPollo">
    <div class="container">

      <div class="data">

        <label>
          <p>Canal de Twitch</p>
          <info-popup title="Canal de Twitch al que queremos conectarnos">ℹ</info-popup>
          <input type="text" name="channel" placeholder="ManzDev" required>
        </label>

        <label>
          <p>Modalidad</p>
          <info-popup title="El cuello del pollo crece cuando el chat escribe comandos o cuando dona bits">ℹ</info-popup>
          <select name="mode">
            <option value="command" selected>Comando !pollo</option>
            <option value="bit">Bits (Donaciones)</option>
          </select>
        </label>

        <label>
          <p>Skin</p>
          <info-popup title="Elige la skin del pollo que más te guste">ℹ</info-popup>
          <select name="skin">
            <option value="original">Genuine DiploPollo™</option>
            <option value="sunglasses">Beach DiploPollo™</option>
            <option value="king">King DiploPollo™</option>
            <option value="niv3k">DiploDuck™</option>
            <option value="halloween">DecapiPollo™</option>
            <option value="paperbag" disabled>McDiploPollo™</option>
          </select>
        </label>

        <label>
          <p>Autodecrecimiento</p>
          <info-popup title="Cuando no hay interacción con el pollo durante un tiempo, el cuello va decreciendo por sí solo.">ℹ</info-popup>
          <select name="decrease" disabled>
            <option value="1">Activado</option>
            <option value="0">Desactivado</option>
          </select>
        </label>

        <label>
          <p>Idle ghost</p>
          <info-popup title="Cuando no hay interacción con el pollo durante un tiempo, el pollo se vuelve semitransparente.">ℹ</info-popup>
          <select name="ghost" disabled>
            <option value="1">Activado</option>
            <option value="0">Desactivado</option>
          </select>
        </label>

        <label>
          <p>Interacción</p>
          <info-popup title="Cuando hay una interacción con el pollo, ocurre algo adicional">ℹ</info-popup>
          <select name="action" disabled>
            <option value="none" selected>Ninguna</option>
            <option value="confetti">Party</option>
          </select>
        </label>

        <label>
          <p>Sonido</p>
          <info-popup title="Activa los sonidos. Desmarcado, mutea los sonidos.">ℹ</info-popup>
          <select name="sound" disabled>
            <option value="1">Activado</option>
            <option value="0">Desactivado</option>
          </select>
        </label>

        <label>
          <p>DiploPollo 3000™</p>
          <info-popup title="Funcionalidad especial">ℹ</info-popup>
          <select name="multineck" disabled>
            <option value="1">Activado</option>
            <option value="0">Desactivado</option>
          </select>
        </label>

        <textarea class="code" readonly></textarea>
        <button>Copiar URL</button>
        <small>Copia esta URL y pegala en el OBS como fuente de navegador.</small>
      </div>
    </div>`;
  }
}

customElements.define("screen-menu", ScreenMenu);
