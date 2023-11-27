class InfoPopup extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        position: relative;
        color: #fff;
      }

      :host(:hover) .tooltip {
        opacity: 1;
        transform: translate(-50%, var(--translate-top));
      }

      .tooltip {
        position: absolute;
        top: 0;
        left: 50%;
        font-size: 1.1rem;
        width: max-content;
        max-width: 350px;
        text-align: center;
        transform: translate(-50%, -30px);
        background: linear-gradient(#0863a5, #1283d1);
        padding: 6px 12px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        opacity: 0;
        pointer-events: none;
        transition: opacity 200ms ease, transform 350ms ease;
      }

      .tooltip::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #1283d1 transparent transparent transparent;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const defaultTranslateTop = "-43px";

    this.shadowRoot.innerHTML = /* html */`
      <style>${InfoPopup.styles}</style>
      <slot></slot>
      <span class="tooltip" style="--translate-top: ${this.getAttribute("translate-top") ?? defaultTranslateTop}">
        ${this.getAttribute("text")}
      </span>
    `;
  }
}

customElements.define("info-popup", InfoPopup);
