<template>
  <div class="space-y-3">
    <div class="border-2 border-dashed border-gray-300 rounded-lg p-6" 
         :class="{ 'bg-gray-50': isDragging }"
         @dragenter.prevent="isDragging = true"
         @dragleave.prevent="isDragging = false"
         @dragover.prevent
         @drop.prevent="handleDrop">
      
      <div v-if="!selectedFile" class="text-center">
        <svg class="mx-auto h-8 w-8 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4-4m4-4h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <div class="mt-1 flex text-sm justify-center">
          <label class="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500">
            <span>Upload Aadhaar</span>
            <input type="file" class="sr-only" accept="image/*,.pdf" @change="handleFileSelect">
          </label>
          <p class="pl-1 text-gray-500">or drag and drop</p>
        </div>
        <p class="text-xs text-gray-500 mt-2">PDF or images up to 5MB</p>
      </div>

      <div v-else class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="flex-shrink-0">
            <svg class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate">
              {{ selectedFile.name }}
            </p>
            <p class="text-sm text-gray-500">
              {{ formatFileSize(selectedFile.size) }}
            </p>
          </div>
        </div>
        <div class="flex space-x-3">
          <button @click="openPreview" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">
            View
          </button>
          <button @click="removeFile" class="text-sm font-medium text-red-600 hover:text-red-500">
            Remove
          </button>
        </div>
      </div>
    </div>

    <!-- Preview Modal -->
    <div v-if="isPreviewOpen" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="closePreview"></div>

        <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div class="absolute top-0 right-0 pt-4 pr-4">
            <button @click="closePreview" class="bg-white rounded-md text-gray-400 hover:text-gray-500">
              <span class="sr-only">Close</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div class="mt-3 text-center sm:mt-0 sm:text-left">
            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
              Document Preview
            </h3>
            <div class="mt-4">
              <div v-if="previewUrl" class="aspect-w-16 aspect-h-9">
                <img v-if="isImage" :src="previewUrl" class="object-contain w-full h-full" :alt="selectedFile.name">
                <iframe v-else :src="previewUrl" class="w-full h-[500px]" frameborder="0"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['file-selected', 'file-removed']);

const isDragging = ref(false);
const selectedFile = ref<File | null>(null);
const previewUrl = ref<string | null>(null);
const isPreviewOpen = ref(false);
const isImage = ref(false);

const handleFileSelect = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    processFile(input.files[0]);
  }
};

const handleDrop = (event: DragEvent) => {
  isDragging.value = false;
  if (event.dataTransfer?.files.length) {
    processFile(event.dataTransfer.files[0]);
  }
};

const processFile = (file: File) => {
  if (file.size > 5 * 1024 * 1024) {
    alert('File size should not exceed 5MB');
    return;
  }

  selectedFile.value = file;
  isImage.value = file.type.startsWith('image/');
  previewUrl.value = URL.createObjectURL(file);
  emit('file-selected', file);
};

const removeFile = () => {
  if (previewUrl.value) {
    URL.revokeObjectURL(previewUrl.value);
  }
  selectedFile.value = null;
  previewUrl.value = null;
  isPreviewOpen.value = false;
  emit('file-removed');
};

const openPreview = () => {
  isPreviewOpen.value = true;
};

const closePreview = () => {
  isPreviewOpen.value = false;
};

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// Cleanup on component unmount
onUnmounted(() => {
  if (previewUrl.value) {
    URL.revokeObjectURL(previewUrl.value);
  }
});
</script>