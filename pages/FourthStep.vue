<template>
  <div class="min-h-screen bg-[#ECE8FF] relative overflow-hidden font-inter">
    <div class="fixed inset-0 bg-primary z-40" v-if="isOpen">
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
        <div v-if="verificationStep">
          <div class="md:pt-5 sm:pt-10 pb-5 relative max-w-md mx-auto">
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
                     

                    <h3 class="text-md font-bold text-bigtext">
                      Complete e-KYC
                    </h3>
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
                     

                    <div class="text-md font-bold text-bigtext">
                      Setup Your Profile
                    </div>
                    <div class="text-mdtext text-sm">
                      Answer a few question about yourself
                    </div>
                  </div>
                </div>
                <div class="font-bold text-2xl py-3 px-1 text-bigtext">
                  Next Up...
                </div>
                <div class="flex items-center space-x-10">
                  <div class="bg-purple-200 rounded-full p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 h-4 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                  </div>
                  <div class="mb-3">
                     

                    <h3 class="text-md font-bold text-bigtext">
                      Link your bank a/c
                    </h3>
                    <p class="text-mdtext text-sm">
                      Set the primary account for your transaction
                    </p>
                  </div>
                </div>
                <div class="flex items-center space-x-10">
                  <div class="bg-purple-200 rounded-full p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 h-4 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                      />
                    </svg>
                  </div>
                  <div class="mb-3">
                     

                    <h3 class="text-md font-bold text-bigtext">
                      Confirm it's you
                    </h3>
                    <p class="text-mdtext text-sm">
                      Click a photo and submit your signature
                    </p>
                  </div>
                </div>
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
                     

                    <h3 class="text-md font-bold text-bigtext">
                      eSign Ang Login
                    </h3>
                    <p class="text-mdtext text-sm">
                      Sign your Application and start Investing
                    </p>
                  </div>
                </div>
                <div
                  class="sm:fixed sm:bottom-0 sm:left-0 sm:right-0 sm:p-4 bg-white"
                >
                  <div class="sm:w-full sm:mx-auto">
                    <button
                      type="submit"
                      class="w-full text-white rounded-lg py-2 mt-6 font-medium transition-colors disabled:cursor-not-allowed bg-[#1E1B4B]"
                      @click="nextStep"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="bankVerification">
          <div class="md:pt-5 sm:pt-10 pb-5 p-6 relative max-w-md mx-auto">
            <h1 class="text-2xl font-semibold text-bigtext mb-4">
              Bank Details
            </h1>
            <div class="mb-4">
              <label class="text-bigtext text-sm font-semibold py-2"
                >BANK ACCOUNT TYPE</label
              >
              <div class="flex space-x-4 my-2">
                <label class="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="accountType"
                    value="Savings"
                    v-model="form.acType"
                    class="form-radio h-4 w-4 text-[#1E1B4B] focus:ring-white"
                  />
                  <span class="text-[#1E1B4B] font-semibold text-sm"
                    >SAVINGS</span
                  >
                </label>
                <label class="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="accountType"
                    value="Current"
                    v-model="form.acType"
                    class="form-radio h-4 w-4 text-[#1E1B4B] focus:ring-white"
                  />
                  <span class="text-[#1E1B4B] font-semibold text-sm"
                    >CURRENT</span
                  >
                </label>
              </div>
            </div>
            <div class="mb-4">
              <label class="text-bigtext text-sm font-semibold"
                >ACCOUNT NUMBER</label
              >
              <input
                maxlength="16"
                type="text"
                v-model="form.acNumber"
                id="accountnumber"
                :aria-invalid="isAccountError ? 'true' : 'false'"
                :aria-describedby="
                  isAccountError ? 'accountnumber-error' : null
                "
                :class="{
                  'focus:ring-2 focus:ring-red-500 focus:outline-none border border-red-500':
                    isAccountError,
                  'focus:ring-1 focus:ring-[#1E1B4B] focus:outline-none border':
                    !isAccountError,
                }"
                placeholder="11111111111111"
                class="w-full px-4 py-2 my-2 rounded-lg focus:bg-blue-50"
                @input="validateAccountNumber"
              />

              <!-- Error Message -->
              <span
                v-if="isAccountError"
                id="accountnumber-error"
                class="text-red-500 text-sm"
              >
                Please enter a valid account number.
              </span>
            </div>
            <div class="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label class="text-bigtext text-sm font-semibold py-2"
                  >IFSC CODE
                  <span class="text-gray-500">(Find my IFSC code)</span></label
                >
                <input
                  type="text"
                  v-model="form.ifsc"
                  placeholder="IDIB000H003"
                  :class="
                    ifscError && form.ifsc.length >= 11
                      ? ' focus:ring-2 focus:ring-red-500 focus:outline-none'
                      : ' focus:ring-1 focus:ring-[#1E1B4B] focus:outline-none'
                  "
                  class="w-full px-4 py-2 my-2 border rounded-lg focus:bg-blue-50"
                  maxlength="11"
                  id="ifsc"
                />
                <div
                  v-if="ifscError && form.ifsc.length >= 11"
                  class="text-red-500 text-sm fornt-semibold"
                >
                  Invalid IFSC
                </div>
              </div>
              <div>
                <label class="text-bigtext text-sm font-semibold py-2"
                  >MICR CODE
                  <span class="text-gray-500">(Find my MICR code)</span></label
                >
                <input
                  type="text"
                  placeholder="600019020"
                  v-model="form.micr"
                  id="micr"
                  class="w-full px-4 py-2 my-2 border rounded-lg focus:bg-blue-50 focus:outline-none focus:ring-1 focus:ring-[#1E1B4B]"
                />
              </div>
            </div>
            <div class="mb-6">
              <label class="text-bigtext text-sm font-semibold py-2"
                >BANK NAME & FULL ADDRESS</label
              >
              <textarea
                class="w-full px-4 focus:bg-blue-50 py-2 my-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1E1B4B]"
                rows="2"
                placeholder="INDIAN BANK,HARBOUR,HARBOUR,TAMIL NADU"
                v-model="form.bAddress"
              ></textarea>
            </div>
            <div
              class="sm:fixed sm:bottom-0 sm:left-0 sm:right-0 sm:p-4 bg-white"
            >
              <div class="sm:w-full sm:mx-auto">
                <button
                  class="w-full bg-[#1E1B4B] text-white font-bold py-2 rounded-lg my-4"
                  @click="setBankAccount()"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="setBankDetails">
          <div class="py-20 px-10">
            <AnimatedList :is-open="animatedVal" @close="animaSuccess" />
          </div>
        </div>
        <div v-if="bankDetailsSuccess">
          <div class="max-w-2xl mx-auto sm:p-3">
            <div class="pt-5">
              <div class="text-center">
                <div class="mr-4">
                  <div
                    class="bg-green-100 rounded-full mx-auto flex items-center justify-center w-20 h-20"
                  >
                    <div class="w-12 h-12 text-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div class="text-2xl font-bold text-bigtext mt-4">
                  Bank account added
                </div>
                <p class="text-smtext my-2">
                  Your bank details have been verified.
                </p>
              </div>
              <div class="bg-gray-50 rounded-lg p-10 space-y-2">
                <div class="">
                  <div class="flex space-x-5 mr-10">
                    <div
                      class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-500"
                    >
                      <span class="text-lg font-semibold"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="h-4 w-4"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                    <div class="">
                      <h3 class="font-semibold text-bigtext mt-1">
                        {{ form.holderName }}
                      </h3>
                      <p class="text-sm text-mdtext">
                        {{ selectedBankAccount }}
                      </p>
                    </div>
                  </div>
                  <div class="space-y-3 my-3">
                    <div class="flex justify-between">
                      <span class="text-smtext pr-10">Acc. No.</span>
                      <span class="font-medium text-bigtext">{{
                        form.acNumber
                      }}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-smtext pr-10">IFSC Code</span>
                      <span class="font-medium text-bigtext">{{
                        form.micr
                      }}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-smtext pr-10">Branch</span>
                      <span class="font-medium text-bigtext text-sm">
                        {{ form.branch }}</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="md:py-5">
                <div
                  class="sm:fixed sm:bottom-0 sm:left-0 sm:right-0 sm:p-4 bg-white"
                >
                  <div class="sm:w-full sm:mx-auto">
                    <button
                      class="w-full bg-[#1E1B4B] text-white py-3 rounded-lg font-semibold hover:bg-[#1E1B4B] transition-colors"
                      @click="completeBankDetails"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import AnimatedList from "@/components/AnimatedList.vue";
