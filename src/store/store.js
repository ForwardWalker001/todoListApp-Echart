import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos:JSON.parse(localStorage.getItem('todoData') || [])
  },
  getters:{
    remaining: function (state) {
      const ramList = state.todos.filter(todo=>todo.completed==false)
      return ramList.length;
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})