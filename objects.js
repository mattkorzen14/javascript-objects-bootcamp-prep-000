playlist = {"Maroon 5": "Sunday Morning"};
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  console.log(playlist)
  return playlist;
}
function removeFromPlaylist(playlist, artistName) {
  console.log(delete playlist.artistName);
  console.log(playlist + "ywo");
  return playlist;

}

updatePlaylist(playlist, "These Guys", "I'll Be Fine")
removeFromPlaylist(playlist, "Maroon 5");