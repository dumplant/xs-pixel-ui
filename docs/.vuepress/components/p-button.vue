<template>
    <button 
        :class="hasOutline ? 'p-btn-outlined-' + type : 'p-btn-' + type"
        @click="handleClick">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'p-button',
    props: {
        hasOutline: Boolean,
        type: {
            type: String,
            default: 'default'
        }
    },
    methods: {
        handleClick(evt) {
            this.$emit('click', evt);
        }
    }
}
</script>

<style lang="scss">
@import 'css/components/button.scss'
</style>
