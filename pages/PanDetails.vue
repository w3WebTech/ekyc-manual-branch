<template>
  <div class="h-screen bg-[#ECE8FF] relative overflow-hidden font-inter">
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

        <div v-if="finalConfirmation">
          <div id="app" class="w-full max-w-md p-6">
            <div class="flex">
              <h1 class="text-xl font-semibold text-bigtext mb-1">
                Confirm your details
              </h1>
            </div>

            <p class="text-smtext mb-6">
              We have fetched your Aadhaar details from Digilocker.
            </p>
            <div class="bg-gray-100 p-4 rounded-lg mb-4">
              <div class="mb-4">
                <span class="text-smtext">Name:</span>
                <span class="font-semibold text-bigtext ml-2">{{
                  form.name
                }}</span>
              </div>
              <div class="mb-2 flex items-center justify-between">
                <div>
                  <span class="text-smtext">Father's Name:</span>
                  <span
                    class="font-semibold text-bigtext px-2 py-1 rounded ml-2"
                    >{{ fName }}</span
                  >
                </div>

                <div class="ml-2 text-primary" @click="openEdit = true">
                  <a href="#" class="text-primary text-sm font-semibold ml-auto"
                    >Edit ></a
                  >
                </div>
              </div>
              <div class="mb-4">
                <span class="text-smtext">DOB:</span>
                <span class="font-semibold text-bigtext px-2 py-1 rounded">{{
                  form.dob
                }}</span>
              </div>
              <div class="mb-4">
                <span class="text-smtext">Gender:</span>
                <span class="font-semibold text-bigtext px-2">{{
                  form.gender
                }}</span>
              </div>
              <div class="mb-4">
                <span class="text-smtext">Address:</span>
                <span class="font-semibold text-bigtext px-2 py-1 rounded">{{
                  form.address
                }}</span>
              </div>
              <div class="mb-4">
                <span class="text-gray-600">Aadhaar No:</span>
                <span class="font-semibold text-gray-800 px-2">{{
                  form.adhar
                }}</span>
              </div>
            </div>
            <div class="flex items-center py-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="primary"
                class="w-5 h-5 mx-2"
              >
                <path
                  d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z"
                />
                <path
                  fill-rule="evenodd"
                  d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                  clip-rule="evenodd"
                />
              </svg>

              <span class="text-mdtext font-semibold text-sm"
                >PAN linked with your Aadhaar Card</span
              >
              <a
                href="#"
                class="text-primary font-semibold text-sm ml-auto pr-4"
                >View ></a
              >
            </div>
            <div
              class="sm:fixed sm:bottom-0 sm:left-0 sm:right-0 sm:p-4 bg-white"
            >
              <div class="sm:w-full sm:mx-auto">
                <button
                  class="w-full bg-[#1E1B4B] text-white font-bold py-2 rounded-lg my-4"
                  @click="moveToAddressdetails"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="isAddressDetails">
          <div class="max-w-md mx-auto p-6">
            <h1 class="text-2xl font-semibold text-bigtext mb-1">
              Enter your Addressdetails
            </h1>
            <p class="text-smtext text-sm mb-2">
              These details are required by SEBI to open your demat account.
            </p>

            <form @submit.prevent="handleSubmit" class="space-y-2">
              <!-- PAN Input -->
              <div>
                <label
                  for="nationality"
                  class="block text-sm font-medium text-bigtext mb-1"
                >
                  Nationality
                </label>
                <!-- <select
                  v-model="form.nationality"
                  id="nationality"
                  aria-placeholder="Indian"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1E1B4B] focus:bg-blue-50 transition-colors uppercase"
                >
                  <option value="IN">Indian</option>
                  <option value="US">American</option>
                  <option value="UK">British</option>
                  <option value="CA">Canadian</option>
                  <option value="AU">Australian</option>
                  <option value="FR">French</option>
                  <option value="DE">German</option>
                
                </select> -->
                <input
                  v-model="form.nationality"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1E1B4B] focus:bg-blue-50 transition-colors uppercase"
                />
              </div>

              <!-- Name Input -->
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-bigtext mb-1"
                  >Permanent Address (From Digilocker)</label
                >
                <textarea
                  v-model="form.addressLine"
                  type="text"
                  id="address"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1E1B4B] focus:bg-blue-50 transition-colors"
                  placeholder="Your address here ..."
                  rows="2"
                />
              </div>

              <!-- DOB Input -->
              <div>
                <label
                  for="dob"
                  class="block text-sm font-medium text-bigtext mb-1"
                  >City / District</label
                >

                <input
                  v-model="form.city"
                  type="text"
                  id="city"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1E1B4B] focus:bg-blue-50 transition-colors uppercase"
                  placeholder="AGMK566672"
                  maxlength="10"
                />
              </div>
              <div class="grid grid-cols-12 space-x-2">
                <div class="col-span-8">
                  <div>
                    <label class="block text-sm font-medium text-bigtext mb-1"
                      >State</label
                    >
                    <!-- <select
                      v-model="form.state"
                      id="state"
                      class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1E1B4B] focus:bg-blue-50 transition-colors uppercase"
                    >
                      <option value="IN">Indian</option>
                      <option value="US">American</option>
                      <option value="UK">British</option>
                      <option value="CA">Canadian</option>
                      <option value="AU">Australian</option>
                      <option value="FR">French</option>
                      <option value="DE">German</option>
                     
                    </select> -->
                    <input
                      v-model="form.state"
                      id="state"
                      class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1E1B4B] focus:bg-blue-50 transition-colors uppercase"
                    />
                  </div>
                </div>
                <div class="col-span-4">
                  <div>
                    <label class="block text-sm font-medium text-bigtext mb-1"
                      >Pincode</label
                    >
                    <input
                      v-model="form.pincode"
                      type="text"
                      id="pincode"
                      class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1E1B4B] focus:bg-blue-50 transition-colors uppercase"
                      placeholder="613601"
                      maxlength="6"
                      pattern="\d{6}"
                      @input="validatePincode"
                    />
                  </div>
                </div>
              </div>

              <!-- Tax Residency Checkbox -->
              <div class="flex items-start gap-3 mt-5">
                <div class="flex-shrink-0 mt-1">
                  <div
                    class="w-5 h-5 border-2 rounded-xl flex items-center justify-center cursor-pointer"
                    :class="
                      form.isPermanentaddress
                        ? 'border-emerald-500 bg-emerald-500'
                        : 'border-gray-300'
                    "
                    @click="removePermanent"
                  >
                    <svg
                      v-if="form.isPermanentaddress"
                      class="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <label
                  class="text-sm text-smtext leading-tight cursor-pointer py-1"
                  @click="removePermanent"
                >
                  COMMUNICATION SAME AS PERMANENT ADDRESS.
                </label>
              </div>

              <!-- Info Text -->

              <div
                class="sm:fixed sm:bottom-0 sm:left-0 sm:right-0 sm:p-4 bg-white"
              >
                <div class="sm:w-full sm:mx-auto">
                  <!-- Submit Button -->
                  <button
                    type="submit"
                    class="w-full text-white rounded-lg py-2 mt-6 font-medium transition-colors disabled:cursor-not-allowed"
                    :disabled="!isFormValidforAd"
                    :class="!isFormValidforAd ? 'bg-gray-300' : 'bg-[#1E1B4B] '"
                    @click="completeEkyc"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    v-if="openEdit"
    class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-50"
  >
    <div
      class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0"
    >
      <div
        class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:mx-5"
      >
        <div>
          <div class="bg-white rounded-lg p-6 w-full relative">
            <div class="text-bigtext font-semibold">Father's Name</div>
            <div class="my-4">
              <input
                type="text"
                v-model="fName"
                placeholder="Enter your text here"
                class="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>

            <!-- Submit Button -->
            <button
              @click="handleSubmit"
              class="bg-[#1E1B4B] text-white py-2 w-full my-2 rounded-xl shadow-md transition duration-200"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
