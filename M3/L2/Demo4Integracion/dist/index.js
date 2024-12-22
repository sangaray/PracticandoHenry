"use strict";
// Demo integrador de la clase
// Queremos crear una playlist con los datos de Song, Postcas y Audiolibro
// Para hacer esto hay dos formas igualmene válidas esto es válido también para los tipos.
// 1. playlist: (ISong | IPodcast | IAudiobook)[];
// 2. playlist: IPlaylistItem[];
// const miArr: (number | string | boolean)[] = [1, 2, "Hola", true];
// console.log(miArr);
const song = {
    title: "Bohemian Rhapsody",
    artist: "Queen",
    duration: 367,
};
const podcast = {
    title: "The Joe Rogan Experience",
    host: "Joe Rogan",
    episodes: 1600,
};
const audiobook = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    duration: 600,
};
/* const playlist: IPlaylist = {
  name: "My Playlist",
  playlist: [song, podcast, audiobook],
}; */
const playlist = {
    name: "My Playlist",
    playlist: [song, podcast, audiobook],
};
console.log(playlist);
