import { Twitch } from "./modules/Twitch.js";
import "./components/DiploPollo.js";
import "./components/ScreenMenu.js";

const container = document.querySelector(".container");
const { searchParams } = new URL(location.href);
const hasChannel = Boolean(searchParams.get("channel"));

if (hasChannel) {
  const diploPollo = document.createElement("diplo-pollo");
  container.classList.add("diplopollo-mode");
  diploPollo.classList.add("animated");
  container.append(diploPollo);
  // eslint-disable-next-line
  const twitch = new Twitch();
}

if (!hasChannel) {
  container.classList.add("menu-mode");
  const screenMenu = document.createElement("screen-menu");
  container.append(screenMenu);
}