const route = useRoute();

interface FormDataforAd {
  nationality: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  isPermanentaddress: boolean;
  addressLine: string;
}

const formforad = ref<FormDataforAd>({
  nationality: "",
  city: "",
  address: "",
  state: "",
  pincode: "",
  isPermanentaddress: true,
  addressLine: "",
});

interface FormData {
  pan: string;
  name: string;
  gender: string;
  dob: string;
  adhar: string;
  isTaxResident: boolean;
  nationality: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  isPermanentaddress: boolean;
  addressLine: string;
}
const form = ref<FormData>({
  pan: "",
  name: "",
  gender: "",
  dob: "",
  adhar: "",
  isTaxResident: false,
  nationality: "",
  city: "",
  address: "",
  state: "",
  pincode: "",
  isPermanentaddress: true,
  addressLine: "",
});
let isPanValid = ref(false);
let isPanError = ref(false);
const router = useRouter();
const isOpen = ref(false);
const isPanDetails = ref(false);
const openEdit = ref(false);
const fName = ref("Name");
const isAddressDetails = ref(false);
const showDatePicker = ref(false);
const isPanForm = ref(false);
const isStepPage = ref(true);
const eKycFinalStep = ref(false);
const finalConfirmation = ref(true);
const openBottomSheet = () => {
  isOpen.value = true;
};
const removePermanent = () => {
  debugger;
  form.value.isPermanentaddress = !form.value.isPermanentaddress;
  if (form.value.isPermanentaddress == false) {
    form.value.addressLine = "";
    form.value.city = "";
    form.value.state = "";
    form.value.pincode = "";
    form.value.nationality = "";
  }
  if (form.value.isPermanentaddress == true) {
    form.value.addressLine = formforad.value.addressLine;
    form.value.city = formforad.value.city;
    form.value.state = formforad.value.state;
    form.value.pincode = formforad.value.pincode;
    form.value.nationality = formforad.value.nationality;
  }
};
const closeBottomSheet = () => {
  isOpen.value = false;
};
onMounted(() => {
  const queryParam = route.query.requestId;
  console.log(queryParam, "queryParam");
  getAdhar(queryParam);
  setTimeout(openBottomSheet, 100);
});

