<template>
  <div>
    <span v-if="todo.saved">
      {{ todo.value }}
      <button @click="$emit('edit-todo', todo)">edit</button>
    </span>
    <span v-else>
      <input v-model="todo.value"/>
      <button @click="$emit('save-todo', todo)">save</button>
    </span>
    <button @click="$emit('delete-todo', todo)">delete</button>
  </div>
</template>

<script>
export default {
  props: ['todo'],
};
</script>
