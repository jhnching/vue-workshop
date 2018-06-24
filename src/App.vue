<template>
  <div id="app">
    <h1>My TODO App</h1>
    <div>Todos remaining: <span :class="{green: todos.length === 0, red: todos.length > 0}">{{ todos.length }}</span></div>
    <div>There are {{ unsavedTodos }} unsaved todos</div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <todo-item :todo="todo" :saveTodo="saveTodo" :editTodo="editTodo" :deleteTodo="deleteTodo"></todo-item>
      </li>
    </ul>
    <button @click="addTodo">Add todo</button>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue'

export default {
  name: 'app',
  components: {
    TodoItem,
  },
  data: function() {
    return {
      todos: [],
      incrementingId: 0,
    }
  },
  computed: {
    unsavedTodos: function() {
      return this.todos.filter(todo => !todo.saved).length;
    }
  },
  methods: {
    findTodo: function(id) {
      return this.todos.find(todo => todo.id === id)
    },
    addTodo: function() {
      this.todos.push({
        id: this.incrementingId++,
        value: '',
        saved: false,
      });
    },
    saveTodo: function(id) {
      const currentTodo = this.findTodo(id);
      currentTodo.value ? currentTodo.saved = true : alert('Please enter a valid Todo');
    },
    editTodo: function(id) {
      this.findTodo(id).saved = false;
    },
    deleteTodo: function(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  }
}
</script>

