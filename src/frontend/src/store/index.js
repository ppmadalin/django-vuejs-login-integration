import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import router from '@/router'

const API = axios.create({
  baseURL: `/api/`,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  },
  timeout: 10000,
  withCredentials: true
})


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: null,
    id: null, 
    posts: null
  },
  mutations: {
    SET_USERNAME(state, payload){
      state.username = payload.username
      state.id = payload.id
    },
    REMOVE_USER(state){
      state.username = null
      state.id = null
    }, 
    UPDATE_POSTS(state, payload){
      state.posts = payload
    }
  },
  actions: {

    // Login user action
    login({commit}, payload){
     
      API.post('login/', payload).then(response => {
        console.log(response.data)
        commit('SET_USERNAME', response.data)
        router.push({name: 'Admin'})
      })
    },

    // Logout user action
    logout({commit}){

      
      API.get('logout/').then(response => {
        commit('REMOVE_USER')
        console.log(response),router.push({name: 'Home'}) 
      })
    },

    // Get posts action
    getPosts({commit}){
      API.get('posts/').then(response => {
        console.log(response)
        commit('UPDATE_POSTS', response.data)
      }).catch(error => {
        if (error.response.status == 403){
          console.log("You don't have access")
        }
      })
    }

  },
});
