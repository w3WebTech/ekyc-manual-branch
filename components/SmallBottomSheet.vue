<template>
 
 
     <div v-if="isVisible" class="fixed bottom-0 w-full flex items-center justify-center z-50">
        
    <div class="bg-white rounded-lg p-5 shadow-lg  h-[400px]" >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="red" className="size-6" class="h-20 w-20 mt-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
      </svg>

      <div class="text-2xl font-bold py-3">Gmail Verification Failed</div>
      <p class="text-md">There was an error when completing this step</p>
      <button @click="closeSheet" class="mt-4 bg-blue-500  text-white px-4 py-2 rounded">
        Try Again
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  isVisible: boolean;
}>();

const emit = defineEmits(['close']);

const closeSheet = () => {
  emit('close');
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black; /* Adjust background color as needed */
  transition: opacity 0.3s ease;
}
</style>