const getAdhar = async (val) => {
  // Use template literals to correctly interpolate the val variable into the URL
  const apiUrl = `https://phpstack-529375-5021731.cloudwaysapps.com/api/get-digilocker-info.php?requestId=67347bb1a6f54d0011f7aab9`;

  try {
    const response = await axios.get(apiUrl); // Send the GET request
    if (response && response.data) {
      console.log(response.data.result.name, "responseeee"); // Log the response
      form.value.name = response.data.result.name;
      form.value.dob = response.data.result.dob;
      form.value.gender = response.data.result.gender;
      form.value.address = response.data.result.address;
      form.value.adhar = response.data.result.uid;
      formforad.value.nationality =
        response.data.result.splitAddress.country[2];
      formforad.value.city = response.data.result.splitAddress.city;
      formforad.value.state = response.data.result.splitAddress.state[0];
      formforad.value.pincode = response.data.result.splitAddress.pincode;
      formforad.value.addressLine =
        response.data.result.splitAddress.addressLine;
      form.value.addressLine = response.data.result.splitAddress.addressLine;
      form.value.city = response.data.result.splitAddress.city;
      form.value.state = response.data.result.splitAddress.state[0];
      form.value.pincode = response.data.result.splitAddress.pincode;
      form.value.nationality = response.data.result.splitAddress.country[2];
    } else {
      console.error("API response format is not as expected");
    }
  } catch (error) {
    console.error("Error calling API:", error); // Log any errors
  }
};
const isFormValid = computed(() => {
  return (
    form.value.pan.length === 10 &&
    form.value.name.length > 0 &&
    form.value.dob.length > 0 &&
    form.value.isTaxResident
  );
});
const isFormValidforAd = computed(() => {
  console.log(form, "form");

  return (
    form.value.nationality &&
    form.value.addressLine &&
    form.value.city &&
    form.value.state &&
    form.value.pincode.length === 6
  );
});
const handleSubmit = () => {
  openEdit.value = false;
};
const nextStep = () => {
  isStepPage.value = false;
  isPanForm.value = true;
};
const moveToEkyc = () => {
  isPanDetails.value = false;
  eKycFinalStep.value = true;
};
const completeEkyc = () => {
  router.push("/ThirdStep");
};
const moveBack = () => {
  isPanDetails.value = false;
  isPanForm.value = true;
};
const movePrev = () => {
  eKycFinalStep.value = false;
  isPanDetails.value = true;
};
const MoveEkyc = () => {
  finalConfirmation.value = false;
  eKycFinalStep.value = true;
};
const moveToAddressdetails = () => {
  finalConfirmation.value = false;
  isAddressDetails.value = true;
};
const validatePincode = () => {
  // Remove any non-digit characters
  form.value.pincode = form.value.pincode.replace(/\D/g, "").slice(0, 6);
};
watch(
  () => form.value.pan,
  (newValue) => {
    if (newValue) {
      isPanError.value = false; // Reset the error state when PAN changes
    }
  }
);
</script>
