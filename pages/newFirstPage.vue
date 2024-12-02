<template>
  <div>
    <!-- Mobile Number Input Page -->
    <div v-if="showMobileInput">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-20">
        <div class="mb-4">
          <h1 class="text-lg font-medium">Enter mobile number</h1>
          <p class="text-sm text-gray-500">
            Mobile number is required to invest in India
          </p>
        </div>
        <div>
          <div class="mt-6 grid grid-cols-1">
            <input
              type="phone"
              name="phone"
              id="phone"
              v-model="mobileNumber"
              class="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pl-10 pr-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6"
              placeholder="9999999999"
            />
          </div>
        </div>
        <div class="fixed bottom-0 w-[90%]">
          <button
            type="button"
            class="rounded-md bg-indigo-500 px-3.5 py-2.5 mb-5 w-full text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            @click="sendOtp"
          >
            Send OTP
          </button>
        </div>
      </div>
    </div>

    <!-- OTP Input Page -->
    <div v-else-if="!isVerificationComplete">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-20">
        <div class="mb-4">
          <h1 class="text-lg font-medium">Verify your mobile number</h1>
          <p class="text-sm text-gray-500">
            Enter the OTP sent to +91 ********{{ lastFourDigits }}
          </p>
        </div>
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
              class="md:w-[50px] md:h-[50px] sm:w-[40px] sm:h-[40px] border-2 border-gray-200 rounded-lg text-center text-xl font-semibold focus:border-blue-500 focus:outline-none"
              :ref="(el) => (inputRefs[index] = el)"
            />
          </template>
        </div>
        <div class="flex justify-between mb-5">
          <span class="text-sm text-gray-500">{{ timer }} seconds remaining</span>
          <div
            v-if="isResendEnabled"
            type="button"
            class="px-3.5 py-2.5 text-sm font-semibold text-red-500 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            @click="resendOtp"
          >
            Resend OTP
          </div>
        </div>
        <div class="fixed bottom-0 w-[90%]">
          <button
            type="button"
            class="rounded-md bg-indigo-500 px- 3.5 py-2.5 mb-5 w-full text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            @click="verifyOtp"
          >
            Verify
          </button>
        </div>
      </div>
    </div>

    <!-- Email Input Page -->
    <div v-else-if="isVerificationComplete && !emailSubmitted">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-20">
        <div class="mb-4">
          <h1 class="text-lg font-medium">Enter your email address</h1>
          <p class="text-sm text-gray-500">
            Please provide your email to continue
          </p>
        </div>
        <div>
          <input
            type="email"
            v-model="email"
            class="block w-full rounded-md bg-white py-1.5 pl-3 pr-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            placeholder="example@gmail.com"
          />
        </div>
        <div class="fixed bottom-0 w-[90%]">
          <button
            type="button"
            class="rounded-md bg-indigo-500 px-3.5 py-2.5 mb-5 w-full text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            @click="submitEmail"
          >
            Submit Email
          </button>
        </div>
      </div>
    </div>

    <!-- Email OTP Input Page -->
    <div v-else-if="emailSubmitted">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-20">
        <div class="mb-4">
          <h1 class="text-lg font-medium">Verify your email address</h1>
          <p class="text-sm text-gray-500">Enter the OTP sent to {{ email }}</p>
        </div>
        <div class="flex gap-2 mb-8 mr-3">
          <template v-for="(digit, index) in 6" :key="index">
            <input
              type="tel"
              maxlength="1"
              v-model="emailOtpDigits[index]"
              @input="handleEmailOtpInput($event, index)"
              @keydown.delete="handleEmailBackspace($event, index)"
              @keydown.left="focusEmailPrevInput(index)"
              @keydown.right="focusEmailNextInput(index)"
              class="md:w-[50px] md:h-[50px] sm:w-[40px] sm:h-[40px] border-2 border-gray-200 rounded-lg text-center text-xl font-semibold focus:border-blue-500 focus:outline-none"
              :ref="(el) => (emailInputRefs[index] = el)"
            />
          </template>
        </div>
        <div class="flex justify-between mb-5">
          <span class="text-sm text-gray-500">{{ emailTimer }} seconds remaining</span>
          <div
            v-if="isEmailResendEnabled"
            type="button"
            class="px-3.5 py-2.5 text-sm font-semibold text-red-500 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            @click="resendEmailOtp"
          >
            Resend OTP
          </div>
        </div>
        <div class="fixed bottom-0 w-[90%]">
          <button
            type="button"
            class="rounded-md bg-indigo-500 px-3.5 py-2.5 mb-5 w-full text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            @click="verifyEmailOtp"
          >
            Verify Email OTP
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMobileInput: true,
      mobileNumber: "",
      otpDigits: Array(6).fill(""),
      inputRefs: [],
      lastFourDigits: "",
      timer: 30,
      timerInterval: null,
      isResendEnabled: false,
      isVerificationComplete: false,
      emailSubmitted: false,
      email: "",
      emailOtpDigits: Array(6).fill(""),
 emailInputRefs: [],
      emailTimer: 30,
      emailTimerInterval: null,
      isEmailResendEnabled: false,
    };
  },
  methods: {
    sendOtp() {
      this.lastFourDigits = this.mobileNumber.slice(-4);
      this.showMobileInput = false;
      this.startTimer();
    },
    startTimer() {
      this.isResendEnabled = false;
      this.timer = 30;
      this.timerInterval = setInterval(() => {
        this.timer--;
        if (this.timer <= 0) {
          clearInterval(this.timerInterval);
          this.isResendEnabled = true;
        }
      }, 1000);
    },
    handleOtpInput(event, index) {
      if (event.target.value.length === 1 && index < 5) {
        this.$nextTick(() => {
          this.inputRefs[index + 1].focus();
        });
      }
    },
    handleBackspace(event, index) {
      if (index > 0 && this.otpDigits[index] === "") {
        this.$nextTick(() => {
          this.inputRefs[index - 1].focus();
        });
      }
    },
    focusPrevInput(index) {
      if (index > 0) {
        this.$nextTick(() => this.inputRefs[index - 1].focus());
      }
    },
    focusNextInput(index) {
      if (index < 5) {
        this.$nextTick(() => {
          this.inputRefs[index + 1].focus();
        });
      }
    },
    verifyOtp() {
      // Logic to verify OTP
      console.log("text");
      this.isVerificationComplete = true; // Set verification as complete
      clearInterval(this.timerInterval); // Clear timer on verification
    },
    submitEmail() {
      console.log("Email submitted:", this.email);
      this.emailSubmitted = true; // Set email submission as complete
      this.getOtpForEmail(); // Call function to get OTP for email
    },
    getOtpForEmail() {
      console.log("OTP sent to email:", this.email);
      this.startEmailTimer(); // Start timer for email OTP
    },
    startEmailTimer() {
      this.isEmailResendEnabled = false;
      this.emailTimer = 30;
      this.emailTimerInterval = setInterval(() => {
        this.emailTimer--;
        if (this.emailTimer <= 0) {
          clearInterval(this.emailTimerInterval);
          this.isEmailResendEnabled = true;
        }
      }, 1000);
    },
    handleEmailOtpInput(event, index) {
      if (event.target.value.length === 1 && index < 5) {
        this.$nextTick(() => {
          this.emailInputRefs[index + 1].focus();
        });
      }
    },
    handleEmailBackspace(event, index) {
      if (index > 0 && this.emailOtpDigits[index] === "") {
        this.$nextTick(() => {
          this.emailInputRefs[index - 1].focus();
        });
      }
    },
    focusEmailPrevInput(index) {
      if (index > 0) {
        this.$nextTick(() => this.emailInputRefs[index - 1].focus());
      }
    },
    focusEmailNextInput(index) {
      if (index < 5) {
        this.$nextTick(() => {
          this.emailInputRefs[index + 1].focus();
        });
      }
    },
    verifyEmailOtp() {
      // Logic to verify email OTP
      console.log("Email OTP verified:", this.emailOtpDigits.join(""));
      // Navigate to digilockerPage after successful verification
      this.$router.push({ name: 'digilockerPage' }); // Ensure 'digilockerPage' is defined in your router
    },
    resendEmailOtp() {
      console.log("Email OTP resent to:", this.email);
      this.startEmailTimer(); // Restart the timer when email OTP is resent
    },
  },
  beforeDestroy() {
    clearInterval(this.timerInterval); // Clear timer interval on component destroy
    clearInterval(this.emailTimerInterval); // Clear email timer interval on component destroy
  },
};
</script>

<style scoped>
/* Add any additional styles here */
</style>