<template>
  <div id="app">
    <p-button>Hello</p-button>
    <p-button type="primary" @click="hi">Hello</p-button>
    <p-button type="primary" hasOutline>Hello</p-button>
    <base-card imgSrc="demo.png">summary
      <template v-slot:footer>
        Here is the footer
      </template>
    </base-card>

  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    hi() {
      // this.alert("hi");
      console.log('hi');
    }
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
