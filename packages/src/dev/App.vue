<script setup lang="ts">
import VerticalTimeLine from '../components/VerticalTimeLine/VerticalTimeLine.vue'

const sections = [
  { title: 'タイトル1', content: 'ここに文章を入れます。ここに文章を入れます。ここに文章を入れます' },
  { title: 'タイトル2', content: 'ここに文章を入れます。ここに文章を入れます。ここに文章を入れます' },
]
</script>

<template>
  <!-- <WindowBox /> -->
  <VerticalTimeLine :sections="sections" />
  <!-- <ProgressRectangle />
  <ProgressCircular width="48" height="48" color="blue" /> -->
  <TerminalBox />
</template>

<style scoped></style>
