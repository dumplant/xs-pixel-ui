<template>
    <label class="checkbox">
      <input type="checkbox" :id="id" :name="name" checked>
      <slot></slot>
    </label>
</template>

<script>

export default {
  name: 'p-checkbox',
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
