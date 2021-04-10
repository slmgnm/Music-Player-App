import React from "react";

const LibrarySong = ({
  id,
  setSongs,
  audioRef,
  song,
  songs,
  setCurrentSong,
  setIsPlaying,
  isPlaying,
}) => {
  const selectSongHandler = async () => {
    await setCurrentSong(song);
    await audioRef.current.play();
    await setIsPlaying(true);
    // Add active state
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });

    setSongs(newSongs);
  };
  return (
    <div
      onClick={selectSongHandler}
      className={`library-song  ${song.active ? "selected" : ""}`}>
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
