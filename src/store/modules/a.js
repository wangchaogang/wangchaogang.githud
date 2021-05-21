export default {
    // namespaced: true,
    state:{
        a:12
    },
    getters:{
        g_a(state,b,c,d){
            console.log(state,b,c,d)
            return 'hello a'
        }
    },
    mutations:{},
    actions:{}
}