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
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  setup() {
    const video = ref<HTMLVideoElement | null>(null);
    const errorMessage = ref<string | null>(null);

    onMounted(async () => {
      // Check if getUserMedia is supported
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          // Request access to the camera
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          if (video.value) {
            video.value.srcObject = stream; // Set the video source to the stream
            video.value.onloadedmetadata = () => {
              video.value.play(); // Start playing the video
            };
          }
        } catch (error) {
          // Handle errors (e.g., user denied access)
          console.error("Error accessing the camera", error);
          errorMessage.value = "Unable to access the camera. Please check your permissions.";
        }
      } else {
        errorMessage.value = "getUserMedia is not supported in this browser.";
      }
    });

    return { video, errorMessage };
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
