<template>
  <div class="bg-themeBaseColor h-screen overflow-hidden">
    <div class="md:mx-auto md:w-[50%] md:py-12">
      <div class="md:mx-20">
        <div class="bg-white rounded-2xl md:p-10 sm:p-5 sm:mx-5 sm:my-10 md:shadow-2xl">
          <div class="card-slide-in">
            <div class="">
              <div class="flex justify-start py-3">
                <img src="public/images/logo.jpg" alt="Google" class="w-14 h-14" />
                <img src="public/images/goodwillname.jpg" alt="Google" class="w-45 h-14 mx-2" />
              </div>
              <h1 class="text-2xl font-semibold mb-2 text-bigtext">Enter Your Details</h1>
              <div>
                <label class="block text-sm font-semibold text-bigtext mb-1">Mother's Name</label>
                <input
                  v-model="mName"
                  type="text"
                  id="Name"
                  placeholder="Enter here"
                  class="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:bg-blue-50 focus:border-themeBaseColor mb-6"
                />
                <!-- <p class="text-sm text-gray-500">Your IP Address: {{ ipAddress }}</p> -->
              </div>
                <div>
                <label class="block text-sm font-semibold text-bigtext mb-1">Your IP Address</label>
                <input
                  v-model="ipAddress"
          
                  readonly
                  
                  class="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:bg-blue-50 focus:border-themeBaseColor mb-6"
                />
           
              </div>
            </div>
            <div class="md:my-10">
              <div>
                <button
                  type="submit"
                  class="w-full bg-themeBaseColor text-white rounded-lg py-3 font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                  @click="completeAdhar"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="isPreviewOpen"
      class="fixed inset-0 z-50 overflow-y-auto sm:mx-4 w-500"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          @click="closePreview"
        ></div>
        <div
          class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden md:w-[40%] shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full sm:p-6"
        >
          <div class="absolute top-0 right-0 pt-4 pr-4">
            <button
              @click="closePreview"
              class="bg-white rounded-md text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">Close</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="mt-3 text-center sm:mt-0 sm:text-left">
            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
              Document Preview
            </h3>
            <div class="mt-4">
              <div v-if="currentPreviewUrl">
                <template v-if="currentFileType?.startsWith('image/')">
                  ```html
                  <img
                    :src="currentPreviewUrl"
                    class="w-full h-auto"
                    :alt="currentFileName"
                  />
                </template>
                <template v-else-if="currentFileType === 'application/pdf'">
                  <object
                    :data="currentPreviewUrl"
                    type="application/pdf"
                    height="400px"
                    width="100%"
                  ></object>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@keyframes slideIn {
  from {
    transform: translateY(100%); 

  }
  to {
    transform: translateY(0); 
   
  }
}


.card-slide-in {
  animation: slideIn 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) forwards; 
}
</style>
<script setup lang="ts">
import { ref, computed, onUnmounted, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();
const mName = ref("");
const ipAddress = ref("");

const fetchIpAddress = async () => {
  try {
    const response = await axios.get("https://api.ipify.org?format=json");
    ipAddress.value = response.data.ip;
  } catch (error) {
    console.error("Error fetching IP address:", error);
  }
};

onMounted(() => {
  fetchIpAddress();
});

// Other existing code...

</script>