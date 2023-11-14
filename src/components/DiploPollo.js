import confetti from "canvas-confetti";
import { getParam } from "../modules/getParam.js";
import "./DiploHead.js";

const SOUND_PROBABILITY = 6;
const AUDIOS = [];

// *** NO-OBS
// const INC_TIMING = "linear(0, 0.05, 0.10, 0.25, 0.50, 0.75, 1, 1.20, 1.10, 1.15, 1.05, 1.10, 1, 1.05, 1)";
// const DEC_TIMING = "linear(0, 0.05, 0.10, 0.25, 0.50, 0.75, 1, 0.80, 0.90, 0.85, 0.95, 0.90, 1, 0.95, 1)";
const CB_TIMING = "cubic-bezier(0.25, -0.75, 0.50, 1.75)";
const INTERVAL_TIME = 5 * 60 * 1000;
const IDLE_NECK_DECREMENT = -5;
const IDLE_OPACITY = 0.25;

const headName = new URL(location.href).searchParams.get("skin");
const decreaseEnabled = new URL(location.href).searchParams.get("decrease") === "1";
const ghostEnabled = new URL(location.href).searchParams.get("ghost") === "1";
const soundEnabled = new URL(location.href).searchParams.get("sound") === "1";
const confettiEnabled = getParam("action") === "confetti";

class DiploPollo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.neckSize = 0;
    this.activity = 0;
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
        opacity: var(--opacity, 1);
        transition: opacity 0.3s;
        position: absolute;
        bottom: 0;
        left: 0;
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

  setOpacity(value) {
    const isAllowRange = value >= 0 && value <= 1;
    if (!isAllowRange) return;

    this.style.setProperty("--opacity", value);
  }

  incNeck(size, silent = false) {
    this.style.setProperty("--neck-timing", CB_TIMING);
    this.neckSize += size;
    this.updateNeck();
    confettiEnabled && !silent && this.doConfetti();
    this.activity++;
    this.setOpacity(1);
    this.playSound();
  }

  doConfetti() {
    confetti({
      particleCount: 50,
      spread: 42,
      origin: { x: 0.02, y: 1 }
    });
  }

  playSound() {
    if (!soundEnabled) {
      return;
    }

    const i = ~~(Math.random() * SOUND_PROBABILITY);
    if (i === 0) {
      const index = ~~(Math.random() * AUDIOS.length);
      const audio = AUDIOS[index];
      audio.currentTime = 0;
      audio.play();
    }
  }

  setHead(headName) {
    this.style.setProperty("--image-head", `url("images/skins/${headName}.png")`);
  }

  updateNeck() {
    this.style.setProperty("--neck-size", `${this.neckSize}px`);
  }

  connectedCallback() {
    this.render();

    this.initSound();
    this.manageSkins();
    setInterval(() => this.manageEvents(), INTERVAL_TIME);
  }

  initSound() {
    if (soundEnabled) {
      for (let i = 1; i < 5; i++) {
        AUDIOS.push(new Audio(`sounds/chicken-${i}.mp3`));
      }
    }
  }

  manageSkins() {
    if (headName) {
      this.setHead(headName);
    }
  }

  manageEvents() {
    const hasActivity = this.activity > 0;

    if (!hasActivity) {
      decreaseEnabled && this.neckSize > 0 && this.incNeck(IDLE_NECK_DECREMENT, true);
      ghostEnabled && this.setOpacity(IDLE_OPACITY);
    }

    // Reset
    this.activity = 0;
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
