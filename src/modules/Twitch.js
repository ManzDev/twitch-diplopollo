export class Twitch {
  constructor() {
    const { searchParams } = new URL(location.href);
    const channel = searchParams.get("channel") ?? "ManzDev";
    const mode = searchParams.get("mode") ?? "bit";

    this.diploPollo = document.querySelector("diplo-pollo");

    this.connect(channel);
    mode === "bit" && this.enableBitMode();
    mode === "command" && this.enableCommandMode();
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

      if (!isCommand) return;

      const command = message.split(" ").at(0).toLowerCase();

      if (command === "!pollo") {
        const number = Number.parseInt(message.split(" ").at(1) ?? 1);
        const isValidNumber = !isNaN(number) && number > -300 && number < 300;

        if (!isValidNumber) return;

        console.log(number);

        if (number > 0) {
          this.diploPollo.incNeck(number);
        } else if (number < 0) {
          this.diploPollo.decNeck(Math.abs(number));
        }
      }
    });
  }
}
