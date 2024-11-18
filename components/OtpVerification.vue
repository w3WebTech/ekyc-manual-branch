<template>
  <div>
    <div
      class="fixed inset-x-0 bottom-0 transform transition-transform duration-300 ease-in-out z-[60]"
      :class="{ 'translate-y-full': !isVisible }"
    >
      <div class=" relative h-screen ">
        <!-- Header -->
        <div class="flex items-center justify-between p-4 bg-[#FF7F50]">
          <button 
            @click="$emit('close')"
            class="p-2 text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div class="text-white text-sm">goodwill</div>
        </div>

        <!-- Content -->
        <div class="p-6 rounded-t-xl h-[1000px] overflow-hidden bg-white">
          <h1 class="text-[#1E1B4B] text-3xl font-bold mb-4">OTP sent</h1>
          <p class="text-gray-600 mb-8">
            We have sent an OTP to your mobile number<br/>
            +91 *****{{ phoneNumber.slice(-4) }}
          </p>

          <!-- OTP Input -->
          <div class="flex gap-2 mb-8 mr-3">
            <template v-for="(digit, index) in 6" :key="index">
              <input
                type="text"
                maxlength="1"
                v-model="otpDigits[index]"
                @input="handleOtpInput($event, index)"
                @keydown.delete="handleBackspace($event, index)"
                @keydown.left="focusPrevInput(index)"
                @keydown.right="focusNextInput(index)"
                class="w-[50px] h-[50px] border-2 border-gray-200 rounded-lg text-center text-xl font-semibold focus:border-[#1E1B4B] focus:outline-none "
                :ref="el => inputRefs[index] = el"
              />
            </template>
          </div>

          <!-- Timer -->
          <div class="flex justify-between items-center mb-12">
            <p class="text-gray-600">{{ formatTime(timer) }}</p>
            <button 
              @click="resendOtp"
              :disabled="timer > 0"
              :class="timer > 0 ? 'text-gray-400' : 'text-[#1E1B4B]'"
              class="font-medium"
            >
              Resend OTP
            </button>
          </div>

          <!-- Verify Button -->
          <button
            @click="verifyOtp"
            :disabled="!isOtpComplete"
            class="w-full py-2 rounded-lg font-medium transition-colors"
            :class="isOtpComplete ? 'bg-[#1E1B4B] text-white' : 'bg-gray-200 text-gray-500'"
          >
            Verify OTP
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps<{
  isVisible: boolean;
  phoneNumber: string;
}>();

const emit = defineEmits(['close', 'verified']);

const otpDigits = ref(['', '', '', '', '', '']);
const inputRefs = ref<HTMLInputElement[]>([]);
const timer = ref(60);
let timerInterval: NodeJS.Timer | null = null;

const isOtpComplete = computed(() => {
  return otpDigits.value.every(digit => digit !== '');
});

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}s`;
};

const handleOtpInput = (event: Event, index: number) => {
  const input = event.target as HTMLInputElement;
  const value = input.value;

  // Ensure only numbers are entered
  if (!/^\d*$/.test(value)) {
    otpDigits.value[index] = '';
    return;
  }

  otpDigits.value[index] = value;

  // Move to next input if available
  if (value && index < 5) {
    inputRefs.value[index + 1]?.focus();
  }
};

const handleBackspace = (event: KeyboardEvent, index: number) => {
  if (!otpDigits.value[index] && index > 0) {
    otpDigits.value[index - 1] = '';
    inputRefs.value[index - 1]?.focus();
  }
};

const focusPrevInput = (index: number) => {
  if (index > 0) {
    inputRefs.value[index - 1]?.focus();
  }
};

const focusNextInput = (index: number) => {
  if (index < 5) {
    inputRefs.value[index + 1]?.focus();
  }
};

const startTimer = () => {
  timer.value = 60;
  timerInterval = setInterval(() => {
    if (timer.value > 0) {
      timer.value--;
    } else {
      if (timerInterval) clearInterval(timerInterval);
    }
  }, 1000);
};

const resendOtp = () => {
  if (timer.value === 0) {
    // Reset OTP inputs
    otpDigits.value = ['', '', '', '', '', ''];
    // Restart timer
    startTimer();
    // TODO: Add API call to resend OTP
    console.log('Resending OTP...');
  }
};

const verifyOtp = () => {

  const otp = otpDigits.value.join('');
  console.log('Verifying OTP:', otp);
  // TODO: Add API call to verify OTP
  emit('verified');
};

onMounted(() => {
  startTimer();
});

onUnmounted(() => {
  if (timerInterval) clearInterval(timerInterval);
});
</script>



