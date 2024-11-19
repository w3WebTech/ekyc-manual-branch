<template>
  <div class="container mx-auto text-center">
    <h1 class="text-3xl text-danger">Face Liveness</h1>
    <div class="flex flex-wrap justify-center gap-2">
      <div class="w-full max-w-md p-4 rounded-lg bg-whitesmoke">
        <div class="video-container">
          <video ref="video" autoplay playsinline></video>
          <canvas ref="canvas"></canvas>
        </div>

        <div class="flex justify-center">
          <div class="notes border-2 border-black flex flex-col items-center">
            <div class="w-full bg-white h-12 flex items-center justify-center">
              <p class="text-danger" id="distance_alert_message"></p>
            </div>
            <p>
              Distance Score: <span id="distance_score"></span><br />
              Alignment Score: <span id="al_score"></span>
            </p>
            <div class="border-2 border-blue-500 w-full">
              <button
                type="button"
                class="btn btn-primary w-full"
                @click="captureImage"
                id="captureButton"
                :disabled="isCaptureDisabled"
              >
                Capture
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="w-full max-w-md p-4 rounded-lg bg-whitesmoke flex flex-col items-center"
      >
        <img
          ref="snapshot"
          src=""
          class="img-thumbnail img-fluid"
          alt="Snapshot"
        />
        <div
          id="success_msg"
          class="alert alert-success w-full mt-2"
          role="alert"
          v-if="successMessage"
        >
          Successfully Took a Photo
        </div>
      </div>
    </div>

    <!-- Modal dialogs -->
    <modal-dialog
      id="alertModal"
      title="Notice"
      :message="modalMessage"
      @close="closeModal"
    />
    <modal-dialog
      id="secondAlertModal"
      title="Notice"
      :message="secondModalMessage"
      @close="closeSecondModal"
    />
    <modal-dialog
      id="thirdAlertModal"
      title="Notice"
      :message="thirdModalMessage"
      @close="closeThirdModal"
    />
  </div>
</template>

<script>
import { ref, onMounted, nextTick } from "vue";
import { FaceMesh } from "@mediapipe/face_mesh";
import { Camera } from "@mediapipe/camera_utils";

export default {
  setup() {
    const videoElement = ref(null);
    const canvasElement = ref(null);
    const canvasCtx = ref(null);
    const alScoreDisplay = ref(null);
    const snapshot = ref(null);
    const successmsg = ref(null);
    const captureButton = ref(null);
    const distancemessage = ref(null);
    const distanceScoreDisplay = ref(null);
    let imageCaptured = false;

    onMounted(() => {
      nextTick(() => {
        // Initialize canvas context after the DOM has been updated
        canvasCtx.value = canvasElement.value.getContext("2d");

        const faceMesh = new FaceMesh({
          locateFile: (file) =>
            `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
        });

        faceMesh.setOptions({
          maxNumFaces: 2,
          refineLandmarks: true,
          minDetectionConfidence: 0.5,
          minTrackingConfidence: 0.5,
        });

        faceMesh.onResults(onResults);

        // Ensure the video element is not null
        if (videoElement.value) {
          const camera = new Camera(videoElement.value, {
            onFrame: async () => {
              await faceMesh.send({ image: videoElement.value });
            },
            width: 300,
            height: 300,
          });

          camera.start().then(() => {
            console.log("Camera started successfully");
          }).catch(err => {
            console.error("Error starting camera:", err);
          });
        } else {
          console.error("Video element is not available");
        }
      });
    });

    const onResults = (results) => {
      if (imageCaptured) return;

      canvasCtx.value.save();
      canvasCtx.value.clearRect(0, 0, canvasElement.value.width, canvasElement.value.height);
      canvasCtx.value.drawImage(
        results.image,
        0,
        0,
        canvasElement.value.width,
        canvasElement.value.height
      );

      const numFaces = results.multiFaceLandmarks
        ? results.multiFaceLandmarks.length
        : 0;

      const dis_sc = parseInt(
        distanceScoreDisplay.value.innerText.match(/\d+/)?.[0] || "0"
      );

      if (numFaces === 1) {
        const landmarks = results.multiFaceLandmarks[0];

        const { faceSize } = calculateFaceSize(landmarks);
        const faceSizeThreshold = 0.02;
        const distanceScore = calculateDistanceScore(
          faceSize,
          faceSizeThreshold
        );
        distanceScoreDisplay.value.innerText = `${distanceScore}%`;

        if (distanceScore < 90) {
          distancemessage.value.innerHTML = `Your face is too far from the camera. <br> Please move closer.`;
          captureButton.value.disabled = true;
          return;
        } else if (distanceScore > 90) {
          distancemessage.value.innerHTML = " ";
          captureButton.value.disabled = false;
        }

        const alignmentScore = calculateAlignmentScore(landmarks);
        alScoreDisplay.value.innerText = `${alignmentScore}%`;

        if (alignmentScore >= 85) {
          // Check if eyes are open
          if (!checkEyesOpen(landmarks)) {
            return;
          }

          if (alignmentScore === 100) {
            captureImage();
            imageCaptured = true;
            captureButton.value.disabled = true;
          }

          detectPupilAndEstimateGaze(landmarks);
         
onMounted(() => {
  nextTick(() => {
    if (canvasElement.value) {
      canvasCtx.value = canvasElement.value.getContext("2d");
      // Rest of your code here
    } else {
      console.error("Canvas element is not available");
    }
  });
});}}}}}
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
video,
canvas {
   display: block; 
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>