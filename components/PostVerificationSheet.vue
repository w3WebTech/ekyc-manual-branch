<template>
<div v-if="showSmallBottomSheet" class="overlay" :style="{ opacity: showSmallBottomSheet ? 0.5 : 0 }"></div>
  <div>
    <!-- Bottom Sheet -->
    <div
      class="fixed inset-x-0 bottom-0 transform transition-transform duration-300 ease-in-out z-50"
      :class="{ 'translate-y-full': !isVisible || showOtpVerification }"
    >
      <div class="bg-white rounded-t-2xl p-8 relative shadow-xl">
        <!-- Back Button -->
        <button 
          
          class="absolute left-4 top-4 p-2 py-6 text-gray-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

      
 <div class="flex flex-col  mt-10 mx-1 ">
          <h2 class="text-2xl font-bold mb-4">Add your email</h2>
          <p class="text-gray-600 mb-6">This is where we'll send you important updates and insights on the market.</p>
          <input v-model="email" type="email" placeholder="Enter email" class="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-[#1E1B4B] mb-6">
          <button 
          @click="handleDone(email)"
              :disabled="!email"
                 class="w-full py-3 rounded-lg font-medium transition-colors"
            :class="isValidEmail(email) ? 'bg-[#1E1B4B] text-white' : 'bg-gray-200 text-gray-500'"
          >
            Verify email
          </button>
          <p class="text-gray-600 mt-2 text-center">or</p>
          <button 
            @click="openSmallBottomSheet"
            class="bg-[#1A1442] text-white py-2 px-4 inline-flex items-center justify-center focus:outline-none focus:shadow-outline mt-4 w-full rounded-lg font-medium transition-colors"
          >
            <img src="public/images/google-Photoroom.png" alt="Google" class="w-8 h-8 mx-3" />
            <span>Continue with Google</span>
          </button>
        </div>
      </div>
    </div>
    <SmallBottomSheet 
      :is-visible="showSmallBottomSheet" 
      @close="closeSmallBottomSheet" 
    />
    <!-- OTP Verification -->

  </div>
</template>
<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black; /* Adjust background color as needed */
  transition: opacity 0.3s ease;
  z-index: 40; /* Ensure it is below the bottom sheet */
}
</style>
<script setup lang="ts">
import { ref } from 'vue';
import SmallBottomSheet from './SmallBottomSheet.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps<{
  isVisible: boolean;
  phoneNumber: string;
  userName?: string;
}>();

const emit = defineEmits(['close', 'verified', 'skip']);

const showOtpVerification = ref(false);
function isValidEmail(email: string): boolean {
    // Regular expression for validating an email
    const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Test the email against the regex
    return emailRegex.test(email);
}



const showSmallBottomSheet = ref(false);
const email = ref('');





const openSmallBottomSheet = () => {
  showSmallBottomSheet.value = true;
};

const closeSmallBottomSheet = () => {
  showSmallBottomSheet.value = false;
};

const handleDone = (email: any) => { 
let val=isValidEmail(email)
if(val){
  router.push('/SecondStep');
}
else{
  console.log("error")
}
  
};
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