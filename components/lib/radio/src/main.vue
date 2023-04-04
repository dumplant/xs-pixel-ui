<template>
    <label class="radio">
      <input type="radio" :id="id" :name="name" checked>
      <slot></slot>
    </label>
</template>

<script>

export default {
  name: 'p-radio',
  props: {
    name: {},
    id: {
      type: String,
      default: '',
    }
  }
}
</script>

<style scoped></style>
