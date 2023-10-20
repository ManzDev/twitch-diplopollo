import "./components/DiploPollo.js";

const diploPollo = document.querySelector("diplo-pollo");
const channel = new URL(location.href).searchParams.get("channel");

// eslint-disable-next-line
const client = new tmi.Client({ channels: [channel] });
client.connect();

client.on("cheer", (channel, userstate, message) => {
  const bits = userstate.bits ?? 1;
  const username = userstate?.username;
  const size = Math.floor(bits / 2);
  diploPollo.incNeck(size);
  // diploPollo.setUsername(username);    // ** TO DO: Etiqueta con el último que donó
});

/*
client.on("message", (channel, tags, message, self) => {
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
*/
