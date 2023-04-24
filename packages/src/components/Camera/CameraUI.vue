<script setup lang="ts">
import { computed, ref, onMounted, onBeforeMount } from 'vue'
import { isMobile } from '@/plugins/uaParser'
import { useCameraError } from '@/composable/useCameraError'

defineEmits(['video-play', 'video-pause', 'video-loadeddata', 'video-timeupdate', 'video-canplay', 'video-canplaythrough', 'video-statechanged', 'video-ready'])

const video = ref<HTMLVideoElement | null>()
const canvas = ref()
const isMobileDevice = isMobile()

const currentStream = ref<MediaStream | null>(null)
const currentTrack = ref<MediaStreamTrack | null>(null)

const facingMode = computed(() => {
  return !isMobileDevice ? 'user' : 'environment'
})

const setConstraints = async (): Promise<any> => {
  return {
    video: {
      width: {
        ideal: isMobileDevice ? 1280 : 1920,
      },
      facingMode: facingMode,
    },
    audio: false,
  }
}

const cameraStart = async (): Promise<void> => {
  if (!video.value) return

  await cameraStop()

  try {
    const constraints = await setConstraints()

    // MediaStream オブジェクトを取得する
    currentStream.value = await navigator.mediaDevices.getUserMedia(constraints)
    // MediaStreamTrack オブジェクトのリストで、 MediaStream オブジェクトに格納されているものの中で
    // kind 属性が video に設定されている最初のものを返却する
    currentTrack.value = currentStream.value.getVideoTracks()[0]

    video.value.srcObject = currentStream.value
  } catch (error: any) {
    const cameraError = useCameraError(error)
    console.log(cameraError)
  }
}

const cameraStop = async (): Promise<void> => {
  if (!video.value) return
  video.value.pause()

  await new Promise((resolve) => setTimeout(resolve, 0))

  if (currentTrack.value) {
    currentTrack.value.stop()
  }
}

onMounted(() => cameraStart())

onBeforeMount(() => cameraStop())
</script>

<template>
  <div class="camera-ui">
    <canvas ref="canvas" class="camera-ui_canvas" />
    <video
      ref="video"
      class="camera-ui_video"
      autoplay
      playsinline
      muted
      @play="$emit('video-play')"
      @pause="$emit('video-pause')"
      @loadeddata="$emit('video-loadeddata')"
      @timeupdate="$emit('video-timeupdate')"
      @canplay="$emit('video-canplay')"
      @canplaythrough="$emit('video-canplaythrough')"
      @statechanged="$emit('video-statechanged')"
      @ready="$emit('video-ready')"
    />
  </div>
</template>

<style scoped lang="css">
.camera-ui,
.camera-ui_canvas,
.camera-ui_video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
