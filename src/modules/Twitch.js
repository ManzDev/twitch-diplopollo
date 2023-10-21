const diploPollo = document.querySelector("diplo-pollo");

export class Twitch {
  constructor() {
    const channel = new URL(location.href).searchParams.get("channel") ?? "ManzDev";
    const mode = new URL(location.href).searchParams.get("mode") ?? "bit";

    // eslint-disable-next-line
    this.client = new tmi.Client({ channels: [channel] });
    this.client.connect();

    mode === "bit" && this.enableBitMode();
    mode === "command" && this.enableCommandMode();
  }

  enableBitMode() {
    this.client.on("cheer", (channel, userstate, message) => {
      const bits = userstate.bits ?? 1;
      const size = Math.floor(bits / 2);
      diploPollo.incNeck(size);
      // const username = userstate?.username;
      // diploPollo.setUsername(username);    // ** TO DO: Etiqueta con el último que donó
    });
  }

  enableCommandMode() {
    this.client.on("message", (channel, tags, message, self) => {
      const isCommand = message[0] === "!";

      if (!isCommand) return;

      const command = message.split(" ").at(0).toLowerCase();

      if (command === "!pollo") {
        const number = Number.parseInt(message.split(" ").at(1) ?? 1);
        const isValidNumber = !isNaN(number) && number > -300 && number < 300;

        if (!isValidNumber) return;

        console.log(number);

        if (number > 0) {
          diploPollo.incNeck(number);
        } else if (number < 0) {
          diploPollo.decNeck(Math.abs(number));
        }
      }
    });
  }
}
