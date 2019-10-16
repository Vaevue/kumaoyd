export const playcontent = state => state.playcontent

export const playing = state => state.playing

export const playlist = state => state.playlist

export const current = state => state.current

export const currentSong = (state) => state.playlist[state.current] || {}

export const mode = state => state.mode

export const sjplaylist = state => state.playlist

export const mv =  state => state.mv

export const singer = state => state.singer

export const album = state => state.album

export const dj = state => state.dj