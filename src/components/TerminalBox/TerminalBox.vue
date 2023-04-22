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
  <div class="terminal-box">
    <div class="terminal-box_header">
      <svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ウインドウのボタン">
        <circle cx="15" cy="15" r="5.5" :fill="leftColor" />
        <circle cx="35" cy="15" r="5.5" :fill="middleColor" />
        <circle cx="55" cy="15" r="5.5" :fill="rightColor" />
      </svg>
    </div>
    <div class="terminal-box_content">
      <div class="heading-017">
        <span>🍎</span>
        <span>🏠~</span>
      </div>
      <div class="terminal-box_angle">
        <div class="terminal-box_angle-body" />
      </div>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<style scoped>
.terminal-box_angle {
  position: relative;
}
.terminal-box_angle-body {
  position: absolute;
  right: 0%;
  width: 15px;
  height: 30px;
  background: linear-gradient(to bottom left, transparent 50%, blue 50%) top left/ 100% 50% no-repeat,
    linear-gradient(to top left, transparent 50%, blue 50%) bottom left / 100% 50% no-repeat;
}

.terminal-box {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  border: 2px solid rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  overflow: auto;
}

.terminal-box svg {
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.terminal-box_header {
  height: 30px;
}

.terminal-box_content {
  display: flex;
  padding: 20px 30px 20px 10px;
  background-color: rgba(0, 0, 0, 0.8);
}

.heading-017 {
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
  margin-right: 10px;
  height: 30px;
  width: 150px;
  overflow: hidden;
  border-radius: 5px;
  color: #333333;
  background-color: blue;
}

.heading-017:before {
  position: absolute;
  top: -50%;
  left: -50px;
  z-index: 1;
  transform: rotate(15deg);
  width: 100px;
  height: 200%;
  background-color: rgba(154, 154, 154, 1);
  content: '';
}

.heading-017 span {
  margin: 0 1.1em;
  color: #fff;
  font-size: 0.8em;
}

.terminal-box_content p {
  padding: 0;
  margin: 0;
  margin-left: 10px;
  color: white;
  line-height: 25px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
