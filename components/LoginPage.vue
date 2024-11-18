<template>
  <div v-if="showTruecaller" class="md:my-16 sm:my-20 md:mx-20">
    <div>
      <!-- Content -->
      <div class="p-8 rounded-2xl md:shadow-2xl overflow-hidden bg-white">
        <div class="grid grid-cols-2 py-6">
          <img
            src="public/images/goodwillname.jpg"
            alt="Google"
            class="w-45 h-14"
          />
          <!-- <div class=" inset-0 grid grid-cols-6 w-[100px] p-0 ">
      <div v-for="i in 36" :key="i" class="border border-[rgba(72,52,129,0.1)]"></div>
    </div> -->
        </div>
        <h1 class="text-bigtext text-2xl font-bold my-4 pl-1">
          Enter OTP here
        </h1>
        <p class="text-smtext mb-8 pl-1">
          We have sent an OTP to your mobile number<br />
          +91 *****{{ form.phoneNumber.slice(-4) }}
        </p>

        <!-- OTP Input -->
        <div class="flex gap-2 mb-8 mr-3">
          <template v-for="(digit, index) in 6" :key="index">
            <input
              type="tel"
              maxlength="1"
              v-model="otpDigits[index]"
              @input="handleOtpInput($event, index)"
              @keydown.delete="handleBackspace($event, index)"
              @keydown.left="focusPrevInput(index)"
              @keydown.right="focusNextInput(index)"
              class="md:w-[50px] md:h-[50px] sm:w-[40px] sm:h-[40px] border-2 border-gray-200 rounded-lg text-center text-xl font-semibold focus:border-[#1E1B4B] focus:outline-none"
              :ref="(el) => (inputRefs[index] = el)"
            />
          </template>
        </div>

        <!-- Timer -->
        <div class="flex justify-between items-center mb-12">
          <p class="text-mdtext">{{ formatTime(timer) }}</p>
          <button
            @click="resendOtp"
            :disabled="timer > 0"
            :class="timer > 0 ? 'text-gray-300' : 'text-red-500'"
            class="font-medium"
          >
            Resend OTP
          </button>
        </div>

        <!-- Verify Button -->
        <div class="sm:fixed sm:bottom-0 sm:left-0 sm:right-0 sm:p-4 bg-white">
          <div class="sm:w-full sm:mx-auto">
            <button
              @click="verifyOtp"
              :disabled="!isOtpComplete"
              class="w-full py-3 rounded-lg font-medium transition-colors"
              :class="
                isOtpComplete
                  ? 'bg-[#1E1B4B] text-white   '
                  : 'bg-gray-200 text-white'
              "
            >
              Verify OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class=" md:mx-20" v-else-if="showEmailOtp" >
    <div class="bg-white rounded-2xl md:p-10 sm:p-5 sm:mx-5 sm:my-10 md:shadow-2xl ">
      <!-- Content -->
      <div class="card-slide-in ">
         <div class="flex justify-start py-3">
           <img
          src="public/images/logo.jpg"
          alt="Google"
          class="w-14 h-14"
        />
        <img
          src="public/images/goodwillname.jpg"
          alt="Google"
          class="w-45 h-14 mx-2"
        />
        <!-- <div class=" inset-0 grid grid-cols-6 w-[100px] p-0 ">
      <div v-for="i in 36" :key="i" class="border border-[rgba(72,52,129,0.1)]"></div>
    </div> -->
      </div>
        <h1 class="text-bigtext text-2xl font-bold my-4 pl-1">
          Enter OTP here
        </h1>
        <p class="text-smtext mb-8 pl-1">
          We have sent an OTP to your email id <br />
          ******@gmail.com
        </p>

        <!-- OTP Input -->
        <div class="flex gap-2 mb-8 mr-3">
          <template v-for="(digit, index) in 6" :key="index">
            <input
              type="tel"
              maxlength="1"
              v-model="otpDigits1[index]"
              @input="handleOtpInput1($event, index)"
              @keydown.delete="handleBackspace1($event, index)"
              @keydown.left="focusPrevInput1(index)"
              @keydown.right="focusNextInput1(index)"
              class="md:w-[50px] md:h-[50px] sm:w-[40px] sm:h-[40px] border border-gray-200 rounded-lg text-center text-xl font-semibold focus:border-themeBaseColor focus:outline-none"
              :ref="(el) => (inputRefs1[index] = el)"
            />
          </template>
        </div>

        <!-- Timer -->
        <div class="flex justify-between items-center mb-12">
          <p class="text-mdtext">{{ formatTime(timer1) }}</p>
          <button
            @click="resendOtp1"
            :disabled="timer1 > 0"
            :class="timer1 > 0 ? 'text-gray-300' : 'text-red-500'"
            class="font-medium"
          >
            Resend OTP
          </button>
        </div>

        <!-- Verify Button -->
        <!-- <div class="sm:fixed sm:bottom-0 sm:left-0 sm:right-0 sm:p-4 bg-white">
          <div class="sm:w-full sm:mx-auto"> -->
            <button
              @click="verifyOtpforEmail"
              :disabled="!isOtpComplete1"
              class="w-full py-3 rounded-lg font-medium transition-colors"
              :class="
                isOtpComplete1
                  ? 'bg-themeBaseColor text-white  '
                  : 'bg-gray-200 text-white'
              "
            >
              Verify OTP
            </button>
          <!-- </div>
        </div> -->
      </div>
    </div>
  </div>
  <div v-else-if="EmailHandling" class=" md:mx-20">
    <div class="bg-white rounded-2xl md:p-10 sm:p-5 sm:mx-5 sm:my-10 md:shadow-2xl">
      <div class="card-slide-in">
      <div class="flex flex-col  mx-1">
        <div class="flex justify-start py-3">
           <img
          src="public/images/logo.jpg"
          alt="Google"
          class="w-14 h-14"
        />
        <img
          src="public/images/goodwillname.jpg"
          alt="Google"
          class="w-45 h-14 mx-2"
        />
        <!-- <div class=" inset-0 grid grid-cols-6 w-[100px] p-0 ">
      <div v-for="i in 36" :key="i" class="border border-[rgba(72,52,129,0.1)]"></div>
    </div> -->
      </div>
        <h2 class="text-2xl font-bold mb-4 pl-1 text-bigtext">
          Add your email
        </h2>
        <p class="text-smtext mb-6 pl-1">
          This is where we'll send you important updates and insights on the
          market.
        </p>
        <input
          v-model="email"
          type="email"
          id="email"
          placeholder="Enter email"
          class="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:bg-blue-50 focus:border-themeBaseColor mb-6"
        />
        <!-- <div class="sm:fixed sm:bottom-0 sm:left-0 sm:right-0 sm:p-4 bg-white">
          <div class="sm:w-full sm:mx-auto"> -->
            <button
              @click="handleDone(email)"
              :disabled="!email"
              class="w-full py-3 rounded-lg font-medium transition-colors mt-5"
              :class="
                isValidEmail(email)
                  ? 'bg-themeBaseColor text-white  '
                  : 'bg-gray-200 text-white'
              "
            >
              Verify email
            </button>
            <p class="text-mdtext mt-2 text-center">or</p>
             <!--@click="openVerifygoogle = true"-->
            <button
             
              class="bg-themeBaseColor text-white py-2 px-4 inline-flex items-center justify-center focus:outline-none focus:shadow-outline mt-4 w-full rounded-lg font-medium transition-colors"
            >
              <img
                src="public/images/google-editted.png"
                alt="Google"
                class="w-8 h-8 mx-3"
              />
              <span>Continue with Google</span>
            </button>
          <!-- </div>
        </div> -->
      </div>
      </div>
    </div>
  </div>