const ifscRegx = /^[A-Za-z]{4}[a-zA-Z0-9]{7}$/;
const ifscError = ref(false);
const isAccountError = ref(false);
const searchQuery = ref("");
const animationVal = ref(true);
const router = useRouter();
const isOpen = ref(false);
const verificationStep = ref(true);
const bankVerification = ref(false);
const selectedBankAccount = ref("");
const setBankDetails = ref(false);
const bankDetailsSuccess = ref(false);
enum AccountType {
  Savings = "Savings",
  Current = "Current",
}
interface FormData {
  acType: AccountType; // Use the enum here
  acNumber: string;
  ifsc: string;
  micr: string;
  bAddress: string;
  branch: string;
  holderName: string;
}
const form = ref<FormData>({
  acType: AccountType.Current, // Set a default value from the enum
  acNumber: "",
  ifsc: "",
  micr: "",
  bAddress: "",
  branch: "",
  holderName: "",
});
onMounted(() => {
  setTimeout(openBottomSheet, 100);
});
watch(
  () => form.value.ifsc,

  (newValue) => {
    if (ifscRegx.test(newValue)) {
      ifscError.value = false;
      console.log("Valid IFSC code", newValue);
      getBankData(newValue);
    } else {
      ifscError.value = true;
      console.log("Invalid IFSC code", newValue);
    }
  }
);
watch(
  () => form.value.acNumber,

  (newValue) => {
    if (newValue) {
      isAccountError.value = false;
      console.log("Valid account", newValue);
    } else {
      console.log("Invalid account", newValue);
    }
  }
);
const validateAccountNumber = () => {
  const acNumber = form.value.acNumber;
  if (acNumber.length >= 16) {
    if (acNumber.length < 16 || !/^\d+$/.test(acNumber)) {
      isAccountError.value = true;
    } else {
      isAccountError.value = false;
    }
  }
};
const getBankData = async (val) => {
  // Use template literals to correctly interpolate the val variable into the URL
  const apiUrl = `https://ifsc.razorpay.com/${val}`;

  try {
    const response = await axios.get(apiUrl); // Send the GET request
    if (response && response.data) {
      console.log(response, response.data);
      form.value.bAddress = response.data.ADDRESS;
      form.value.micr = response.data.MICR;
      form.value.branch = response.data.BRANCH;
    } else {
      console.error("API response format is not as expected");
    }
  } catch (error) {
    ifscError.value = true;
    console.error("Error calling API:", error); // Log any errors
  }
};
const openBottomSheet = () => {
  isOpen.value = true;
};
const closeBottomSheet = () => {
  isOpen.value = false;
};
const nextStep = () => {
  verificationStep.value = false;
  bankVerification.value = true;
};
const popularBanks = ref([
  {
    name: "Axis Bank",
    logo: "https://storage.googleapis.com/a1aa/image/lTdfHGeZumnI2Eop0GOl4zfryBKePlhflNKKObNOksaBMWvdC.jpg",
  },
  {
    name: "HDFC Bank",
    logo: "https://storage.googleapis.com/a1aa/image/pRqD7yHPwloZIRdyG0ZZdPwU2u12SGszidDseJ4087nvY92JA.jpg",
  },
  {
    name: "ICICI Bank",
    logo: "https://storage.googleapis.com/a1aa/image/yHWEf7mzbSW0TaapfnEUs9 qbsWpKZ913fcWKzUAqYUVyi1bnA.jpg",
  },
  {
    name: "State Bank",
    logo: "https://storage.googleapis.com/a1aa/image/OnEs2VHVemynBaLsNJpY6ItJGagauRgxYfTDvd24nze8i1bnA.jpg",
  },
]);
const allBanks = ref([
  { name: "Axis Bank" },
  { name: "Bandhan Bank" },
  { name: "Bank of Baroda" },
  { name: "Bank of India" },
  { name: "HDFC Bank" },
  { name: "ICICI Bank" },
  { name: "State Bank of India" },
  { name: "Punjab National Bank" },
  { name: "Kotak Mahindra Bank" },
  { name: "IndusInd Bank" },
  { name: "Yes Bank" },
  { name: "Bank of Maharashtra" },
  { name: "Central Bank of India" },
  { name: "Union Bank of India" },
  { name: "Indian Bank" },
  { name: "UCO Bank" },
  { name: "Indian Overseas Bank" },
  { name: "Bank of America" },
  { name: "Citi Bank" },
  { name: "Deutsche Bank" },
]);
const filteredPopularBanks = computed(() => {
  return popularBanks.value.filter((bank) =>
    bank.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
const filteredAllBanks = computed(() => {
  return allBanks.value.filter((bank) =>
    bank.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
// Open the bottom sheet after 0.5 seconds
const setBankAccount = (bankName: string) => {
  VerifyAccount();
};
const animaSuccess = () => {
  setBankDetails.value = false;
  bankDetailsSuccess.value = true;
};

const completeBankDetails = () => {
  router.push("/UploadFile");
};
const VerifyAccount = async () => {
  const apiUrl =
    "https://phpstack-529375-5021731.cloudwaysapps.com/api/bank-verification.php";
  const formData = new URLSearchParams();
  formData.append("bankAccNo", form.value.acNumber);
  formData.append("ifsc", form.value.ifsc);
  debugger;
  try {
    const response = await axios.post(apiUrl, formData);
    if (
      response &&
      response.data &&
      response.data.result &&
      response.data.result.active
    ) {
      form.value.holderName = response.data.result.bankTransfer.beneName;

      setTimeout(() => {
        bankVerification.value = false;
        setBankDetails.value = true;
      }, 1000);
      console.log(response, response.data, "response");
    } else {
      isAccountError.value = true;
      console.error("API response format is not as expected");
    }
  } catch (error) {
    console.error("Error calling API:", error);
  }
};
</script>
  <!--<div class="max-w-2xl mx-auto md:p-14 sm:py-8 sm:px-3  ">
            <h1 class="text-2xl font-semibold mb-2 text-bigtext">Add bank account</h1>
            <p class="text-smtext mb-4">
              This will be your primary account for all transactions.
            </p>
            <div class="bg-green-100 text-green-700 p-4 rounded mb-4">
              <i class="fas fa-lock"></i> Your bank details are secured and will
              not be shared with anyone
            </div>
            <div class="relative mb-6">
              <input
                v-model="searchQuery"
                class="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#1E1B4B]"
                placeholder="Search your Bank"
                type="text"
              />
              <i class="fas fa-search absolute right-3 top-3 text-gray-400"></i>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <h2 class="text-mdtext mb-2">POPULAR BANKS</h2>
                <div class="bg-gray-100 px-1 rounded flex space-x-2">
                  <div
                    v-for="bank in filteredPopularBanks"
                    :key="bank.name"
                    class="flex flex-col items-center text-center rounded-md p-2 my-1 hover:bg-[#1E1B4B] hover:text-white"
                    @click="setBankAccount(bank.name)"
                    :class="{
                      'bg-[#1E1B4B] text-white':
                        selectedBankAccount === bank.name,
                      'bg-gray-100 text-smtext': selectedBankAccount !== bank.name,
                    }"
                  >
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
</svg>

                    <span class="text-sm ">{{ bank.name }}</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 class="text-mdtext mb-2">ALL BANKS</h2>
                <div class="h-[200px] overflow-y-auto mb-3">
                  <ul class="bg-gray-100 p-4 rounded space-y-2">
                    <li
                      v-for="bank in filteredAllBanks"
                      :key="bank.name"
                      class="flex items-center space-x-2 py-1 px-1 rounded-md hover:bg-[#1E1B4B] hover:text-white"
                      @click="setBankAccount(bank.name)"
                      :class="{
                        'bg-[#1E1B4B] text-white':
                          selectedBankAccount === bank.name,
                        'bg-gray-100 text-mdtext': selectedBankAccount !== bank.name,
                      }"
                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
</svg>
                      <span class=" text-sm">{{ bank.name }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>--->