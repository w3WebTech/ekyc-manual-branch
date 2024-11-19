<!--<template>
  <div class="video-container">
    <video ref="video" autoplay height="300" width="300"></video>
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
              if (video.value) {
                video.value.play().catch(error => {
                  console.error("Error playing video:", error);
                });
                detect(model);
              }
            };
          } else {
            console.error("Video element is null after stream assignment");
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

        requestAnimationFrame(() => detect(model));
      } else {
        console.error("Video element is null during detection");
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
  background-color: black;
}
</style> -->
<template>
  <div class="video-container">
    <video ref="video" autoplay playsinline></video>
    <canvas ref="canvas" style="display: none;"></canvas>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import * as tf from '@tensorflow/tfjs';
import * as blazeface from '@tensorflow-models/blazeface';

export default defineComponent({
  setup() {
    const video = ref<HTMLVideoElement | null>(null);
    const canvas = ref<HTMLCanvasElement | null>(null);
    const errorMessage = ref<string | null>(null);

    onMounted(async () => {
      const model = await blazeface.load();
      console.log("BlazeFace model loaded");

      if (navigator.mediaDevices.getUserMedia) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          if (video.value) {
            video.value.srcObject = stream;
            video.value.onloadedmetadata = () => {
              video.value.play();
              detect(model);
            };
          }
        } catch (error) {
          console.error("Error accessing the camera", error);
          errorMessage.value = "Unable to access the camera. Please check your permissions.";
        }
      } else {
        errorMessage.value = "getUserMedia is not supported in this browser.";
      }
    });

    const detect = async (model: blazeface.BlazeFaceModel) => {
      if (video.value && canvas.value) {
        const predictions = await model.estimateFaces(video.value, false);
        const ctx = canvas.value.getContext('2d');

        if (predictions.length > 0) {
          console.log("Faces detected:", predictions);
          ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
          predictions.forEach(prediction => {
            const start = prediction.topLeft;
            const end = prediction.bottomRight;
            ctx.strokeStyle = "red";
            ctx.lineWidth = 2;
            ctx.strokeRect(start[0], start[1], end[0] - start[0], end[1] - start[1]);
          });
        } else {
          console.log("No faces detected.");
        }

        requestAnimationFrame(() => detect(model));
      }
    };

    return { video, canvas, errorMessage };
  }
});
</script>

<style scoped>
.video-container {
  width: 100%;
  height: 100%;
  position: relative;
}
video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.error {
  color: red;
  text-align: center;
}
</style>