<div class="md:mx-20" v-else>
    <div class="bg-white rounded-2xl md:p-10 sm:p-5 sm:mx-5 sm:my-10 md:shadow-2xl ">
   
      <div class="card-slide-in ">
      <div class="flex justify-start py-3">
           <img
          src="public/images/logo.jpg"
          alt="Google"
          class="w-14 h-14"
        />
        <img
          src="public/images/goodwillname.jpg"
          alt="Google"
          class="w-45 h-14 mx-2"
        />
        <!-- <div class=" inset-0 grid grid-cols-6 w-[100px] p-0 ">
      <div v-for="i in 36" :key="i" class="border border-[rgba(72,52,129,0.1)]"></div>
    </div> -->
      </div>

      <h2 class="text-bigtext text-3xl font-bold mb-4 pl-1">
        Ready to get started?
      </h2>
      <p class="text-smtext mb-8 pl-1">
        Enter your number to help us set up your investment account.
      </p>

      <div class="flex gap-4 mb-8">
        <div class="bg-gray-100 px-4 py-3 rounded-lg">
          <span class="text-mdtext">+91</span>
        </div>
        <input
          type="tel"
          id="phoneNumber"
          v-model="form.phoneNumber"
          class="bg-gray-50 border border-gray-300 text-mdtext text-sm rounded-lg focus:border-themeBaseColor focus:bg-blue-50 block w-full p-2.5"
          placeholder="Enter phone number"
          required
          pattern="\d{10}"
          @input="validatePhoneNumber"
          maxlength="10"
        />
      </div>

      <div class="flex items-center gap-3 mb-2">
        <button
          class="w-6 h-6 rounded-md flex items-center justify-center cursor-pointer"
          :class="whatsAppEnabled ? 'bg-themeBaseColor' : 'bg-gray-200'"
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
        <span class="text-smtext">Enable WhatsApp notifications</span>
      </div>
      <p class="text-center text-mdtext font-semibold text-sm py-4">
        Have an account ?
        <span class="text-themeBaseColor font-semibold">Login</span>
      </p>
      <p class="text-center text-smtext text-sm mb-8">
        By proceeding, you accept Ventura's
        <a href="#" class="text-themeBaseColor font-semibold">Terms of Use</a> and
        <a href="#" class="text-themeBaseColor font-semibold">Privacy Policy</a>
      </p>
      <!-- <div class="sm:fixed sm:bottom-0 sm:left-0 sm:right-0 sm:p-4 bg-white">
        <div class="sm:w-full sm:mx-auto"> -->
          <button
            @click="handleContinue"
            class="w-full bg-themeBaseColor text-white py-3 rounded-lg font-medium"
            :disabled="!form.phoneNumber && form.phoneNumber.length != 10"
            :class="
              form.phoneNumber && form.phoneNumber.length == 10
                ? 'bg-[#1E1B4B] text-white  '
                : 'bg-gray-200 text-gray-500'
            "
          >
            Continue
          </button>
        <!-- </div>
      </div> -->
    </div>
    </div>
  </div>
  <div
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      aria-hidden="true"
      v-if="openVerifygoogle"
    ></div>

    <div
      v-if="openVerifygoogle"
      class="fixed inset-0 z-10 md:w-screen sm:w-[90%] sm:mx-auto overflow-y-auto"
    >
      <div
        class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
        >
          <div class="bg-white rounded-lg p-5 shadow-lg h-[400px]">
            <div class="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="red"
                className="size-6"
                class="h-20 w-20 mt-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
            </div>
            <div
              class="text-2xl font-bold py-3 flex justify-center items-center"
            >
              Gmail Verification Failed
            </div>
            <p class="text-md flex justify-center items-center">
              There was an error when completing this step
            </p>
            <div class="flex justify-center items-center py-4">
              <button
                @click="closeSheet"
                class="mt-4 bg-[#1E1B4B] text-white px-4 py-2 rounded"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";

