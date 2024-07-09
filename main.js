import { API } from "./js/api.js";
import { elements } from "./js/helpers.js";
import { renderPlayingInfo, updateTitle } from "./js/ui.js";

const api = new API();
//* Sayfa yüklendiği anda apiye istek atıp popüler müzikleri getirir
document.addEventListener(
  "DOMContentLoaded",
  async () => await api.getPopular()
);
const playMusic = (url) => {
  // müziğin url'ini htmle aktarma
  elements.audioSource.src = url;
  // audio elementinin müziği yüklemesini sağladık
  elements.audio.load();
  // audio elementinin müziği oynatmasını sağlar
  elements.audio.play();
};

//* Liste de tıklamalarda çalışır
const handleClick = (e) => {
  if (e.target.id === "play-btn") {
    const parent = e.target.closest(".card"); // parentElement yerine kullanırız en yakın ebeveyne götürür
    //* Çalınacak müziğin bilgilerini ekrana basar
    renderPlayingInfo(parent.dataset);
    //* Müziği çalar
    playMusic(parent.dataset.url);
  }
};
//* Liste alanındaki tıklamaları izleme
document.addEventListener("click", handleClick);
// fotoğrafı dönderir
const animatePhoto = () => {
  const img = document.querySelector(".info img");
  img.className = "animate";
};
// img etiketie eklediğimiz animate classını kaldırır
const stopAnimation = () => {
  const img = document.querySelector(".info img");
  img.classList.remove("animate");
};
// Müziği çalma ve durdurma olaylarını izler
elements.audio.addEventListener("play", animatePhoto);
elements.audio.addEventListener("pause", stopAnimation);

elements.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = e.target[0].value;
  if (!query) {
    alert("Lüften bütün alanları doldurunuz!");
    return;
  }
  //* Başlığı güncelle
  updateTitle(`${query} İçin Sonuçlar`);
  api.searchMusic(query);
});

elements.menu.addEventListener("click", () => {
  elements.ulList.classList.toggle("toggle");
});
