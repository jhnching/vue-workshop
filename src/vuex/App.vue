<template>
  <div id="app">
    <h1>My TODO App</h1>
    <div>Todos remaining: <span :class="{green: todos.length === 0, red: todos.length > 0}">{{ todos.length }}</span></div>
    <div>There are {{ unsavedTodos }} unsaved todos</div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <todo-item :todo="todo"></todo-item>
      </li>
    </ul>
    <button @click="addTodo">Add todo</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import TodoItem from './components/TodoItem.vue';
import store from './Store';

export default {
  name: 'app',
  store,
  components: {
    TodoItem,
  },
  computed: {
    ...mapGetters(['todos', 'unsavedTodos']),
  },
  methods: {
    ...mapActions(['addTodo']),
  },
};
</script>
