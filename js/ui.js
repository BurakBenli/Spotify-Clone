import { elements } from "./helpers.js";

export const renderSongs = (songs) => {
  elements.list.innerHTML = "";
  songs.forEach((song) => {
    //* Kart datasına kart elemanına bazı verileri ekleme
    const div = document.createElement("div");
    div.dataset.url = song.hub?.actions?.pop().uri;
    div.dataset.title = song.title;
    div.dataset.img = song.images?.coverart;

    div.className = "card";
    div.innerHTML = `      
    <figure>
        <img
        src="${song.images?.coverart}"
        alt=""
        />
        <div class="play">
        <i class="bi bi-play-fill" id="play-btn"></i>
        </div>
    </figure>
    <h4>${song.subtitle}</h4>
    <h4>${song.title}</h4>`;
    elements.list.appendChild(div);
  });
};

export const renderPlayingInfo = (song) => {
  console.log(song);
  elements.playingInfo.innerHTML = `
  <img
  src="${song.img}"
  id="info-img"
  class=""
  alt=""
  />
  <div>
    <p>Şu an oynatılıyor...</p>
    <h3>${song.title}</h3>
  </div>
  
  `;
};
//* Başlığı günceller
export const updateTitle = (message) => {
  elements.title.innerText = message;
};
