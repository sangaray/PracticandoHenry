// Demo integrador de la clase
// Queremos crear una playlist con los datos de Song, Postcas y Audiolibro
// Para hacer esto hay dos formas igualmene válidas esto es válido también para los tipos.
// 1. playlist: (ISong | IPodcast | IAudiobook)[];
// 2. playlist: creando una interface track que se extien a las otras interfaces y estas otras interfaces son también tracks

interface ITrack {
  title: string;
}

interface ISong extends ITrack {
  artist: string;
  duration: number;
}

interface IPodcast extends ITrack {
  host: string;
  episodes: number;
}

interface IAudiobook extends ITrack {
  author: string;
  duration: number;
}

interface IPlaylist {
  name: string;
  playlist: (ISong | IPodcast | IAudiobook)[];
}

// const miArr: (number | string | boolean)[] = [1, 2, "Hola", true];

// console.log(miArr);

const song: ISong = {
  title: "Bohemian Rhapsody",
  artist: "Queen",
  duration: 367,
};

const podcast: IPodcast = {
  title: "The Joe Rogan Experience",
  host: "Joe Rogan",
  episodes: 1600,
};

const audiobook: IAudiobook = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  duration: 600,
};

/* const playlist: IPlaylist = {
  name: "My Playlist",
  playlist: [song, podcast, audiobook],
}; */

const playlist: IPlaylist = {
  name: "My Playlist",
  playlist: [song, podcast, audiobook],
};

console.log(playlist);
