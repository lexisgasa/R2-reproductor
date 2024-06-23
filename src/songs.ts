import { Song } from "./songsData";

export const areSameSong = (song: Song, songTitle: string): boolean => {
  let areSame: boolean = song.title === songTitle ? true : false;

  return areSame;
};

export const addSong = (song: Song, songs: Song[]): void => {
  songs.push(song);
};

export const isPlaylistFull = (songs: Song[]): boolean => {
  let isFull: boolean = songs.length >= 4 ? true : false;

  return isFull;
};

export const getErrorMessage = (errorCode: string): string => {
  let errorMessage: string;

  switch (errorCode) {
    case "exists":
      errorMessage = "La canción ya existe";
      break;
    case "limit":
      errorMessage = "La playlist está llena";
      break;
    default:
      errorMessage = "Ha habido un error en el proceso";
      break;
  }

  return errorMessage;
};

export const getSongsCount = (songs: Song[]): number => {
  let songsCount: number;

  songsCount = songs.length;

  return songsCount;
};

export const removeSongByPosition = (songs: Song[], position: number): void => {
  songs.splice(position, 1);
};

export const setCurrentSong = (song: Song): void => {
  song.isCurrent = true;
};

export const getNextSongPosition = (
  songs: Song[],
  currentSongPosition: number
) => {
  let nextSongPosition: number;
  nextSongPosition = currentSongPosition + 1;

  if (currentSongPosition === songs.length - 1) {
    nextSongPosition = 0;
  }

  return nextSongPosition;
};

export const isCurrentSong = (song: Song): boolean => {
  let isCurrent: boolean = song.isCurrent ? true : false;

  return isCurrent;
};
