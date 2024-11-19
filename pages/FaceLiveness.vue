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
  <div class="container text-center">
    <h1 class="text-center text-danger">Face Liveness</h1>
    <div class="row gap-2 justify-content-center">
      <div class="col-xl-6 col-lg-6 col-md-12 p-2 rounded-5" style="background-color:whitesmoke;">
        <div class="video-container">
          <video ref="video" autoplay playsinline></video>
          <canvas ref="canvas"></canvas>
        </div>

        <div class="w-100" style="display: flex; justify-content: center;">
          <div class="notes" style="border: 2px solid black; display: flex; justify-content: center; align-items: center; flex-direction: column;">
            <div class="w-100 bg-white mt-0" style="height: 50px;">
              <p class="text-danger" id="distance_alert_message">{{ distanceAlertMessage }}</p>
            </div>
            <p>Distance Score: <span id="distance_score">{{ distanceScore }}</span><br>Alignment Score: <span id="al_score">{{ alignmentScore }}</span></p>
            <div class="w-100" style="border: 2px solid blue;">
              <div class="d-grid">
                <button type="button" class="btn btn-primary" @click="captureImage" :disabled="captureDisabled">Capture</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-5 col-lg-5 col-md-12 p-2 rounded-5 d-flex justify-content-center align-items-center flex-column" style="background-color:whitesmoke;">
        <img :src="snapshot" class="img-thumbnail img-fluid" alt="Snapshot" v-if="snapshot" />
        <div v-if="successMessage" class="alert alert-success w-100 mt-2" role="alert">
          Successfully Took a Photo
        </div>
      </div>
    </div>
    <!-- Modal dialogs -->
    <div class="modal fade" id="alertModal" tabindex="-1" aria-labelledby="alertModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="alertModalLabel">Notice</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">{{ modalMessage }}</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Try again</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import * as tf from '@tensorflow/tfjs';
import { FaceMesh } from '@mediapipe/face_mesh';
import { Camera } from '@mediapipe/camera_utils';

export default defineComponent({
  setup() {
    const video = ref<HTMLVideoElement | null>(null);
    const canvas = ref<HTMLCanvasElement | null>(null);
    const canvasCtx = ref<CanvasRenderingContext2D | null>(null);
    const distanceScore = ref<number>(0);
    const alignmentScore = ref<number>(0);
    const distanceAlertMessage = ref<string>('');
    const snapshot = ref<string>('');
    const successMessage = ref<boolean>(false);
    const captureDisabled = ref<boolean>(true);
    const modalMessage = ref<string>('');

    const showModal = (message: string) => {
      modalMessage.value = message;
      const modalElement = document.getElementById('alertModal');
      if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
      }
    };

    const calculateAlignmentScore = (landmarks: any) => {
      // Implement your alignment score calculation logic
      return 100; // Placeholder
    };

    const calculateDistanceScore = (landmarks: any) => {
      // Implement your distance score calculation logic
      return 100; // Placeholder
    };

    const onResults = (results: any) => {
      if (canvas.value && canvas .value.getContext) {
        canvasCtx.value = canvas.value.getContext('2d');
        canvasCtx.value.clearRect(0, 0, canvas.value.width, canvas.value.height);
        canvasCtx.value.drawImage(results.image, 0, 0, canvas.value.width, canvas.value.height);

        const numFaces = results.multiFaceLandmarks ? results.multiFaceLandmarks.length : 0;

        if (numFaces === 1) {
          const landmarks = results.multiFaceLandmarks[0];
          distanceScore.value = calculateDistanceScore(landmarks);
          alignmentScore.value = calculateAlignmentScore(landmarks);

          if (distanceScore.value < 90) {
            distanceAlertMessage.value = "Your face is too far from the camera. Please move closer.";
            captureDisabled.value = true;
          } else {
            distanceAlertMessage.value = "";
            captureDisabled.value = false;
          }

          if (alignmentScore.value >= 85) {
            captureImage();
          }
        } else {
          showModal('Multiple faces detected. Please show only one face.');
        }
      }
    };

    const captureImage = () => {
      if (canvas.value) {
        const snapshotCanvas = document.createElement('canvas');
        snapshotCanvas.width = canvas.value.width;
        snapshotCanvas.height = canvas.value.height;
        const snapshotCtx = snapshotCanvas.getContext('2d');
        snapshotCtx?.drawImage(canvas.value, 0, 0);
        snapshot.value = snapshotCanvas.toDataURL('image/png');
        successMessage.value = true;
      }
    };

    onMounted(async () => {
      const faceMesh = new FaceMesh({
        locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`
      });

      faceMesh.setOptions({
        maxNumFaces: 1,
        refineLandmarks: true,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5
      });

      faceMesh.onResults(onResults);

      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          if (video.value) {
            video.value.srcObject = stream;
            video.value.onloadedmetadata = () => {
              video.value.play();
              const camera = new Camera(video.value, {
                onFrame: async () => await faceMesh.send({ image: video.value }),
                width: 300,
                height: 300
              });
              camera.start();
            };
          }
        } catch (error) {
          console.error("Error accessing the camera", error);
          showModal("Unable to access the camera. Please check your permissions.");
        }
      } else {
        showModal("getUser Media is not supported in this browser.");
      }
    });

    return { video, canvas, distanceScore, alignmentScore, distanceAlertMessage, snapshot, successMessage, captureDisabled, modalMessage };
  }
});
</script>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: auto;
  aspect-ratio: 1;
  background-color: #e6e6e6;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
  border: 2px solid red;
}
video, canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.error {
  color: red;
  text-align: center;
}
</style>