import TruecallerVerification from "./TrueCallerVerification.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const showPostVerification = ref(false);
const isVisible = ref(false);
const showTruecaller = ref(false);
const EmailHandling = ref(false);
// const phoneNumber = ref("");
const whatsAppEnabled = ref(true);
interface FormData {
  phoneNumber: string;
}

const form = ref<FormData>({
  phoneNumber: "",
});
const toggleWhatsApp = () => {
  whatsAppEnabled.value = !whatsAppEnabled.value;
};
const email = ref("");
const closeBottomSheet = () => {
  isVisible.value = false;
};
const validatePhoneNumber = () => {
  // Remove any non-digit characters
  form.value.phoneNumber = form.value.phoneNumber
    .replace(/\D/g, "")
    .slice(0, 10);
};
function isValidEmail(email: string): boolean {
  // Regular expression for validating an email
  const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Test the email against the regex
  return emailRegex.test(email);
}
const handleDone = (email: any) => {
  let val = isValidEmail(email);
  if (val) {
    showEmailOtp.value = true;
  } else {
    console.log("error");
  }
};
const handleContinue = () => {
  if (form.value.phoneNumber && form.value.phoneNumber.length == 10) {
    EmailHandling.value = true;
  }
};
const props = defineProps<{
  isVisible: boolean;
  phoneNumber: string;
}>();

const emit = defineEmits(["close", "verified"]);

const otpDigits = ref(["", "", "", "", "", ""]);
const otpDigits1 = ref(["", "", "", "", "", ""]);
const inputRefs = ref<HTMLInputElement[]>([]);
const inputRefs1 = ref<HTMLInputElement[]>([]);
const timer = ref(60);
const timer1 = ref(60);
let timerInterval: NodeJS.Timer | null = null;
const openVerifygoogle = ref(false);
const isOtpComplete = computed(() => {
  return otpDigits.value.every((digit) => digit !== "");
});
const isOtpComplete1 = computed(() => {
  return otpDigits1.value.every((digit) => digit !== "");
});
const showEmailOtp = ref(false);

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}s`;
};
const formatTime1 = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}s`;
};

