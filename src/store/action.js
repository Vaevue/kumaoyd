import modes from '../common/js/mode'
import * as types from './mutation-type'
function findIndex(list, song) {
    return list.findIndex((item) => {
        return item.id === song.id
    })
}

export const selectplay = function({commit,state},{list,index}){
    commit(types.SET_SJ_PLAYLLIST,list)
    if(state.mode === modes.random){

    }
    commit(types.SET_PLAYLIST,list)
    commit(types.SET_PLAYCONTENT,true)
    commit(types.SET_PLAYING,true)
    commit(types.SET_CURRENT,index)
}