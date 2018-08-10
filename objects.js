var playlist = {"Maroon 5": "Sunday Morning", "Billy Joel": "You May be Right"};
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}
function removeFromPlaylist(playlist, artistName) {
  console.log(playlist)
  delete playlist.artistName;
  console.log(playlist + "ywo");
  return playlist;

}

removeFromPlaylist(playlist, "Maroon 5");