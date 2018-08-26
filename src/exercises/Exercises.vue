<template>
    <div class="hello-world">
        <h1><!-- Place the title here --></h1>

        <p class="reverse-message"><!-- Convert reversedMessage here --></p>

        <p class="to-uppercase"><!-- Convert upperCaseMessage here --></p>

        <div id="styled-red"><!-- Apply the red class to this div based on the applyClass condition --></div>

        <div id="should-render">
            <p>This will show when shouldRender flag is true</p>
        </div>

        <ul><!-- Render a list from listData --></ul>

        <!-- Apply a click handler here to increment buttonClickCount per click -->
        <button>click me!</button>

        <!-- I will two way bind inputText data property! -->
        <input />
    </div>
</template>

<script>
export default {
  data: function() {
    // You won't need to touch this data
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
