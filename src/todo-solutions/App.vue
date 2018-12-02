<template>
  <div id="app">
    <h1>My TODO App</h1>
    <div>Total # of Todos: <span :class="{green: todos.length === 0, red: todos.length > 0}">{{ todos.length }}</span></div>
    <div>There are {{ unsavedTodos }} unsaved todos</div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <todo-item :todo="todo" @save-todo="saveTodo" @edit-todo="editTodo" @delete-todo="deleteTodo"></todo-item>
      </li>
    </ul>
    <button @click="addTodo">Add todo</button>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue';

export default {
  name: 'app',
  components: {
    TodoItem,
  },
  data: function() {
    return {
      todos: [],
      incrementingId: 0,
    };
  },
  computed: {
    unsavedTodos: function() {
      return this.todos.filter(todo => !todo.saved).length;
    },
  },
  methods: {
    addTodo: function() {
      this.todos.push({
        id: this.incrementingId++,
        value: '',
        saved: false,
      });
    },
    saveTodo: function(todo) {
      todo.saved = true;
    },
    editTodo: function(todo) {
      todo.saved = false;
    },
    deleteTodo: function(todo) {
      this.todos = this.todos.filter(currentTodo => currentTodo.id !== todo.id);
    },
  },
};
</script>
<style>
.red {
  color: red;
}

.green {
  color: green;
}
</style>
