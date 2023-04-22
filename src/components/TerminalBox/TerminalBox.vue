<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps({
  text: { type: String, default: '' },
  textColor: { type: String, default: '#ffffff' },
  textWeight: { type: String, default: 'bold' },
  textSize: { type: String, default: '18px' },
  headerColor: { type: String, default: 'rgba(0, 0, 0, 0.6)' },
  borderRadius: { type: String, default: '5px' },
  bgColor: { type: String, default: 'rgba(0, 0, 0, 0.8)' },
  leftColor: { type: String, default: '#f48384' },
  middleColor: { type: String, default: '#fbd172' },
  rightColor: { type: String, default: '#82c880' },
  maxWidth: { type: String, default: '500px' },
  icons: { type: Boolean, default: false },
})

const styles = computed(() => ({
  '--text-color': props.textColor,
  '--text-weight': props.textWeight,
  '--text-size': props.textSize,
  '--bg-color': props.bgColor,
  '--max-width': props.maxWidth,
  '--header-color': props.headerColor,
}))
</script>

<template>
  <div class="terminal-box" :style="styles">
    <div class="terminal-box_header">
      <svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="window-button">
        <circle cx="15" cy="15" r="5.5" :fill="leftColor" />
        <circle cx="35" cy="15" r="5.5" :fill="middleColor" />
        <circle cx="55" cy="15" r="5.5" :fill="rightColor" />
      </svg>
    </div>
    <div class="terminal-box_content">
      <div v-if="!icons" class="terminal-box_icon-group">
        <div class="terminal-box_icon-wrapper">
          <mdicon class="terminal-box_icon-first" name="apple" :width="20" :height="20" />
          <div class="terminal-box_icon-second-wrapper">
            <mdicon class="terminal-box_icon-second" name="folder-open" :width="20" :height="20" />
            <!-- <span class="terminal-box_icon-path">~/Users/kengo.yamamoto/project_self/codebox-blog</span> -->
          </div>
        </div>
      </div>
      <p class="terminal-box_content-text">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.terminal-box {
  position: relative;
  max-width: var(--max-width);
  margin: 0 auto;
  border-radius: 5px;
  overflow: auto;
}

.terminal-box svg {
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  width: 100%;
  background-color: var(--header-color);
}

.terminal-box_header {
  height: 30px;
}

.terminal-box_content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px 30px 20px 10px;
  background-color: var(--bg-color);
}
.terminal-box_icon-group {
  overflow: hidden;
}
.terminal-box_content-text {
  padding: 0;
  margin: 0;
  color: var(--text-color);
  font-weight: var(--text-weight);
  font-size: var(--text-size);
  line-height: 25px;
  font-family: Arial, Helvetica, sans-serif;
}
.terminal-box_icon-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  height: 30px;
  margin: 0;
  margin-right: 30px;
  background: blue;
}

.terminal-box_icon-wrapper::before {
  position: absolute;
  top: -50%;
  left: -30px;
  transform: rotate(15deg);
  width: 80px;
  height: 200%;
  background-color: rgba(154, 154, 154, 1);
  content: '';
}

.terminal-box_icon-wrapper::after {
  width: 0px;
  height: 0px;
  border: solid 15px blue;
  border-color: transparent transparent transparent blue;
  background-color: transparent;
  margin: 0 auto 20px;
  padding: 0;
  position: absolute;
  top: 0;
  right: -30px;
  content: '';
}
.terminal-box_icon-first {
  position: relative;
  margin: 0 1em;
  color: black;
}
.terminal-box_icon-second-wrapper {
  display: flex;
  align-items: center;
}
.terminal-box_icon-second {
  position: relative;
  margin: 0 1em;
  color: white;
}

/* .terminal-box_icon-path {
  color: white;
  font-family: Arial, Helvetica, sans-serif;
} */
</style>
