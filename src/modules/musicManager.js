const music = new Audio("sounds/music.mp3");
music.loop = true;
const icon = document.createElement("div");

const pause = () => {
  music.pause();
  icon.style.setProperty("--opacity", 1);
};

const play = () => {
  music.play();
  icon.style.setProperty("--opacity", 0);
};

export const musicManager = (() => {
  icon.className = "music-icon";
  icon.innerHTML = /* html */`
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
    <path stroke="#fff" stroke-width="1" stroke-opacity="var(--opacity, 1)" d="M1 1 L16 16" />
    <path fill="#fff" d="M12 5.21v5.058A2 2 0 1 0 13 12V1.926a.8.8 0 0 0-1.07-.754l-6.4 2.286a.8.8 0 0 0-.53.753v7.056A2 2 0 1 0 6 13V7.353l6-2.142Z"/>
  </svg>`;
  document.body.append(icon);
  icon.addEventListener("click", () => {
    !music.paused ? pause() : play();
  });
})();
