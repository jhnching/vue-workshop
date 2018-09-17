import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  todos: [],
  incrementingId: 0,
};

const getters = {
  todos: state => state.todos,
  unsavedTodos: state => state.todos.filter(todo => !todo.saved).length,
};

const mutations = {
  addTodo(state) {
    state.todos.push({
      id: state.incrementingId++,
      value: '',
      saved: false,
    });
  },
  saveTodo(state, payload) {
    payload.todo.saved = true;
  },
  editTodo(state, payload) {
    payload.todo.saved = false;
  },
  deleteTodo(state, payload) {
    state.todos = state.todos.filter(todo => todo !== payload.todo);
  },
};

const actions = {
  addTodo(context) {
    context.commit('addTodo');
  },
  saveTodo(context, todo) {
    context.commit({
      type: 'saveTodo',
      todo,
    });
  },
  editTodo(context, todo) {
    context.commit({
      type: 'editTodo',
      todo,
    });
  },
  deleteTodo(context, todo) {
    context.commit({
      type: 'deleteTodo',
      todo,
    });
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
