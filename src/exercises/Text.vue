<template>
    <div class="hello-world">
        <h1><!-- PLACE MESSAGE HERE--></h1>
        <p class="reverse-message"></p>
        <p class="to-uppercase"></p>
        <div id="styled-red"></div>
        <div id="should-render">
            <p>This will shown when shouldRender flag is true</p>
        </div>
        <ul></ul>
        <button>click me!</button>
        <input />
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: 'Hello World!',
      reversedMessage: 'Introduction to Vue',
      upperCaseMessage: 'Should be uppercase text',
      applyClass: true,
      shouldRender: false,
      listData: [1, 2, 3],
      buttonClickCount: 0,
      inputText: '',
    };
  },
  computed: {},
  methods: {},
};
</script>

<style>
.red {
  color: red;
}
</style>
