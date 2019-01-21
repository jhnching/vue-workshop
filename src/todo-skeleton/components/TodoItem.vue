<template>
  <div>
    <!-- Display the value and edit button -->
    <!-- Shown when completed editing a todo -->
    <span>
      <button>edit</button>
    </span>

    <!-- Allow editing with input and save button -->
    <!-- Shown when editing a todo -->
    <span>
      <input />
      <button>save</button>
    </span>

    <button>delete</button>
  </div>
</template>

<script>
export default {
  props: [],
};
</script>
