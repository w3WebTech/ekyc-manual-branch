<template>
  <div class="video-container">
    <video ref="video" autoplay playsinline></video>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import * as tf from '@tensorflow/tfjs';
import * as blazeface from '@tensorflow-models/blazeface';

export default defineComponent({
  setup() {
    const video = ref<HTMLVideoElement | null>(null);

    onMounted(async () => {
      const model = await blazeface.load();
      if (navigator.mediaDevices.getUserMedia) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          if (video.value) {
            video.value.srcObject = stream;
            video.value.onloadedmetadata = () => {
              video.value.play(); // Ensure the video starts playing
              detect(model);
            };
          }
        } catch (error) {
          console.error("Error accessing the camera", error);
        }
      } else {
        console.error("getUser Media not supported on your browser!");
      }
    });

    const detect = async (model: blazeface.BlazeFaceModel) => {
      if (video.value) {
        const predictions = await model.estimateFaces(video.value, false);

        if (predictions.length > 0) {
          console.log("Faceliveness detected:", predictions);
        } else {
          console.log("No faces detected.");
        }

        // Request the next animation frame for continuous detection
        requestAnimationFrame(() => detect(model));
      }
    };

    return { video };
  }
});
</script>

<style scoped>
.video-container {
  width: 100%;
  height: 100%;
}
video {
  width: 100%;
  height: 100%;
}
</style>