<script setup lang="ts">
interface Props {
  isOpen: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  'update:isOpen': [value: boolean];
  'confirm': [];
}>();

const handleClose = () => {
  emit('update:isOpen', false);
};

const handleConfirm = () => {
  emit('confirm');
};
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg p-6 max-w-sm w-full mx-4 relative">
          <button 
            @click="handleClose"
            class="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            <Icon name="lucide:x" class="w-5 h-5" />
          </button>
          
          <div class="flex justify-center space-x-4 mb-4">
            <Icon name="lucide:camera" class="w-8 h-8 text-green-500" />
            <Icon name="lucide:map-pin" class="w-8 h-8 text-blue-500" />
          </div>
          
          <h2 class="text-xl font-semibold text-center mb-2">
            Allow camera & location access
          </h2>
          
          <p class="text-gray-600 text-center text-sm mb-6">
            In case disabled, please enable permissions from your browser's settings
          </p>
          
          <button
            @click="handleConfirm"
            class="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            OK
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>