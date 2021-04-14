import React from "react";
import LibrarySong from "./librarySong";


const Library = ({
  songs,
  setSongs,
  setCurrentSong,
  setIsPlaying,
  audioRef,
  isPlaying,

  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            songs={songs}
            id={song.id}
            audioRef={audioRef}
            setIsPlaying={setIsPlaying}
            song={song}
            setCurrentSong={setCurrentSong}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
