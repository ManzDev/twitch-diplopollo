import "./DiploHead.js";

// *** NO-OBS
// const INC_TIMING = "linear(0, 0.05, 0.10, 0.25, 0.50, 0.75, 1, 1.20, 1.10, 1.15, 1.05, 1.10, 1, 1.05, 1)";
// const DEC_TIMING = "linear(0, 0.05, 0.10, 0.25, 0.50, 0.75, 1, 0.80, 0.90, 0.85, 0.95, 0.90, 1, 0.95, 1)";
const CB_TIMING = "cubic-bezier(0.25, -0.75, 0.50, 1.75)";

class DiploPollo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.neckSize = 0;
  }

  static get styles() {
    return /* css */`
      :host {
        --scale: scale(3);
        --image-head: url("images/skins/original.png");
      }

      .container {
        width: 32px;
        transform: var(--scale);
        transform-origin: 0 100%;
        image-rendering: pixelated;
      }

      diplo-head {
        display: block;
        transform: translateY(1px);
      }

      .body {
        width: 32px;
        height: 25px;
        background: url("images/body.png");
        animation: idle 400ms infinite steps(4);
        position: relative;
      }

      @keyframes idle {
        from { background-position: -128px 0px; }
        to { background-position: 0px 0px; }
      }
    `;
  }

  incNeck(size) {
    this.style.setProperty("--neck-timing", CB_TIMING);
    this.neckSize += size;
    this.updateNeck();
  }

  setHead(headName) {
    this.style.setProperty("--image-head", `url("images/skins/${headName}.png")`);
  }

  updateNeck() {
    this.style.setProperty("--neck-size", `${this.neckSize}px`);
  }

  decNeck(size) {
    this.style.setProperty("--neck-timing", CB_TIMING);
    this.neckSize = Math.max(0, this.neckSize - size);
    this.updateNeck();
  }

  connectedCallback() {
    this.render();

    // head
    const headName = new URL(location.href).searchParams.get("skin");
    if (headName) {
      this.setHead(headName);
    }
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${DiploPollo.styles}</style>
    <div class="container">
      <diplo-head></diplo-head>
      <div class="body"></div>
    </div>`;
  }
}

customElements.define("diplo-pollo", DiploPollo);
