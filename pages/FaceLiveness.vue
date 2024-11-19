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
    const successMessage = ref(false);
    const isCaptureDisabled = ref(true);
    const modalMessage = ref("");
    const secondModalMessage = ref("");
    const thirdModalMessage = ref("");

   onMounted(() => {
  if (process.client) {
    nextTick(() => {
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
  }
});

    const onResults = (results) => {
      if (imageCaptured) return;

      canvasCtx.save();
      canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
      canvasCtx.drawImage(
        results.image,
        0,
        0,
        canvasElement.width,
        canvasElement.height
      );

      const numFaces = results.multiFaceLandmarks
        ? results.multiFaceLandmarks.length
        : 0;

      const dis_sc = parseInt(
        distance_score.innerText.match(/\d+/)?.[0] || "0"
      );

      if (numFaces === 1) {
        const landmarks = results.multiFaceLandmarks[0];

        const { faceSize } = calculateFaceSize(landmarks);
        const faceSizeThreshold = 0.02;
        const distanceScore = calculateDistanceScore(
          faceSize,
          faceSizeThreshold
        );
        const distanceScoreDisplay = document.getElementById("distance_score");
        distanceScoreDisplay.innerText = `${distanceScore}%`;

        if (distanceScore < 90) {
          distancemessage.innerHTML = `Your face is too far from the camera. <br> Please move closer.`;
          captureButton.disabled = true;
          return;
        } else if (distanceScore > 90) {
          distancemessage.innerHTML = " ";
          captureButton.disabled = false;
        }

        const alignmentScore = calculateAlignmentScore(landmarks);
        alScoreDisplay.innerText = `${alignmentScore}%`;

        if (alignmentScore >= 85) {
          // Check if eyes are open
          if (!checkEyesOpen(landmarks)) {
            return;
          }

          if (alignmentScore === 100) {
            captureImage();
            imageCaptured = true;
            captureButton.disabled = true;
          }

          detectPupilAndEstimateGaze(landmarks);
          drawFaceOvalLines(canvasCtx, landmarks);
        } else {
          captureButton.disabled = true; // Disable the capture button if alignment score is below 70%
        }
      }

      //  Then, check if there are multiple faces detected
      if (dis_sc >= 90 && numFaces > 1) {
        showModalMessage("Multiple faces detected. Please show only one face.");
        return;
      }

      canvasCtx.restore();
    };

    const captureImage = () => {
      const snapshotCanvas = document.createElement("canvas");
      snapshotCanvas.width = canvasElement.width;
      snapshotCanvas.height = canvasElement.height;
      const snapshotCtx = snapshotCanvas.getContext("2d");
      snapshotCtx.drawImage(
        videoElement,
        0,
        0,
        snapshotCanvas.width,
        snapshotCanvas.height
      );
      const globalBase64Value = snapshotCanvas.toDataURL("image/png");
      snapshot.src = globalBase64Value;
      snapshot.style.display = "block";
      successmsg.style.display = "block";

      captureButton.disabled = true;
      // const alignmentScore = parseInt(alScoreDisplay.innerText.split(':')[1].trim().replace('%', ''));
      check_data(globalBase64Value);
      videoElement.pause();
    };

    return {
      videoElement,
      canvasElement,
      canvasCtx,
      successMessage,
      isCaptureDisabled,
      modalMessage,
      secondModalMessage,
      thirdModalMessage,
      captureImage,
    };
  },
};
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