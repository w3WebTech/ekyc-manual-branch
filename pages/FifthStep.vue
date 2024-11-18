<template>
  <div class="min-h-screen bg-[#ECE8FF] relative overflow-hidden font-inter">
    <div
      class="fixed inset-0 bg-primary z-40"
      v-if="isOpen"
      
    >
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
          <div class="md:pt-5 sm:pt-10 pb-5 relative">
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
                     

                    <h3 class="text-md font-bold text-bigtext">Complete e-KYC</h3>
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
                     

                    <div class="text-md font-bold text-bigtext">Setup Your Profile</div>
                    <div class="text-mdtext text-sm">
                      Answer a few question about yourself
                    </div>
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
                     

                    <h3 class="text-md font-bold text-bigtext">Link your bank a/c</h3>
                    <p class="text-mdtext text-sm">
                      Set the primary account for your transaction
                    </p>
                  </div>
                </div>
                <div class="font-bold text-2xl py-3 px-1 text-bigtext">Next Up...</div>

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
                     

                    <h3 class="text-md font-bold text-bigtext">Confirm it's you</h3>
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
                     

                    <h3 class="text-md font-bold text-bigtext">eSign Ang Login</h3>
                    <p class="text-mdtext text-sm">
                      Sign your Application and start Investing
                    </p>
                  </div>
                </div>
<div class="sm:fixed sm:bottom-0 sm:left-0 sm:right-0 sm:p-4 bg-white">
        <div class="sm:w-full sm:mx-auto ">
               <button
                type="submit"
                class="w-full text-white rounded-lg py-2 mt-6 font-medium transition-colors disabled:cursor-not-allowed bg-[#1E1B4B] 
