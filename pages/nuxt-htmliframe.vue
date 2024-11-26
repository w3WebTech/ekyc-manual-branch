<template>
  <div class="iframe-container">
    <iframe
      src="https://e-kyc-v.vercel.app/new.html"
      width="100%"
      height="600"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</template>

<style scoped>
.iframe-container {
  /* Optional: Add some styling to the iframe container */
  overflow: hidden;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>

<script lang="ts">
export default {
  name: 'IframeComponent',
}
</script>