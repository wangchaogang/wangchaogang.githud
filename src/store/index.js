import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import a from './modules/a'
import b from './modules/b'
Vue.use(Vuex)


let getters = {
    g_arr(state){
          let num = 0
          for(let i=0;i<state.arr.length;i++){
            num+=state.arr[i]
          }
          return num
    }
}
let mutations = {
    m_arr(state,num){
        state.arr.push(num)
    },
    m_arr2(state,index){
        state.arr.splice(index,1)
    }
}
let actions = {
    a_arr({commit}){
        commit('m_arr',12)
    }   
}

export default new Vuex.Store({
    modules:{
        a,
        b
    },
    state,
    getters,
    mutations,
    actions
})