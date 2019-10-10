import * as types  from './mutation-type'
const mutations = {
    [types.SET_PLAYCONTENT](state,boole){
        state.playcontent = boole
    },
    [types.SET_PLAYING](state,bool){
        state.playing = bool
    },
    [types.SET_PLAYLIST](state,list){
        state.playlist = list
    },
    [types.SET_CURRENT](state,num){
        state.current = num
    },
    [types.SET_MODE](state,num){
        state.mode = num
    },
    [types.SET_SJ_PLAYLLIST](state,lists){
        state.sjplaylist = lists
    },
    [types.SET_MV](state,mv){
        state.mv = mv
    }
}

export default mutations