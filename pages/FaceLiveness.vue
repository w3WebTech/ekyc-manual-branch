<template>
  <div class="video-container">
    <video ref="video" autoplay></video>
  </div>
</template>

<script lang="ts">
import * as tf from '@tensorflow/tfjs';
import * as blazeface from '@tensorflow-models/blazeface';

export default defineComponent({
  setup() {
    const video = ref<HTMLVideoElement | null>(null);

    onMounted(async () => {
      const model = await blazeface.load();
      if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
          .then((stream) => {
            if (video.value) {
              video.value.srcObject = stream;
              video.value.onloadedmetadata = () => {
                detect(model);
              };
            }
          })
          .catch((error) => {
            console.error("Error accessing the camera", error);
          });
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
