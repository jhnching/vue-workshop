<template>
    <div class="hello-world">
        <h1><!-- Place the title here --></h1>

        <p class="reverse-message"><!-- Convert reversedMessage here --></p>

        <p class="to-uppercase"><!-- Use a method to convert values here --></p>

        <div id="styled-red"><!-- Apply the red class to this div --></div>

        <div id="should-render">
            <p>This will shown when shouldRender flag is true</p>
        </div>

        <ul><!-- Render a list from listData --></ul>

        <!-- Apply a click handler here to increment buttonClickCount per click -->
        <button>click me!</button>

        <!-- I will automatically update inputText data property! -->
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
