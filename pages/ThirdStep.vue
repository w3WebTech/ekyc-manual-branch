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
        <div v-if="isStepVerify">
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
                     

                    <h3 class="text-md text-bigtext font-bold">
                      Complete e-KYC
                    </h3>
                    <p class="text-mdtext text-sm">
                      Keep your Aadhaar and PAN card handy
                    </p>
                  </div>
                </div>
                <div class="font-bold text-2xl py-4 px-1 text-bigtext">
                  Next Up...
                </div>
                <div class="flex items-center space-x-10">
                  <div class="bg-purple-200 rounded-full p-3">
                    <svg
                      class="w-4 h-4 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </div>
                  <div class="mb-4">
                     

                    <div class="text-md font-bold text-bigtext">
                      Setup Your Profile
                    </div>
                    <div class="text-smtext text-sm">
                      Answer a few question about yourself
                    </div>
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
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                  </div>
                  <div class="mb-4">
                     

                    <h3 class="text-md font-bold text-bigtext">
                      Link your bank a/c
                    </h3>
                    <p class="text-smtext text-sm">
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
                  <div class="mb-4">
                     

                    <h3 class="text-md font-bold text-bigtext">
                      Confirm it's you
                    </h3>
                    <p class="text-smtext text-sm">
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
                  <div class="mb-4">
                     

                    <h3 class="text-md font-bold text-bigtext">
                      eSign Ang Login
                    </h3>
                    <p class="text-smtext text-sm">
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
        <div v-if="isOccupation">
          <div class="p-6 mt-6 max-w-md mx-auto">
            <h1 class="text-2xl font-semibold text-bigtext mb-1">
              Your occupation
            </h1>
            <p class="text-smtext text-md mb-10">
              These details are required by SEBI to open your demat account.
            </p>
            <div class="grid grid-cols-2 gap-6">
              <button
                class="py-2 px-4 rounded-lg border border-gray-300 hover:bg-[#1E1B4B] hover:text-white hover:font-semibold"
                @click="occupationVal('Agriculturist')"
                :class="
                  userOccupation == 'Agriculturist'
                    ? 'bg-[#1E1B4B] text-white font-semibold'
                    : 'bg-gray-100 text-mdtext'
                "
              >
                Agriculturist
              </button>
              <button
                class="py-2 px-4 rounded-lg border border-gray-300 hover:bg-[#1E1B4B] hover:text-white hover:font-semibold"
                @click="occupationVal('Business')"
                :class="
                  userOccupation == 'Business'
                    ? 'bg-[#1E1B4B] text-white font-semibold'
                    : 'bg-gray-100 text-mdtext'
                "
              >
                Business
              </button>
              <button
                class="py-2 px-4 rounded-lg border border-gray-300 hover:bg-[#1E1B4B] hover:text-white hover:font-semibold"
                @click="occupationVal('Govt. Service')"
                :class="
                  userOccupation == 'Govt. Service'
                    ? 'bg-[#1E1B4B] text-white font-semibold'
                    : 'bg-gray-100 text-mdtext'
                "
              >
                Govt. Service
              </button>
              <button
                class="py-2 px-4 rounded-lg border border-gray-300 hover:bg-[#1E1B4B] hover:text-white hover:font-semibold"
                @click="occupationVal('Housewife')"
                :class="
                  userOccupation == 'Housewife'
                    ? 'bg-[#1E1B4B] text-white font-semibold'
                    : 'bg-gray-100 text-mdtext'
                "
              >
                Housewife
              </button>
              <button
                class="py-2 px-4 rounded-lg border border-gray-300 hover:bg-[#1E1B4B] hover:text-white hover:font-semibold"
                @click="occupationVal('Private Sector')"
                :class="
                  userOccupation == 'Private Sector'
                    ? 'bg-[#1E1B4B] text-white font-semibold'
                    : 'bg-gray-100 text-mdtext'
                "
              >
                Private Sector
              </button>
              <button
                class="py-2 px-4 rounded-lg border border-gray-300 hover:bg-[#1E1B4B] hover:text-white hover:font-semibold"
                @click="occupationVal('Public Sector')"
                :class="
                  userOccupation == 'Public Sector'
                    ? 'bg-[#1E1B4B] text-white font-semibold'
                    : 'bg-gray-100 text-mdtext'
                "
              >
                Public Sector
              </button>
              <button
                class="py-2 px-4 rounded-lg border border-gray-300 hover:bg-[#1E1B4B] hover:text-white hover:font-semibold"
                @click="occupationVal('Professional')"
                :class="
                  userOccupation == 'Professional'
                    ? 'bg-[#1E1B4B] text-white font-semibold'
                    : 'bg-gray-100 text-mdtext'
                "
              >
                Professional
              </button>
              <button
                class="py-2 px-4 rounded-lg border border-gray-300 hover:bg-[#1E1B4B] hover:text-white hover:font-semibold"
                @click="occupationVal('Retired')"
                :class="
                  userOccupation == 'Retired'
                    ? 'bg-[#1E1B4B] text-white font-semibold'
                    : 'bg-gray-100 text-mdtext'
                "
              >
                Retired
              </button>
              <button
                class="py-2 px-4 rounded-lg border border-gray-300 hover:bg-[#1E1B4B] hover:text-white hover:font-semibold"
                @click="occupationVal('Student')"
                :class="
                  userOccupation == 'Student'
                    ? 'bg-[#1E1B4B] text-white font-semibold'
                    : 'bg-gray-100 text-mdtext'
                "
              >
                Student
              </button>
              <button
                class="py-2 px-4 rounded-lg border border-gray-300 hover:bg-[#1E1B4B] hover:text-white hover:font-semibold"
                @click="occupationVal('Others')"
                :class="
                  userOccupation == 'Others'
                    ? 'bg-[#1E1B4B] text-white font-semibold'
                    : 'bg-gray-100 text-mdtext'
                "
              >
                Others
              </button>
            </div>
          </div>
        </div>
        <div v-if="tradingExp">
          <div class="p-6 pt-10 max-w-md mx-auto">
            <div class="flex">
              <div class="mt-2" @click="moveBack">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="gray"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h1 class="text-2xl font-semibold text-bigtext mb-1 px-2">
                Your trading experience
              </h1>
            </div>

            <p class="text-smtext text-md mb-10">
              These details are required by SEBI to open your demat account.
            </p>
            <div class="grid grid-cols-2 gap-6 mb-4">
              <button
                class="py-2 px-4 rounded-lg border border-gray-300 hover:bg-[#1E1B4B] hover:text-white hover:font-semibold"
                @click="tradingExperienceVal('New Investor')"
                :class="
                  tradingExperience == 'New Investor'
                    ? 'bg-[#1E1B4B] text-white font-semibold'
                    : 'bg-gray-100 text-mdtext'
                "
              >
                New Investor
              </button>
              <button
                class="py-2 px-4 rounded-lg border border-gray-300 hover:bg-[#1E1B4B] hover:text-white hover:font-semibold"
                @click="tradingExperienceVal('Less than 1 year')"
                :class="
                  tradingExperience == 'Less than 1 year'
                    ? 'bg-[#1E1B4B] text-white font-semibold'
                    : 'bg-gray-100 text-mdtext'
                "
              >
                Less than 1 year
              </button>
              <button
                class="py-2 px-4 rounded-lg border border-gray-300 hover:bg-[#1E1B4B] hover:text-white hover:font-semibold"
                @click="tradingExperienceVal('1-2 years')"
                :class="
                  tradingExperience == '1-2 years'
                    ? 'bg-[#1E1B4B] text-white font-semibold'
                    : 'bg-gray-100 text-mdtext'
                "
              >
                1-2 years
              </button>

              <button
                class="py-2 px-4 rounded-lg border border-gray-300 hover:bg-[#1E1B4B] hover:text-white hover:font-semibold"
                @click="tradingExperienceVal('2-5 years')"
                :class="
                  tradingExperience == '2-5 years'
                    ? 'bg-[#1E1B4B] text-white font-semibold'
                    : 'bg-gray-100 text-mdtext'
                "
              >
                2-5 years
              </button>
              <button
                class="py-2 px-4 rounded-lg border border-gray-300 hover:bg-[#1E1B4B] hover:text-white hover:font-semibold"
                @click="tradingExperienceVal('5-10 years')"
                :class="
                  tradingExperience == '5-10 years'
                    ? 'bg-[#1E1B4B] text-white font-semibold'
                    : 'bg-gray-100 text-mdtext'
                "
              >
                5-10 years
              </button>
              <button
                class="py-2 px-4 rounded-lg border border-gray-300 hover:bg-[#1E1B4B] hover:text-white hover:font-semibold"
                @click="tradingExperienceVal('10-20 years')"
                :class="
                  tradingExperience == '10-20 years'
                    ? 'bg-[#1E1B4B] text-white font-semibold'
                    : 'bg-gray-100 text-mdtext'
                "
              >
                10-20 years
              </button>
              <button
                class="py-2 px-4 rounded-lg border border-gray-300 hover:bg-[#1E1B4B] hover:text-white hover:font-semibold"
                @click="tradingExperienceVal('20-25 years')"
                :class="
                  tradingExperience == '20-25 years'
                    ? 'bg-[#1E1B4B] text-white font-semibold'
                    : 'bg-gray-100 text-mdtext'
                "
              >
                20-25 years
              </button>
              <button
                class="py-2 px-4 rounded-lg border border-gray-300 hover:bg-[#1E1B4B] hover:text-white hover:font-semibold"
                @click="tradingExperienceVal('25 years+')"
                :class="
                  tradingExperience == '25 years+'
                    ? 'bg-[#1E1B4B] text-white font-semibold'
                    : 'bg-gray-100 text-mdtext'
                "
              >
                25 years+
              </button>
            </div>
            <div class="flex items-center my-5">
              <input
                type="checkbox"
                id="pep"
                class="h-4 w-4 text-green-600 border-gray-300 rounded hover:ring-white focus:ring-white"
              />
              <label for="pep" class="ml-2 text-md text-smtext"
                >I am not a politically exposed person</label
              >
            </div>
            <div
              class="sm:fixed sm:bottom-0 sm:left-0 sm:right-0 sm:p-4 bg-white"
            >
              <div class="sm:w-full sm:mx-auto">
                <button
                  class="w-full py-2 my-6 px-4 bg-[#1E1B4B] font-bold text-white rounded-lg"
                  @click="moveTosegment"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="tradingSeg">
          <div class="p-6 pt-10 max-w-md mx-auto">
            <div class="flex">
              <div class="mt-2" @click="moveBackprev">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="gray"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h1 class="text-2xl font-semibold text-bigtext mb-1 px-2">
                Your trading segments
              </h1>
            </div>

            <p class="text-smtext text-md mb-8">
              These details are required by SEBI to open your demat account.
            </p>
            <div class="grid grid-cols-2 gap-6 mb-4">
              <button
                class="py-2 px-4 rounded-lg border border-gray-300 hover:bg-[#1E1B4B] hover:text-white hover:font-semibold flex items-center space-x-2"
                @click="tradingSegmentVal('NSE CASH')"
                :class="
                  tradingSegment == 'NSE CASH'
                    ? 'bg-[#1E1B4B] text-white font-semibold'
                    : 'bg-gray-100 text-mdtext'
                "
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                    />
                  </svg>
                </span>
                <span class="px-4">NSE CASH</span>
              </button>
              <button
                class="py-2 flex items-center space-x-2 px-4 rounded-lg border border-gray-300 hover:bg-[#1E1B4B] hover:text-white hover:font-semibold"
                @click="tradingSegmentVal('BSE CASH')"
                :class="
                  tradingSegment == 'BSE CASH'
                    ? 'bg-[#1E1B4B] text-white font-semibold'
                    : 'bg-gray-100 text-mdtext'
                "
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                    />
                  </svg>
                </span>
                <span> BSE CASH</span>
              </button>
              <button
                class="py-2 flex items-center space-x-2 px-4 rounded-lg border border-gray-300 hover:bg-[#1E1B4B] hover:text-white hover:font-semibold"
                @click="tradingSegmentVal('NSE F & O')"
                :class="
                  tradingSegment == 'NSE F & O'
                    ? 'bg-[#1E1B4B] text-white font-semibold'
                    : 'bg-gray-100 text-mdtext'
                "
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                    />
                  </svg>
                </span>
                <span class="px-4">  NSE F & O</span>
              
              </button>

              <button
                class="py-2 flex items-center space-x-2 px-4 rounded-lg border border-gray-300 hover:bg-[#1E1B4B] hover:text-white hover:font-semibold"
                @click="tradingSegmentVal('BSE F & O')"
                :class="
                  tradingSegment == 'BSE F & O'
                    ? 'bg-[#1E1B4B] text-white font-semibold'
                    : 'bg-gray-100 text-mdtext'
                "
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                    />
                  </svg>
                </span>
                <span class="px-4">  BSE F & O</span>
              
              </button>
              <button
                class="my-2 flex items-center space-x-2 px-4 rounded-lg border border-gray-300 hover:bg-[#1E1B4B] hover:text-white hover:font-semibold"
                @click="tradingSegmentVal('NSE COMMODITIES')"
                :class="
                  tradingSegment == 'NSE COMMODITIES'
                    ? 'bg-[#1E1B4B] text-white font-semibold'
                    : 'bg-gray-100 text-mdtext'
                "
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                    />
                  </svg>
                </span>
                <span class="">NSE COMMODITIES</span>
                
              </button>
              <button
                class="my-2 flex items-center space-x-2 px-4 rounded-lg border border-gray-300 hover:bg-[#1E1B4B] hover:text-white hover:font-semibold"
                @click="tradingSegmentVal('BSE COMMODITIES')"
                :class="
                  tradingSegment == 'BSE COMMODITIES'
                    ? 'bg-[#1E1B4B] text-white font-semibold'
                    : 'bg-gray-100 text-mdtext'
                "
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                    />
                  </svg>
                </span>
                <span>BSE COMMODITIES</span>
                
              </button>
              <button
                class="py-2 flex items-center space-x-2 px-4 rounded-lg border border-gray-300 hover:bg-[#1E1B4B] hover:text-white hover:font-semibold"
                @click="tradingSegmentVal('NSE CD')"
                :class="
                  tradingSegment == 'NSE CD'
                    ? 'bg-[#1E1B4B] text-white font-semibold'
                    : 'bg-gray-100 text-mdtext'
                "
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                    />
                  </svg>
                </span>
                <span class="px-4">NSE CD</span>
                
              </button>
              <button
                class="py-2 flex items-center space-x-2 px-4 rounded-lg border border-gray-300 hover:bg-[#1E1B4B] hover:text-white hover:font-semibold"
                @click="tradingSegmentVal('BSE CD')"
                :class="
                  tradingSegment == 'BSE CD'
                    ? 'bg-[#1E1B4B] text-white font-semibold'
                    : 'bg-gray-100 text-mdtext'
                "
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                    />
                  </svg>
                </span>
                <span class="px-4">BSE CD</span>
                
              </button>
              <button
                class="py-2 flex items-center space-x-2 px-4 rounded-lg border border-gray-300 hover:bg-[#1E1B4B] hover:text-white hover:font-semibold"
                @click="tradingSegmentVal('BSE CD')"
                :class="
                  tradingSegment == 'BSE CD'
                    ? 'bg-[#1E1B4B] text-white font-semibold'
                    : 'bg-gray-100 text-mdtext'
                "
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                    />
                  </svg>
                </span>
                <span class="px-4">MCX</span>
                
              </button>
              <button
                class="py-2 flex items-center space-x-2 px-4 rounded-lg border border-gray-300 hover:bg-[#1E1B4B] hover:text-white hover:font-semibold"
                @click="tradingSegmentVal('BSE CD')"
                :class="
                  tradingSegment == 'BSE CD'
                    ? 'bg-[#1E1B4B] text-white font-semibold'
                    : 'bg-gray-100 text-mdtext'
                "
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                    />
                  </svg>
                </span>
                <span>MSE CD</span>
                
              </button>
            </div>

            <div
              class="sm:fixed sm:bottom-0 sm:left-0 sm:right-0 sm:p-4 bg-white"
            >
              <div class="sm:w-full sm:mx-auto">
                <button
                  class="w-full py-2 my-6 px-4 bg-[#1E1B4B] font-bold text-white rounded-lg"
                  @click="moveToNext"
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
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const isOpen = ref(false);
const isStepVerify = ref(true);
const isOccupation = ref(false);
const userOccupation = ref("");
const tradingExp = ref(false);
const tradingExperience = ref("");
const tradingSegment = ref("");
const tradingSeg = ref(false);
onMounted(() => {
  setTimeout(openBottomSheet, 100);
});
const openBottomSheet = () => {
  isOpen.value = true;
};
const closeBottomSheet = () => {
  isOpen.value = false;
};
const nextStep = () => {
  isStepVerify.value = false;
  isOccupation.value = true;
};
const occupationVal = (val: string) => {
  userOccupation.value = val;
  isOccupation.value = false;
  tradingExp.value = true;
};
const tradingExperienceVal = (val: string) => {
  tradingExperience.value = val;
};
const tradingSegmentVal = (val: string) => {
  tradingSegment.value = val;
};
const moveToNext = () => {
  router.push("/FourthStep");
};
const moveBack = () => {
  tradingExp.value = false;
  isOccupation.value = true;
};
const moveBackprev = () => {
  tradingExp.value = true;
  tradingSeg.value = false;
};
const moveTosegment = () => {
  tradingSeg.value = true;
  tradingExp.value = false;
};
</script>
