<template>
  <div>
    <div v-if="!apiCalled">
      <div
        class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 md:max-w-md md:mx-auto"
      >
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            class="mx-auto h-10 w-auto"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2
            class="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900"
          >
            Bank Account Verification
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form @submit.prevent="VerifyAccount()" class="space-y-6">
            <div>
              <label
                for="accountnumber"
                class="block text-sm font-medium text-gray-900"
                >Account Number</label
              >
              <div class="mt-2">
                <input
                  id="accountnumber"
                  v-model="accountNumber"
                  name="accountnumber"
                  type="text"
                  required
                  class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="ifsc"
                  class="block text-sm font-medium text-gray-900"
                  >IFSC Code</label
                >
              </div>
              <div class="mt-2">
                <input
                  id="ifsc"
                  v-model="ifscCode"
                  name="ifsc"
                  type="text"
                  required
                  class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                />
              </div>
            </div>

            <div>
              <div>
                <button
                  type="submit"
                  class="button flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </form>

          <p class="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <a
              href="#"
              class="font-semibold text-indigo-600 hover:text-indigo-500"
              >Start a 14 day free trial</a
            >
          </p>
        </div>
      </div>
    </div>

    <div v-else>
      <div
        class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      >
        <div class="absolute inset-0 -z-10 overflow-hidden">
          <svg
            class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width="200"
                height="200"
                x="50%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                stroke-width="0"
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              stroke-width="0"
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div
          class="flex mx-auto max-w-2xl gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:items-start lg:gap-y-10"
        >
          <div
            class="lg:row-start-2 lg:mx-auto lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8"
          >
            <div class="lg:pr-4 md:flex md:mx-auto">
              <div class="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
                <h2
                  class="mt-16 text-2xl font-bold tracking-tight text-gray-900"
                >
                  API DATA
                </h2>
                <div v-if="progress < 100">
                  <div class="flex">
                    <div class="progress-container">
                      <div
                        class="progress-bar"
                        :style="{ width: progress + '%' }"
                      ></div>
                      <!-- Displaying the progress percentage -->
                    </div>
                    <!--<div class="progress-percentage">{{ progress }}%</div>-->
                  </div>

                  <p class="mt-6">Verifying account...</p>
                </div>
                <div v-else-if="apiSuccess">
                  <p class="mt-6">{{ apidata }}</p>
                </div>
                <div v-else>
                  <p class="mt-6 text-red-500">
                    Verification failed. Please try again.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
export default {
  data() {
    return {
      accountNumber: "",
      ifscCode: "",
      apiCalled: false,
      apiSuccess: false,
      apidata: null,
      progress: 0, // New property for progress
    };
  },
  methods: {
    async VerifyAccount() {
      this.apiCalled = true;
      this.progress = 0; // Reset progress
      const apiUrl =
        "https://phpstack-529375-5021731.cloudwaysapps.com/api/bank-verification.php";
      const formData = new URLSearchParams();
      formData.append("bankAccNo", this.accountNumber);
      formData.append("ifsc", this.ifscCode);

      // Simulate progress updates
      const updateProgress = (percentage) => {
        this.progress = percentage;
      };

      updateProgress(0); // Start at 0%
      setTimeout(() => updateProgress(50), 10); // Update to 50% after 1 second
      setTimeout(() => updateProgress(75), 20); // Update to 75% after 2 seconds

      try {
        const response = await axios.post(apiUrl, formData);
        if (response && response.data) {
          updateProgress(100);
          this.apidata = response.data;
          this.apiSuccess = true;
          // Update to 100% on success
        } else {
          this.apiSuccess = false;
        }
      } catch (error) {
        this.apiSuccess = false;
        console.error("Error calling API:", error);
      }
    },
  },
};
</script>

<style lang="scss">
.dropdown-menu {
  display: none;
}
.dropdown-menu.show {
  display: block;
}
.animate-spin {
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.button {
  position: relative; /* Position relative for the pseudo-element */
  overflow: hidden; /* Hide overflow for the glare effect */
  background: linear-gradient(
    to right,
    #3b82f6,
    #8b5cf6
  ); /* Blue to Purple gradient */
  background-size: 200% 100%; /* Double the width for the animation effect */
  transition: background-position 0.5s ease, transform 0.2s ease; /* Smooth transitions */
  color: white; /* Text color */
  border: none; /* Remove default border */
  cursor: pointer; /* Pointer cursor on hover */
}

.button::before {
  content: ""; /* Create a pseudo-element */
  position: absolute; /* Position it absolutely */
  top: 0; /* Align to the top */
  left: -100%; /* Start off-screen to the left */
  height: 100%; /* Full height */
  width: 100%; /* Full width */
  background: rgba(255, 255, 255, 0.3); /* White glare effect */
  transition: left 0.5s ease; /* Transition for the glare effect */
  z-index: 1; /* Position above the button */
  pointer-events: none; /* Prevent interaction with the pseudo-element */
}

.button:hover::before {
  left: 100%; /* Move the glare effect across the button */
}

.button:hover {
  background-position: 100% 0; /* Move the gradient to the right on hover */
}

.button:active {
  background-position: 0% 0; /* Reset to the original position on click */
}

.progress-container {
  margin-top: 20px;
  width: 300px;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  height: 10px;
  position: relative;
}

.progress-bar {
  height: 100%;
  background-color: #4caf50;
  transition: width 0.4s ease;
}

.progress-percentage {
  position: absolute; /* Positioning the percentage text */
  top: 50%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%); /* Adjust for centering */
  color: black; /* Text color */
  font-weight: bold; /* Make the text bold */
}
</style>