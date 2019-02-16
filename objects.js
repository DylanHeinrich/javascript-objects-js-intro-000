var playlist = {'artist': 'song'}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlayist(playlist, artistName) {
  delete playlist[artistName]
}