const handleOtpInput = (event: Event, index: number) => {
  const input = event.target as HTMLInputElement;
  const value = input.value;

  // Ensure only numbers are entered
  if (!/^\d*$/.test(value)) {
    otpDigits.value[index] = "";
    return;
  }

  otpDigits.value[index] = value;

  // Move to next input if available
  if (value && index < 5) {
    inputRefs.value[index + 1]?.focus();
  }
};
const handleOtpInput1 = (event: Event, index: number) => {
  const input = event.target as HTMLInputElement;
  const value = input.value;

  // Ensure only numbers are entered
  if (!/^\d*$/.test(value)) {
    otpDigits1.value[index] = "";
    return;
  }

  otpDigits1.value[index] = value;

  // Move to next input if available
  if (value && index < 5) {
    inputRefs1.value[index + 1]?.focus();
  }
};
const handleBackspace = (event: KeyboardEvent, index: number) => {
  if (!otpDigits.value[index] && index > 0) {
    otpDigits.value[index - 1] = "";
    inputRefs.value[index - 1]?.focus();
  }
};
const handleBackspace1 = (event: KeyboardEvent, index: number) => {
  if (!otpDigits1.value[index] && index > 0) {
    otpDigits1.value[index - 1] = "";
    inputRefs1.value[index - 1]?.focus();
  }
};

const focusPrevInput = (index: number) => {
  if (index > 0) {
    inputRefs.value[index - 1]?.focus();
  }
};
const focusPrevInput1 = (index: number) => {
  if (index > 0) {
    inputRefs1.value[index - 1]?.focus();
  }
};
const focusNextInput1 = (index: number) => {
  if (index < 5) {
    inputRefs1.value[index + 1]?.focus();
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
const startTimer1 = () => {
  timer1.value = 60;
  timerInterval = setInterval(() => {
    if (timer1.value > 0) {
      timer1.value--;
    } else {
      if (timerInterval) clearInterval(timerInterval);
    }
  }, 1000);
};

const resendOtp = () => {
  if (timer.value === 0) {
    // Reset OTP inputs
    otpDigits.value = ["", "", "", "", "", ""];
    // Restart timer

    startTimer();
    // TODO: Add API call to resend OTP
    console.log("Resending OTP...");
  }
};
const resendOtp1 = () => {
  if (timer1.value === 0) {
    // Reset OTP inputs
    otpDigits1.value = ["", "", "", "", "", ""];
    // Restart timer
    startTimer1();
    // TODO: Add API call to resend OTP
    console.log("Resending OTP...");
  }
};
const verifyOtp = () => {
  const otp = otpDigits.value.join("");
  console.log("Verifying OTP:", otp);
  showTruecaller.value = false;
  EmailHandling.value = true;
};
const verifyOtpforEmail = () => {
  const otp = otpDigits.value.join("");
  router.push("/branchFileUpload");
};
const closeSheet = () => {
  openVerifygoogle.value = false;
};

onMounted(() => {
  if (showTruecaller.value) {
    startTimer();
  }
  if (showEmailOtp.value) {
    startTimer1();
  }
});
watch(showTruecaller, (newVal) => {
  if (newVal) {
    // If showTruecaller is true, call the startTimer function
    startTimer();
  } else {
    // Optional: You can stop the timer or perform other actions when showTruecaller is false
    if (timerInterval) clearInterval(timerInterval);
    timer.value = 60; // Reset the timer if necessary
  }
});
watch(showEmailOtp, (newVal) => {
  if (newVal) {
    // If showTruecaller is true, call the startTimer function
    startTimer1();
  } else {
    // Optional: You can stop the timer or perform other actions when showTruecaller is false
    if (timerInterval) clearInterval(timerInterval);
    timer1.value = 60; // Reset the timer if necessary
  }
});
onUnmounted(() => {
  if (timerInterval) clearInterval(timerInterval);
});
const closeTruecaller = () => {
  showTruecaller.value = false;
};

const handleVerified = () => {
  console.log("Verified with Truecaller");
  showTruecaller.value = false;
  isVisible.value = false;
  showPostVerification.value = true; // Show post-verification sheet
};

const closePostVerification = () => {
  showPostVerification.value = false; // Close post-verification sheet
};

const handleSkip = () => {
  console.log("Skipped Truecaller verification");
  showTruecaller.value = false;
};

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 1000);
});
</script>
<style scoped lang="scss">
@keyframes shake {
  0% {
    transform: translate(1px, 0);
  }
  25% {
    transform: translate(-1px, 0);
  }
  50% {
    transform: translate(1px, 0);
  }
  75% {
    transform: translate(-1px, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}

@media (min-width: 768px) {
  /* md breakpoint in Tailwind CSS */
  .hover\:shake:hover {
    animation: shake 0.5s ease-in-out;
  }
}
@keyframes slideIn {
  from {
    transform: translateY(50%); /* Start from slightly below the screen */
    opacity: 0; /* Start invisible */
  }
  to {
    transform: translateY(0); /* End at its original position */
    opacity: 1; /* End visible */
  }
}

/* Apply the animation to the card */
.card-slide-in {
  animation: slideIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  /* Slightly slower and smoother easing for a more natural motion */
}



</style>