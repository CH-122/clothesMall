import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'


Vue.use(Vuex)
const state = {
  cartList: [],
}

const store = new Vuex.Store({
  state,
  // mutations中完成的事情要尽可能单一
  mutations,
  actions,
  getters
})


export default store