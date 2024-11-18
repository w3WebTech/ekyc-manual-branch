<template>
  <div class="max-h-screen bg-[#ECE8FF] relative overflow-hidden font-inter">
    <div
      class="fixed inset-0 bg-primary z-40"
      v-if="isOpen"
      
    >
      <div class="flex justify-between">
        <div></div>
        <div class="p-7 text-xl text-white font-bold font-serif">goodwill</div>
      </div>
    </div>
    <div
      class="fixed h-[90%] bottom-0 left-0 right-0 bg-white z-50 transition-transform transform rounded-t-xl"
      :class="{ 'translate-y-0': isOpen, 'translate-y-full': !isOpen }"
    >
      <div
        class="md:w-[40%] md:flex md:mx-auto md:justify-center md:items-center"
      >
        <!-- <div class="absolute inset-0 grid grid-cols-12 h-[300px]">
        <div v-for="i in 48" :key="i" class="border border-[#dad3fc]"></div>
      </div> -->
        <div >
          <div class="md:pt-5 sm:pt-10 pb-5 relative">
            <!-- <div class="flex items-center justify-center text-center">
          <img
            src="public/images/ventura.jpeg"
            alt="Google"
            class="w-30 h-30"
          />
        </div> -->

            <div class="rounded-lg px-2">
              <div class="flex flex-col">
                <div class="flex items-center align-center space-x-10">
                  <div class="bg-green-200 rounded-full p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="green"
                      class="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>

                  <div class="mb-4">
                     

                    <h3 class="text-md font-bold text-bigtext">Complete e-KYC</h3>
                    <p class="text-mdtext text-sm">
                      Keep your Aadhaar and PAN card handy
                    </p>
                  </div>
                </div>

                <div class="flex items-center space-x-10">
                  <div class="bg-green-200 rounded-full p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="green"
                      class="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="mb-3">
                     

                    <div class="text-md font-bold text-bigtext">Setup Your Profile</div>
                    <div class="text-mdtext text-sm">
                      Answer a few question about yourself
                    </div>
                  </div>
                </div>
                <div class="flex items-center space-x-10">
                  <div class="bg-green-200 rounded-full p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="green"
                      class="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="mb-3">
                     

                    <h3 class="text-md font-bold text-bigtext">Link your bank a/c</h3>
                    <p class="text-mdtext text-sm">
                      Set the primary account for your transaction
                    </p>
                  </div>
                </div>
                

                <div class="flex items-center space-x-10">
                  <div class="bg-green-200 rounded-full p-3">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="green"
                      class="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="mb-3">
                     

                    <h3 class="text-md font-bold text-bigtext">Confirm it's you</h3>
                    <p class="text-mdtext text-sm">
                      Click a photo and submit your signature
                    </p>
                  </div>
                </div>
                <div class="font-bold text-2xl py-3 px-1 text-bigtext">Next Up...</div>
                <div class="flex items-center space-x-10">
                  <div class="bg-purple-200 rounded-full p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-4 h-4 text-gray-500"
                    >
                      <path
                        d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z"
                      />
                      <path
                        d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z"
                      />
                    </svg>
                  </div>
                  <div class="mb-3">
                     

                    <h3 class="text-md font-bold text-bigtext">eSign Ang Login</h3>
                    <p class="text-mdtext text-sm">
                      Sign your Application and start Investing
                    </p>
                  </div>
                </div>
<div class="sm:fixed sm:bottom-0 sm:left-0 sm:right-0 sm:p-4 bg-white">
        <div class="sm:w-full sm:mx-auto ">
                <button
                type="submit"
                class="w-full text-white rounded-lg py-2 mt-6 font-medium transition-colors disabled:cursor-not-allowed bg-[#1E1B4B] 
"
                    @click="nextStep"
              >
                Continue
              </button>
        </div></div>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </div>
  
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { computed } from "vue";
const router = useRouter();
const isOpen = ref(false);
const openBottomSheet = () => {
  isOpen.value = true;
};
const closeBottomSheet = () => {
  isOpen.value = false;
};
onMounted(() => {
  setTimeout(openBottomSheet, 100);
});

</script>
