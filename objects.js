var playlist = {"Maroon 5": "Sunday Morning"};
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}
function removeFromPlaylist(playlist, artistName) {
  console.log(playlist)
  delete playlist.artistName;
  console.log(playlist "two");
  return playlist;

}

removeFromPlaylist(playlist, "Maroon 5");