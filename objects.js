var playlist = {"Maroon 5": "Sunday Morning"};
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  console.log(playlist)
  return playlist;
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
  return playlist;
}

updatePlaylist(playlist, "These Guys", "I'll Be Fine")
removeFromPlaylist(playlist, "Maroon 5");