<template>
  <div class="m-auto w-full h-full border-10 border-gray-800">
    <video
      ref="videoElement"
      class="w-full h-full "
      autoplay
    ></video>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const videoElement = ref<HTMLVideoElement | null>(null);

onMounted(() => {
  const constraints = { video: true };

  navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
      if (videoElement.value) {
        videoElement.value.srcObject = stream;
      }
    })
    .catch((error) => {
      console.error("Error accessing the camera:", error);
      //alert("Error accessing the camera.");
    });
});
</script>

<style scoped>
/* Add any additional styles if needed */
</style>