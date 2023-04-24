<script setup lang="ts">
import { ref, onMounted, onBeforeMount } from 'vue'
import { useCameraError } from '@/composable/useCameraError'
import './CameraUI.css'

const video = ref<HTMLVideoElement | null>()
const canvas = ref()

const isPlayVideo = ref(false)
const currentStream = ref<MediaStream | null>(null)
const currentTrack = ref<MediaStreamTrack | null>(null)

const setConstraints = async (): Promise<any> => {
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

const cameraStart = async (): Promise<void> => {
  if (!video.value) return

  await cameraStop()

  try {
    const constraints = await setConstraints()

    // MediaStream オブジェクトを取得する
    currentStream.value = await navigator.mediaDevices.getUserMedia(constraints)
    // MediaStreamTrack オブジェクトのリストで、 MediaStream オブジェクトに格納されているものの中で kind 属性が video に設定されている最初のものを返却する
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

onMounted(() => {
  cameraStart()
})

onBeforeMount(() => {
  cameraStop()
})
</script>

<template>
  <div class="camera-ui">
    <canvas ref="canvas" class="camera-ui_canvas" />
    <video ref="video" class="camera-ui_video" autoplay playsinline muted @play="isPlayVideo = true" />
  </div>
</template>
