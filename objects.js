playlist = {"Maroon 5": "Sunday Morning"};
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  console.log(playlist)
  return playlist;
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  console.log(playlist + "ywo");
  return playlist;

}

updatePlaylist(playlist, "These Guys", "I'll Be Fine")
removeFromPlaylist(playlist, "Maroon 5");

var meals = { breakfast: "oatmeal", lunch: "turkey sandwich", dinner: "steak and potatoes" };
 
// the `delete` operator returns `true` if it has successfully
// deleted, `false` otherwise
delete meals.dinner; // true
 
meals;