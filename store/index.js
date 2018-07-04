import Vuex from 'vuex'
import Cookie from 'js-cookie'

var cookieparser = require('cookieparser')

const createStore = () => {
  return new Vuex.Store({
    state: {
      auth: null
    },
    mutations: {
      update (state, data) {
        state.auth = data;
      }
    },
    actions: {
      nuxtServerInit ({ commit }, { req }) {
        // let accessToken = null
        if (Cookie.get('auth') && state.auth === null) {
          let accessToken = Cookie.get('auth');
          // var parsed = cookieparser.parse(req.headers.cookie)
          // accessToken = JSON.parse(parsed.auth || null)
          commit('update', accessToken);
        }
      },
      logout ({ commit }) {
        Cookie.remove('auth')
        commit('update', null)
      }
    }
  })
}

export default createStore