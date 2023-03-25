<template>
  <div id="app">
    <base-card imgSrc="1.jpg" summary="Masataka Morizono" />

    <base-card imgSrc="2.jpg" :width="400" :imgHeight="600">
      森园正崇
      <template v-slot:footer>
        <div>
          <div class="level">中级 300人报名</div>
          <div class="price">￥300</div>
        </div>
      </template>
    </base-card>
    <base-demo />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
