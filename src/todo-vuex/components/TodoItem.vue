<template>
  <div id="todo-item">
  <span v-if="todo.saved">
    {{ todo.value }}
    <button @click="editTodo(todo)">edit</button>
  </span>
  <span v-else>
    <input v-model="todo.value"/>
    <button @click="saveTodo(todo)">save</button>
  </span>
  <button @click="deleteTodo(todo)">delete</button>
</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TodoItem',
  props: ['todo'],
  methods: {
    ...mapActions(['saveTodo', 'editTodo', 'deleteTodo']),
  },
};
</script>
