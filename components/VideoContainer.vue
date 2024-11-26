<template>
  <div>
    <div class="relative w-72 h-72 bg-gray-100 rounded border-2 border-red-500 overflow-hidden">
      <video ref="video" autoplay playsinline class="absolute w-full h-full object-cover"></video>
      <canvas ref="canvas" class="absolute w-full h-full"></canvas>
    </div>
    <div class="text-center mt-4">
      <p>Distance Score: {{ distanceScore }}%</p>
      <p>Alignment Score: {{ alignmentScore }}%</p>
      <button
        :disabled="!canCapture"
        @click="captureImage"
        class="btn btn-primary mt-2"
      >
        Capture
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const video = ref<HTMLVideoElement | null>(null);
const canvas = ref<HTMLCanvasElement | null>(null);
const distanceScore = ref(0);
const alignmentScore = ref(0);
const canCapture = ref(false);

const { $initializeMediaPipe } = useNuxtApp();

onMounted(async () => {
  if (video.value) {
    const { faceMesh, camera } = await $initializeMediaPipe(video.value, handleResults);
    camera.start();
  }
});

function handleResults(results: any) {
  // Example processing of results
  if (results.multiFaceLandmarks) {
    distanceScore.value = calculateDistanceScore(results); // Implement this function
    alignmentScore.value = calculateAlignmentScore(results); // Implement this function
    canCapture.value = true; // Enable capture if results are available
  }
}

function calculateDistanceScore(results: any): number {
  // Implement your logic to calculate distance score based on results
  return Math.random() * 100; // Placeholder implementation
}

function calculateAlignmentScore(results: any): number {
  // Implement your logic to calculate alignment score based on results
  return Math.random() * 100; // Placeholder implementation
}

function captureImage() {
  if (canvas.value) {
    const ctx = canvas.value.getContext('2d');
    if (ctx && video.value) {
      ctx.drawImage(video.value, 0, 0, canvas.value.width, canvas.value.height);
      // Capture image logic (e.g., save or upload the image)
    }
  }
}
</script>

<style scoped>
/* Add any styles you need here */
</style>