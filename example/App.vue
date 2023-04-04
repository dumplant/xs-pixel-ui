<template>
  <div id="app">
    <p-button>Hello</p-button>
    <p-button type="primary">Hello</p-button>
    <p-button type="primary" hasOutline>Hello</p-button>
    <p-card>summary
      <template v-slot:text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, repellat.
      </template>
    </p-card>
    <div>
      <p-checkbox id="sea" name="sea">sea</p-checkbox>
      <p-checkbox id="river" name="river">river</p-checkbox>
      <p-checkbox id="lake" name="lake">lake</p-checkbox>
    </div>
    <div>
      <p-radio id="lake1" name="lake">lake1</p-radio>
      <p-radio id="lake2" name="lake">lake2</p-radio>
      <p-radio id="lake3" name="lake">lake3</p-radio>
    </div>



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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px;
}
</style>
