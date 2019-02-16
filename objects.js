var playlist = {'artist': 'song'}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlayList(playlist, artistName) {
  delete playlist[artistName]
}
