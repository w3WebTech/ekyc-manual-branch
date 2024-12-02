<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-20">
    <div class="mb-4">
      <h1 class="text-lg font-bold">Digilocker - Documents for KYC</h1>
      <p class="text-sm text-gray-700">Your Aadhaar card <span class="font-bold">must be linked to your mobile</span> number to receive and confirm OTP</p>
      <p class="text-sm text-blue-500 mt-1">How to link Aadhaar to your mobile? <a href="#" class="text-blue-500 underline">Learn</a></p>
    </div>
    <div class="bg-gray-100 p-4 rounded-lg mb-4">
      <div class="flex items-start">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" class="size-5 my-1 mx-4">
  <path fill-rule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm5.845 17.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V12a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clip-rule="evenodd" />
  <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
</svg>

        <div>
          <h2 class="text-sm font-bold">Why is Digilocker needed?</h2>
          <p class="text-sm text-gray-700">Digilocker automatically verifies your documents needed for KYC and account opening on Groww</p>
          <p class="text-sm text-gray-500 mt-1">Your data is 100% safe and secure</p>
        </div>
      </div>
    </div>
 <div class="fixed bottom-0 w-[90%]">
          <button
            type="button"
            class="rounded-md bg-indigo-500 px-3.5 py-2.5 mb-5 w-full text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
           @click="moveToConfirmation"
          >
            Proceed For KYC
          </button>
        </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
   
  }},
  methods: {
   async moveToConfirmation() {
  // eKycFinalStep.value = false;
  // finalConfirmation.value = true;
   await this.getDigiLocker()
},
async getDigiLocker()  {
  const apiUrl = "https://phpstack-529375-5021731.cloudwaysapps.com/api/create-digilocker.php";
try {
  const response = await axios.get(apiUrl);  // Make the API call
  if (response && response.data && response.data.result && response.data.result.url) {
    const url = response.data.result.url;  // Get the URL from the response

    console.log(url, "checking");  // Log the URL for debugging
window.location.href = url;
// let croppedUrl = url.replace(/^http:\/\/localhost:3001\//, '');  // Remove 'http://localhost:3001/'
// console.log(croppedUrl);
//     router.push(croppedUrl); 
  } else {
    console.error('API response format is not as expected');
  }
} catch (error) {
  console.error("Error calling API:", error);  // Handle errors in the API call
}
}
    
}}
</script>