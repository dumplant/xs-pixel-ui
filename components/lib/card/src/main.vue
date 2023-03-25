<template>
  <div class="base-card" :style="width? {width: width + 'px'} : {}">
    <div class="base-card-img" :style="imgHeight ? { height: imgHeight + 'px' } : {}">
      <img :src="imgSrc" alt="img">
    </div>
    <div v-if="summary" class="base-card-summary">
      {{summary}}
    </div>
    <div v-else class="base-card-summary">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>

export default {
  name: 'base-card',
  props: {
    width: { // 图片宽度
      type: Number,
      default: 0,
    },
    imgSrc: { // 图片来源
      type: String,
      default: '',
    },
    imgHeight: { // 卡片高度
      type: Number, 
      default: 0,
    },
    summary: { // 卡片概要
      type: String,
      default: '',
    }
  }
}
</script>

<style scoped></style>
