class DiploHead extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
      }

      .head-group {
        transform: translateY(5px);
      }

      :host-context(.animated) .head-group {
        animation: head-move 400ms infinite steps(4);
      }

      .head {
        width: 32px;
        height: 21px;
        background: var(--image-head);
        transform: translateY(1px);
      }

      .neck {
        width: 32px;
        height: var(--neck-size, 0px);
        background: url("images/neck.png");
        transition: height 0.75s var(--neck-timing);
      }

      @keyframes head-move {
        from { transform: translateY(3px); }
        to { transform: translateY(8px); }
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${DiploHead.styles}</style>
    <div class="head-group">
      <div class="head"></div>
      <div class="neck"></div>
    </div>`;
  }
}

customElements.define("diplo-head", DiploHead);
