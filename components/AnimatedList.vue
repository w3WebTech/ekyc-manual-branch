<template>
  <div class="space-y-2">
    <AnimatedItem 
      v-for="(item, index) in items" 
      :key="index"
      :delay="index * 500"
      class="p-3"
    >
      <div class="flex">
        <div class="bg-green-200 rounded-full p-2 flex justify-center items-center text-center">
          <div v-if="item.loading" class="loader"></div>
          <div v-else-if="item.isSettled" class="text-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" class="h-6 w-6">
  <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
</svg>

          </div>

        </div>
        <div class="p-2 typewriter font-bold text-bigtext text-lg">{{ item.text }}</div>
      </div>
    </AnimatedItem>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Initializing items with loading and isSettled states
const items = ref([
  { logo: 'Crediting ₹1 ', text: 'Crediting ₹1', isSettled: false, loading: true },
  { logo: 'logo2.png', text: 'Verifying bank details', isSettled: false, loading: true },
  { logo: 'logo3.png', text: 'Linking You Bank Account', isSettled: false, loading: true },
    { logo: 'logo3.png', text: 'Succesfully linked your account 👍', isSettled: false, loading: true },
 
]);
const emit = defineEmits<{
  (e: 'close'): void
}>()
// Function to simulate loading state for each item
const simulateLoading = () => {
  items.value.forEach((item, index) => {
    setTimeout(() => {
      item.loading = false; // Set loading to false after 2 seconds
      item.isSettled = true; // Randomly set isSettled to true or false
    }, 2000 + index * 1000); // Adding index to stagger the loading for each item
  });
};
watch(
  () => items.value,
  (newItems) => {
    if (newItems.every(item => item.isSettled)) {
      // All items are settled, emit 'close' event
     
       setTimeout(() => {
    emit('close');
  }, 1000);
    }
  },
  { deep: true } // Watch deeply so it checks each item's `isSettled` property
);
// Call the function when the component is mounted
onMounted(() => {
  simulateLoading();
});
</script>

<style scoped lang="scss">
.loader {
  width: 20px;
  aspect-ratio: 4;
  --_g: no-repeat radial-gradient(circle closest-side, green 90%, #0000);
  background: 
    var(--_g) 0%   50%,
    var(--_g) 50%  50%,
    var(--_g) 100% 50%;
  background-size: calc(100%/3) 100%;
  animation: l7 1s infinite linear;
}
@keyframes l7 {
  33% { background-size: calc(100%/3) 0%, calc(100%/3) 100%, calc(100%/3) 100%; }
  50% { background-size: calc(100%/3) 100%, calc(100%/3) 0%, calc(100%/3) 100%; }
  66% { background-size: calc(100%/3) 100%, calc(100%/3) 100%, calc(100%/3) 0%; }
}
.typewriter {
  display: inline-block;
  overflow: hidden; /* Ensures the text is hidden until revealed */
  //border-right: .15em solid orange; /* Cursor effect */
  white-space: nowrap; /* Prevent text from wrapping */
  animation: typing 3s steps(30, end), blink-caret .75s step-end infinite;
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: orange; }
}
</style>