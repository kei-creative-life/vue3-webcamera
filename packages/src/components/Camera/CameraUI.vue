<script setup lang="ts">
import { ref, onMounted, onBeforeMount } from 'vue'
import { useCameraError } from '@/composable/useCameraError'
import './CameraUI.css'

const video = ref<HTMLVideoElement | null>()
const canvas = ref()

const currentStream = ref<MediaStream | null>(null)
const currentTrack = ref<MediaStreamTrack | null>(null)

const decideConstraints = async (): Promise<any> => {
  return {
    video: {
      width: {
        // ideal: this.isMobile ? 1280 : 1920,
        ideal: 1920,
      },
    },
    audio: false,
  }
}

const start = async (): Promise<void> => {
  if (!video.value) return

  await stop()

  try {
    const constraints = await decideConstraints()

    currentStream.value = await navigator.mediaDevices.getUserMedia(constraints)
    currentTrack.value = currentStream.value.getVideoTracks()[0]

    video.value.srcObject = currentStream.value
  } catch (error: any) {
    const cameraError = useCameraError(error)
    console.log(cameraError)
  }
}

const stop = async (): Promise<void> => {
  if (!video.value) return
  video.value.pause()

  await new Promise((resolve) => setTimeout(resolve, 0))

  if (currentTrack.value) {
    currentTrack.value.stop()
  }
}

onMounted(() => {
  start()
})

onBeforeMount(() => {
  stop()
})
</script>

<template>
  <div class="camera-ui">
    <canvas ref="canvas" class="camera-ui_canvas" />
    <video ref="video" class="camera-ui_video" autoplay playsinline muted />
  </div>
</template>
