import { renderSongs } from "./ui.js";

const url = 'https://shazam.p.rapidapi.com/artists/get-top-songs?id=567072&l=tr-TR';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ab5f26ee35mshe649000baca265ap11c532jsnfcf9344d48d6',
		'x-rapidapi-host': 'shazam.p.rapidapi.com'
	}
};

//* API isteklerini yönettiğimiz class yapısı
export class API {
  constructor() {
    this.songs = [];
  }
  //* Popüler müzikleri getirir
  async getPopular() {
    const res = await fetch(url, options);
    const data = await res.json();
    //* API'den aldığımız şarkıları song dizisine aktartdık
    //console.log(data)
    this.songs = data.data;
    //* Ekrana popüler müzikleri aktaracak fonksiyona songs dizisini parametre olarak gönderdik
    renderSongs(this.songs);
  }
  //* Arama methodu
  async searchMusic(query) {
    const res = await fetch(
      `https://shazam.p.rapidapi.com/search?term=${query}&locale=tr-TR`,
      options
    );
    const data = await res.json();
    console.log(data);
    // Veriyi istediğimiz hale çevirme
    // song.track yerine song'a erişme
    let newData = data.tracks.hits;

    newData = newData.map((song) => ({ ...song.track }));
    this.songs = newData;
    console.log(this.songs);
    // aratılan şarkıları ekrana basma
    renderSongs(this.songs);
  }
}
