// plugins/mediapipe.client.ts
export default defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.provide('initializeMediaPipe', async (videoElement: HTMLVideoElement, onResults: (results: any) => void) => {
    if (process.client) {
      // Dynamically import the Mediapipe packages on the client side
      const { FaceMesh } = await import('@mediapipe/face_mesh');
      const { Camera } = await import('@mediapipe/camera_utils');

      const faceMesh = new FaceMesh({
        locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
      });

      faceMesh.setOptions({
        maxNumFaces: 1,
        refineLandmarks: true,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5,
      });

      faceMesh.onResults(onResults);

      const camera = new Camera(videoElement, {
        onFrame: async () => {
          await faceMesh.send({ image: videoElement });
        },
        width: 300,
        height: 300,
      });

      // Initialize the camera and start the video stream
      await camera.start();

      return { faceMesh, camera };
    }
  });
});