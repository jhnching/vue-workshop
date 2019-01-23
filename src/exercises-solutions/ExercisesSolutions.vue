<template>
  <div class="hello-world">
    <h1>{{ title }}</h1>

    <p class="reverse-message">
      {{ reverseMessage }}
    </p>

    <p class="to-uppercase">{{ toUpperCase }}</p>

    <div id="styled-red" :class="{ red: shouldApplyClass }"></div>

    <div id="should-render" v-if="shouldRender">
        <p>This will show when shouldRender flag is true</p>
    </div>

    <ul>
      <li v-for="item in listData" :key="item">{{ item }}</li>
    </ul>

    <button @click="incrementCounter()">click me!</button>

    <input v-model="inputText" />
  </div>
</template>

<script>
export default {
  data: function() {
    // You won't need to touch this data
    return {
      title: 'Hello World!',
      toBeReversedMessage: 'Introduction to Vue',
      toBeUpperCasedMessage: 'Should be uppercase text',
      shouldApplyClass: true,
      shouldRender: false,
      listData: [1, 2, 3],
      buttonClickCount: 0,
      inputText: '',
    };
  },
  computed: { 
    reverseMessage: function() {
      return this.toBeReversedMessage.split('').reverse().join('');
    },
    toUpperCase: function() {
      return this.toBeUpperCasedMessage.toUpperCase();
    }
  },
  methods: {
    incrementCounter: function() {
      this.buttonClickCount++;
    }
  },
};
</script>

<style>
.red {
  color: red;
}
</style>
