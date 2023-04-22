<script setup lang="ts">
defineProps({
  text: { type: String, default: 'This is text.This is text.This is text.This is text.This is text.This is text.This is text.This is text.' },
  textColor: { type: String, default: '#000000' },
  headerColor: { type: String, default: '#000000' },
  borderColor: { type: String, default: '#000000' },
  borderRadius: { type: String, default: '5px' },
  bgColor: { type: String, default: '#000000' },
  leftColor: { type: String, default: '#f48384' },
  middleColor: { type: String, default: '#fbd172' },
  rightColor: { type: String, default: '#82c880' },
  maxWidth: { type: String, default: '500px' },
})
</script>

<template>
  <div class="box-001">
    <svg class="window-bar" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ウインドウのボタン">
      <circle cx="25" cy="12" r="5.5" :fill="leftColor" />
      <circle cx="45" cy="12" r="5.5" :fill="middleColor" />
      <circle cx="65" cy="12" r="5.5" :fill="rightColor" />
    </svg>
    <p>{{ text }}</p>
  </div>
</template>

<style scoped>
.box-001 {
  position: relative;
  max-width: 500px;
  margin: 0 auto;
  padding: calc(1em + 25px) 1.5em 1em;
  border: 2px solid #0088ff;
  border-radius: 5px;
  overflow: auto;
}

.box-001 svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 25px;
  background-color: #0088ff;
}

.box-001 p {
  margin: 0;
  padding: 0;
}
</style>
