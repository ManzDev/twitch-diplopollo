import { getParam } from "./getParam.js";
const MAX_SIZE = 300;

const MIN_INCREMENT = 5;
const COOLDOWN_TIME = 10 * 1000;

export class Twitch {
  constructor() {
    this.lastCommand = null;
    const channel = getParam("channel") ?? "ManzDev";
    const mode = getParam("mode") ?? "bit";

    this.diploPollo = document.querySelector("diplo-pollo");

    this.connect(channel);
    mode === "bit" && this.enableBitMode();
    mode === "command" && this.enableCommandMode();
    mode === "sub" && this.enableSubMode();
  }

  connect(channel) {
    // eslint-disable-next-line
    this.client = new tmi.Client({ channels: [channel] });
    this.client.connect();
  }

  enableBitMode() {
    this.client.on("cheer", (channel, userstate, message) => {
      const bits = userstate.bits ?? 1;
      const size = Math.floor(bits / 2);
      this.diploPollo.incNeck(size);
      // const username = userstate?.username;
      // this.diploPollo.setUsername(username);    // ** TO DO: Etiqueta con el último que donó
    });
  }

  enableCommandMode() {
    this.client.on("message", (channel, tags, message, self) => {
      const isCommand = message[0] === "!";
      const isOutCooldown = (new Date().getTime() - COOLDOWN_TIME) > this.lastCommand;

      if (!isCommand || !isOutCooldown) return;

      const command = message.split(" ").at(0).toLowerCase();

      if (command === "!pollo") {
        const number = Number.parseInt(message.split(" ").at(1) ?? MIN_INCREMENT);
        const isValidNumber = !isNaN(number) && number > -MAX_SIZE && number < MAX_SIZE;

        if (!isValidNumber) return;
        this.diploPollo.incNeck(number);
        this.lastCommand = new Date().getTime();
      }
    });
  }

  enableSubMode() {
    const subMode = (username) => {
      const number = 40;
      this.diploPollo.incNeck(number);
    };

    this.client.on("sub", (channel, username) => subMode(username));
    this.client.on("resub", (channel, username) => subMode(username));
    this.client.on("subgift", (channel, username) => subMode(username));
  }
}
