import { elements } from "./helpers.js";

export const renderSongs = (songs) => {
  elements.list.innerHTML = "";
  songs.forEach((song) => {
    //* Kart datasına kart elemanına bazı verileri ekleme
   // console.log(song)
    const div = document.createElement("div");
   // div.dataset.url = song.hub?.actions?.pop().uri;
   // div.dataset.title = song.title;
   // div.dataset.img = song.images?.coverart;
   
    div.dataset.url = song.attributes.previews[0].url;
    div.dataset.title = song.attributes?.albumName;
    div.dataset.img = song.attributes?.artwork?.url;
    console.log(song.attributes?.artwork?.url)
    div.className = "card";
    div.innerHTML = `      
    <figure>
        <img
        src="${song.attributes?.artwork?.url}"
        alt=""
        />
        <div class="play">
        <i class="bi bi-play-fill" id="play-btn"></i>
        </div>
    </figure>
    <h4>${song.attributes?.artistName}</h4>
    <h4>${song.attributes?.albumName}</h4>`;
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
