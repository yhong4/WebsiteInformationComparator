import Vue from 'vue'
import Vuex, {Store} from 'vuex'
import actions from './actions'
import mutations from './mutations'
import { GlobalState as state } from './state'
import getters from './getters'

Vue.use(Vuex)


const store:Store<any> = new Store({
    state,
    actions,
    getters,
    mutations
})

export default store;