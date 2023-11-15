import githubLogo from "../assets/github.svg?raw";
import musicLogo from "../assets/music.svg?raw";
import manzdevLogo from "../assets/manzdev.svg?raw";

const music = new Audio("sounds/music.mp3");
music.loop = true;
const nav = document.createElement("nav");
nav.classList.add("topbar");
const musicIcon = document.createElement("div");
const githubIcon = document.createElement("a");
const manzdevIcon = document.createElement("a");
document.body.append(nav);

const pause = () => {
  music.pause();
  musicIcon.style.setProperty("--opacity", 1);
};

const play = () => {
  music.play();
  musicIcon.style.setProperty("--opacity", 0);
};

export const navManager = (() => {
  musicIcon.className = "music-icon";
  musicIcon.innerHTML = musicLogo;
  githubIcon.className = "github-icon";
  githubIcon.innerHTML = githubLogo;
  githubIcon.href = "https://github.com/ManzDev/twitch-diplopollo";
  manzdevIcon.className = "manzdev-icon";
  manzdevIcon.innerHTML = manzdevLogo;
  manzdevIcon.href = "https://manz.dev/";
  nav.append(manzdevIcon);
  nav.append(musicIcon);
  nav.append(githubIcon);
  musicIcon.addEventListener("click", () => {
    !music.paused ? pause() : play();
  });
})();
