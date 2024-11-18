<template>
  <div>
    <!-- Bottom Sheet -->
    <div
      class="fixed inset-x-0 bottom-0 transform transition-transform duration-300 ease-in-out z-50"
      :class="{ 'translate-y-full': !isVisible || showOtpVerification }"
    >
      <div class="bg-white rounded-t-2xl p-8 relative shadow-xl">
        <!-- Back Button -->
        <button 
          
          class="absolute left-4 top-4 p-2 text-gray-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div class="mt-8">
          <h2 class="text-2xl font-bold mb-2">Hi, {{ userName }}</h2>
          <p class="text-gray-600 mb-8">To get started, please login</p>

          <button 
            @click="handleTruecallerLogin"
            class="w-full bg-[#1E1B4B] text-white py-3 rounded-full font-medium mb-4 flex items-center justify-center"
          >
            USE {{ phoneNumber }}
          </button>

          <button 
            @click="handleSkip"
            class="w-full text-gray-600 py-3 font-medium"
          >
            SKIP
          </button>

          <div class="mt-8 border-t pt-8">
            <p class="text-sm text-gray-500 mb-4 text-center">
              By continuing you consent to share your Truecaller profile information with Ventura
            </p>
            <div class="flex items-center justify-center gap-2 text-gray-400">
              <span>Instant Verification by</span>
              <span class="font-semibold">Truecaller</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- OTP Verification -->
    <OtpVerification
      :is-visible="showOtpVerification"
      :phone-number="phoneNumber"
      @close="closeOtpVerification"
      @verified="handleOtpVerified"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import OtpVerification from './OtpVerification.vue';

const props = defineProps<{
  isVisible: boolean;
  phoneNumber: string;
  userName?: string;
}>();

const emit = defineEmits(['close', 'verified', 'skip']);

const showOtpVerification = ref(false);

const closeBottomSheet = () => {
  emit('close');
};

const handleTruecallerLogin = () => {
  showOtpVerification.value = true;
};

const handleSkip = () => {
  emit('skip');
};

const closeOtpVerification = () => {
  showOtpVerification.value = false;
  emit('close');
};

const handleOtpVerified = () => {
  showOtpVerification.value = false;
  emit('verified');
};
</script>