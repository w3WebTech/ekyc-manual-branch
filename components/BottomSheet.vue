<template>
  <div>
    <!-- Initial Bottom Sheet -->
    <div>
      <!-- Background Overlay -->
      <div 
        v-show="isVisible && !showTruecaller"
        class="fixed inset-0  duration-300"
        :class="{ 'opacity-0': !isVisible }"
        
      ></div>

      <!-- Bottom Sheet -->
      <div
        class="fixed inset-x-0 bottom-0 transform transition-transform duration-300 ease-in-out z-50"
        :class="{ 'translate-y-full': !isVisible || showTruecaller }"
      >
        <div class="bg-white rounded-t-2xl p-8 min-h-[60vh] relative shadow-xl">
          <h2 class="text-[#1E1B4B] text-3xl font-bold mb-4">Ready to get started?</h2>
          <p class="text-gray-600 mb-8">Enter your number to help us set up your investment account.</p>

          <div class="flex gap-4 mb-8">
            <div class="bg-gray-100 px-4 py-3 rounded-lg">
              <span class="text-gray-700">+91</span>
            </div>
            <input
              type="tel"
              v-model="phoneNumber"
              class="bg-gray-50 cursor-pointer border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1E1B4B] focus:border-[#1E1B4B] block w-full p-2.5"
              placeholder="Enter phone number"
              required
            />
          </div>

          <div class="flex items-center gap-3 mb-12">
            <button
              class="w-6 h-6 rounded-md flex items-center justify-center cursor-pointer"
              :class="whatsAppEnabled ? 'bg-green-500' : 'bg-gray-200'"
              @click="toggleWhatsApp"
            >
              <svg
                v-if="whatsAppEnabled"
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <span class="text-gray-600">Enable WhatsApp notifications</span>
          </div>

          <p class="text-center text-gray-500 text-sm mb-8">
            By proceeding, you accept Ventura's
            <a href="#" class="text-[#1E1B4B]">Terms of Use</a> and
            <a href="#" class="text-[#1E1B4B]">Privacy Policy</a>
          </p>

          <button
            @click="handleContinue"
            class="w-full bg-[#1E1B4B] text-white py-4 rounded-lg font-medium cursor-pointer"
            :disabled="!phoneNumber && phoneNumber.length != 10"
              :class="phoneNumber && phoneNumber.length == 10 ? 'bg-[#1E1B4B] text-white' : 'bg-gray-200 text-gray-500'"
          >
            Continue
          </button>
        </div>
      </div>
    </div>

    <!-- Truecaller Verification Sheet -->
    <TruecallerVerification
      :is-visible="showTruecaller"
      :phone-number="phoneNumber"
      :user-name="'Ramanathan Karthick'"
      @close="closeTruecaller"
      @verified="handleVerified"
      @skip="handleSkip"
    />
       <PostVerificationSheet
      :is-visible="showPostVerification"
      @close="closePostVerification"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

import TruecallerVerification from './TrueCallerVerification.vue';
const showPostVerification = ref(false);
const isVisible = ref(false);
const showTruecaller = ref(false);
const phoneNumber = ref("");
const whatsAppEnabled = ref(true);

const toggleWhatsApp = () => {
  whatsAppEnabled.value = !whatsAppEnabled.value;
};

const closeBottomSheet = () => {
  isVisible.value = false;
};

const handleContinue = () => {
  if (phoneNumber.value && phoneNumber.value.length == 10) {
    showTruecaller.value = true;
  }
};

const closeTruecaller = () => {
  showTruecaller.value = false;
};

const handleVerified = () => {
  console.log('Verified with Truecaller');
  showTruecaller.value = false;
  isVisible.value = false;
  showPostVerification.value = true; // Show post-verification sheet
};

const closePostVerification = () => {
  showPostVerification.value = false; // Close post-verification sheet
};

const handleSkip = () => {
  console.log('Skipped Truecaller verification');
  showTruecaller.value = false;
};

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 1000);
});
</script>