"
                    @click="nextStep"
              >
                Continue
              </button>
        </div></div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="isCameraAccess">
          <div class="p-6 rounded-lg md:my-6 max-w-md mx-auto" >
            <h1 class="text-2xl font-bold text-bigtext mb-2">Take a Selfie</h1>
            <p class="text-smtext mb-4">
              Ensure your face appears clearly within the frame
            </p>
            <div class="bg-[#f3f4f6] p-4 rounded-lg mb-4">
              <p class="text-bigtext font-bold mb-2">Please remember this:</p>
              <ul class="space-y-2">
                <li class="flex items-center text-smtext">
                  <div class="bg-purple-200 rounded-xl p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#875F9A"
                      class="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
                      />
                    </svg>
                  </div>

                  <span class="px-2 "
                    >Avoid caps, hats, glasses, and sunglasses.</span
                  >
                </li>
                <li class="flex items-center text-smtext">
                  <div class="bg-purple-200 rounded-xl p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#875F9A"
                      class="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                      />
                    </svg>
                  </div>

                  <span class="px-2"
                    >Keep your face straight & within the frame.</span
                  >
                </li>
                <li class="flex items-center text-smtext">
                  <div class="bg-purple-200 rounded-xl p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#875F9A"
                      class="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                      />
                    </svg>
                  </div>

                  <span class="px-2"
                    >Be in a bright area and take a clear picture.</span
                  >
                </li>
                <li class="flex items-center text-smtext">
                  <div class="bg-purple-200 rounded-xl p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#875F9A"
                      class="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                      />
                    </svg>
                  </div>

                  <span class="px-2">
                    you are well-dressed as this picture will feature in your
                    application form and as your display picture.</span
                  >
                </li>
              </ul>
            </div>
            <p class="text-smtext mb-8">
              These details are required by SEBI to open your demat account.
            </p>
            <div class="sm:fixed sm:bottom-0 sm:left-0 sm:right-0 sm:p-4 bg-white">
        <div class="sm:w-full sm:mx-auto ">
            <button
              class="bg-[#1E1B4B] text-white font-bold py-2 px-4 rounded-lg w-full 
 md:mt-6"
              @click="handleContinue"
            >
              Open camera
            </button>
        </div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    v-if="cameraaccessdialog"
    class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-50 "
  >
    <div
      class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0"
    >
      <div
        class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:mx-5"
      >
        
        <div class="max-w-md mx-auto">
          <div class="bg-white rounded-lg p-6 w-full  relative">
            <button
              @click="handleClose"
              class="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              <Icon name="lucide:x" class="w-5 h-5" />
            </button>

            <div class="flex justify-center space-x-4 mb-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="green"
                  class="h-12 w-12"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="gray"
                  class="h-10 w-10 pt-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="green"
                  class="h-12 w-12"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </div>
            </div>

            <h2 class="text-xl font-bold text-center  text-bigtext mb-2">
              Allow camera & location access
            </h2>

            <p class="text-mdtext text-center font-semibold text-md mb-6">
              In case disabled, please enable permissions from your browser's
              settings
            </p>

            <button
              @click="handleConfirm"
              class="w-full bg-[#1E1B4B] font-bold text-white py-3 rounded-lg transition-colors"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    v-if="vedioScreen"
    class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-50"
  >
    <div
      class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0"
    >
      <div
        class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg md:w-[50%] md:h-[500px] sm:mx-5"
      >
        <div class="bg-white rounded-lg p-6 w-full md:h-full relative">
            <div v-if="capturedImage && !isLoading" class="m-2">
          <div class="font-bold py-1 text-2xl text-bigtext">Looking Good !</div>
          <div class="font-semibold text-md text-smtext ">Your Photo Could be verified ...</div>
          <img
            :src="capturedImage"
            alt="Captured Image"
            class="md:w-[400px] md:h-[350px]  sm:w-full m-auto rounded-lg"
          />
           <button
              @click="MoveToNext"
              class="bg-[#1E1B4B] font-bold text-white px-6 py-2 w-full my-2 rounded-xl shadow-md transition duration-200"
            >
           
                Continue
              
            </button>
        </div>
        <div v-else-if="isLoading">
          <div class="">
            <div class="font-bold text-bigtext p-5">Verifying...</div>
            <img
              src="public/images/faceverifying.png"
              alt="Google"
              class="w-100 h-100 md:mx-20 sm:mx-5 my-10"
            />
            
          </div>
        </div>
           <div class="relative  " v-else >
            <div class="m-auto w-full border-10 border-gray-800 bg-gray-50 md:h-[400px] " >
              <video ref="videoElement" class="w-full md:h-full" autoplay></video>
            </div>
            <canvas ref="canvas" class="hidden"></canvas>

            <div class="absolute top-3 right-3 p-2 bg-gray-100 rounded-md" @click="vedioScreen =false">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="gray"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="gray"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div class="absolute top-[40%] left-[40%]" v-if="isSpinner">
              <div class="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>

        
            <button
              @click="capture"
              class="bg-[#1E1B4B] text-white font-bold  px-6 py-2 w-full my-2 rounded-xl shadow-md transition duration-200"
            >
              <div class="flex justify-center text-center items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    class="h-5 w-5 my-0.5 mx-2"
                  >
                    <path
                      d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>Capture Photo</div>
              </div>
            </button>
          </div> 
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { computed } from "vue";
import WebcamStream from "@/components/WebcamStream.vue";
const videoElement = ref<HTMLVideoElement | null>(null);
const searchQuery = ref("");
const router = useRouter();
const isOpen = ref(false);
const verificationStep = ref(true);
const isCameraAccess = ref(false);
const cameraaccessdialog = ref(false);
const vedioScreen = ref(false);
const isSpinner = ref(false);
const isLoading = ref(false);
const canvas = ref<HTMLCanvasElement | null>(null);
const capturedImage = ref<string | null>(null);
const hasPermissions = ref(false);
const openBottomSheet = () => {
  isOpen.value = true;
};
const closeBottomSheet = () => {
  isOpen.value = false;
};
onMounted(() => {
  setTimeout(openBottomSheet, 100);
});
const nextStep = () => {
  verificationStep.value = false;
  isCameraAccess.value = true;
};
const handleConfirm = async () => {
  try {
    // Check if the device has a camera available
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter(
      (device) => device.kind === "videoinput"
    );

    if (videoDevices.length === 0) {
      // If no camera is found, log the warning and proceed to location permission
      console.warn("No camera found on this device.");
    } else {
      // Request camera permission if the camera is available
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    }

    // Request location permission regardless of camera availability
    const locationPermission = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true,
      });
    });

    // If both permissions are granted, set the hasPermissions flag to true
    hasPermissions.value = true;

    // Optionally, close the camera access dialog/modal
    cameraaccessdialog.value = false;

    console.log("Camera and location permissions granted.");
  } catch (error) {
    console.error("Error requesting permissions:", error);
      hasPermissions.value = false;

    // Optionally, close the camera access dialog/modal
    cameraaccessdialog.value = false;

    if (error.message === "No camera found on this device.") {
      // alert(
      //   "No camera found on your device. Location permission will still be requested."
      // );
    } else if (
      error.name === "NotAllowedError" ||
      error.name === "PermissionDeniedError"
    ) {
      // Handle geolocation permission denial
      if (error.code === 1) {
        // alert(
        //   "Location permission denied. Please enable location access in your browser settings."
        // );
      } else if (error.code === 2) {
      // alert("Location is unavailable. Please try again later.");
      }

      // Handle camera permission denial
      if (error.message.includes("getUserMedia")) {
        // alert(
        //   "Camera permission denied. Please allow camera access in your browser settings."
        // );
      }
    } else {
      // alert(
      //   "An error occurred while requesting permissions. Please try again later."
      // );
    }
  }
};
const startCamera = async () => {
  try {
    // Request access to the camera
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });

    // Bind the video stream to the video element
    if (videoElement.value) {
      videoElement.value.srcObject = stream;
    }

    // Optional: Stop the stream when the component is destroyed
    onUnmounted(() => {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
    });
  } catch (error) {
    console.error("Error accessing camera:", error);
    //alert("Unable to access the camera. Please check your permissions.");
  }
};
const handleContinue = () => {
  if (hasPermissions.value == true) {
    isSpinner.value = true;
    const constraints = { video: true };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        if (videoElement.value) {
          videoElement.value.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error("Error accessing the camera:", error);
        //alert("Error accessing the camera.");
      });
    vedioScreen.value = true;
    setTimeout(() => {
      isSpinner.value = false;
    }, 1000);
  } else {
    cameraaccessdialog.value = true;
    startCamera();
  }
};
const MoveToNext =()=>{
     router.push("/SixthStep");
}
const capture = () => {

  if (videoElement.value && canvas.value) {
    const context = canvas.value.getContext("2d");
    if (context) {
      // Set canvas dimensions to match the video
      canvas.value.width = videoElement.value.videoWidth;
      canvas.value.height = videoElement.value.videoHeight;
      // Draw the current video frame to the canvas
      context.drawImage(
        videoElement.value,
        0,
        0,
        canvas.value.width,
        canvas.value.height
      );
      // Convert the canvas to a data URL and store it in capturedImage
      capturedImage.value = canvas.value.toDataURL("image/png");
      isLoading.value = true;
      setTimeout(() => {
        isLoading.value = false;
      }, 2000);
    }
  }
};
</script>
<style scoped lang="scss">
video {
  //object-fit: cover;
}
.lds-spinner,
.lds-spinner div,
.lds-spinner div:after {
  box-sizing: border-box;
}
.lds-spinner {
  color: currentColor;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-spinner div {
  transform-origin: 40px 40px;
  animation: lds-spinner 1.2s linear infinite;
}
.lds-spinner div:after {
  content: " ";
  display: block;
  position: absolute;
  top: 3.2px;
  left: 36.8px;
  width: 8.4px;
  height: 17.6px;
  border-radius: 40%;
  background: currentColor;
}
.lds-spinner div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -1.1s;
}
.lds-spinner div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -1s;
}
.lds-spinner div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.9s;
}
.lds-spinner div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.8s;
}
.lds-spinner div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.7s;
}
.lds-spinner div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.6s;
}
.lds-spinner div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.5s;
}
.lds-spinner div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.4s;
}
.lds-spinner div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.3s;
}
.lds-spinner div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.2s;
}
.lds-spinner div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.1s;
}
.lds-spinner div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
}
@keyframes lds-spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>


