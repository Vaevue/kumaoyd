export const playcontent = state => state.playcontent

export const playing = state => state.playing

export const playlist = state => state.playlist

export const current = state => state.current

export const currentSong = (state) => state.playlist[state.current] || {}

export const mode = state => state.mode

export const sjplaylist = state => state.playlist