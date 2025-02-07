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
      <div class="md:w-[40%] md:mx-auto px-4 relative h-full pb-20">
        <div class="md:pt-5 sm:pt-10 pb-2 relative max-w-md mx-auto">
          <h1 class="text-2xl font-semibold mb-2 text-bigtext">
            Upload Your Documents
          </h1>

          <!-- File Upload Section -->
          <div class="mt-6 space-y-2">
            <!-- Aadhaar Upload -->
            <div>
              <label class="block text-sm font-medium text-bigtext mb-2"
                >Aadhaar Card</label
              >
              <div
                class="border-2 border-dashed border-gray-300 rounded-lg px-6 py-2"
                :class="{ 'bg-gray-50': isDraggingAadhaar }"
                @dragenter.prevent="isDraggingAadhaar = true"
                @dragleave.prevent="isDraggingAadhaar = false"
                @dragover.prevent
                @drop.prevent="handleDrop($event, 'aadhaar')"
              >
                <div v-if="!aadhaarFile && !adharLoader" class="text-center">
                  <svg
                    class="mx-auto h-8 w-8 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4-4m4-4h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-line
                      join="round"
                    />
                  </svg>
                  <div class="mt-1 flex text-sm justify-center">
                    <label
                      class="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      <span>Upload Aadhaar</span>
                      <input
                        type="file"
                        class="sr-only"
                        accept="image/*,.pdf"
                        @change="(e) => handleFileSelect(e, 'aadhaar')"
                      />
                    </label>
                    <p class="pl-1 text-gray-500">or drag and drop</p>
                  </div>
                  <p class="text-xs text-gray-500 mt-2">
                    PDF or images up to 5MB
                  </p>
                </div>
                <div
                  v-else-if="!aadhaarFile && adharLoader"
                  class="text-center"
                >
                  <div class="animate-charcter text-sm">
                    LOADING YOUR DATA ...
                  </div>
                </div>
                <div v-else class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <div class="flex-shrink-0">
                      <svg
                        class="h-6 w-6 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div class="flex-1 min-w-0" v-if="aadhaarFile">
                      <p class="text-sm font-medium text-gray-900 truncate">
                        {{
                          aadhaarFile && aadhaarFile.name
                            ? aadhaarFile.name
                            : ""
                        }}
                      </p>
                      <p class="text-sm text-gray-500">
                        {{ formatFileSize(aadhaarFile.size) }}
                      </p>
                    </div>
                  </div>
                  <div class="flex space-x-3">
                    <button
                      @click="() => openPreview('aadhaar')"
                      class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      View
                    </button>
                    <button
                      @click="() => removeFile('aadhaar')"
                      class="text-sm font-medium text-red-600 hover:text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- PAN Upload -->
            <div>
              <label class="block text-sm font-medium text-bigtext mb-2"
                >PAN Card</label
              >
              <div
                class="border-2 border-dashed border-gray-300 rounded-lg px-6 py-2"
                :class="{ 'bg-gray-50': isDraggingPan }"
                @dragenter.prevent="isDraggingPan = true"
                @dragleave.prevent="isDraggingPan = false"
                @dragover.prevent
                @drop.prevent="handleDrop($event, 'pan')"
              >
                <div v-if="!panFile && !PanLoader" class="text-center">
                  <svg
                    class="mx-auto h-8 w-8 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4-4m4-4h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="mt-1 flex text-sm justify-center">
                    <label
                      class="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      <span>Upload PAN</span>
                      <input
                        type="file"
                        class="sr-only"
                        accept="image/*,.pdf"
                        @change="(e) => handleFileSelect(e, 'pan')"
                      />
                    </label>
                    <p class="pl-1 text-gray-500">or drag and drop</p>
                  </div>
                  <p class="text-xs text-gray-500 mt-2">
                    PDF or images up to 5MB
                  </p>
                </div>
                <div v-else-if="!panFile && PanLoader" class="text-center">
                  <div class="animate-charcter text-sm">
                    LOADING YOUR DATA ...
                  </div>
                </div>
                <div v-else class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <div class="flex-shrink-0">
                      <svg
                        class="h-6 w-6 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate">
                        {{ panFile.name }}
                      </p>
                      <p class="text-sm text-gray-500">
                        {{ formatFileSize(panFile.size) }}
                      </p>
                    </div>
                  </div>
                  <div class="flex space-x-3">
                    <button
                      @click="() => openPreview('pan')"
                      class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      View
                    </button>
                    <button
                      @click="() => removeFile('pan')"
                      class="text-sm font-medium text-red-600 hover:text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Education Proof Upload -->
            <div>
              <label class="block text-sm font-medium text-bigtext mb-2"
                >Education Proof</label
              >
              <div
                class="border-2 border-dashed border-gray-300 rounded-lg px-6 py-2"
                :class="{ 'bg-gray-50': isDraggingEp }"
                @dragenter.prevent="isDraggingEp = true"
                @dragleave.prevent="isDraggingEp = false"
                @dragover.prevent
                @drop.prevent="handleDrop($event, 'ep')"
              >
                <div v-if="!epFile && !BankLoader" class="text-center">
                  <svg
                    class="mx-auto h-8 w-8 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4-4m4-4h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="mt-1 flex text-sm justify-center">
                    <label
                      class="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      <span>Upload Education Proof</span>
                      <input
                        type="file"
                        class="sr-only"
                        accept="image/*,.pdf"
                        @change="(e) => handleFileSelect(e, 'ep')"
                      />
                    </label>
                    <p class="pl-1 text-gray-500">or drag and drop</p>
                  </div>
                  <p class="text-xs text-gray-500 mt-2">
                    PDF or images up to 5MB
                  </p>
                </div>
                <div v-else-if="!panFile && BankLoader" class="text-center">
                  <div class="animate-charcter text-sm">
                    LOADING YOUR DATA ...
                  </div>
                </div>
                <div v-else class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <div class="flex-shrink-0">
                      <svg
                        class="h-6 w-6 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        < path stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0
                        01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414
                        5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate">
                        {{ epFile.name }}
                      </p>
                      <p class="text-sm text-gray-500">
                        {{ formatFileSize(epFile.size) }}
                      </p>
                    </div>
                  </div>
                  <div class="flex space-x-3">
                    <button
                      @click="() => openPreview('ep')"
                      class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      View
                    </button>
                    <button
                      @click="() => removeFile('ep')"
                      class="text-sm font-medium text-red-600 hover:text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="sm:fixed sm:bottom-0 sm:left-0 sm:right-0 sm:p-4 sm:bg-white md:my-10"
          >
            <div class="">
              <!-- :disabled="!isComplete" -->
              <button
                type="submit"
                class="w-full bg-[#1E1B4B] text-white rounded-lg py-3 font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                @click="nextStep"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Preview Modal -->
    <div
      v-if="isPreviewOpen"
      class="fixed inset-0 z-50 overflow-y-auto sm:mx-4 w-500"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          @click="closePreview"
        ></div>

        <div
          class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden md:w-[40%] shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full sm:p-6"
        >
          <div class="absolute top-0 right-0 pt-4 pr-4">
            <button
              @click="closePreview"
              class="bg-white rounded-md text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">Close</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div class="mt-3 text-center sm:mt-0 sm:text-left">
            <h3
              class="text-lg leading-6 font-medium text-gray-900"
              id="modal-title"
            >
              Document Preview
            </h3>
            <div class="mt-4">
              <div v-if="currentPreviewUrl">
                <template v-if="currentFileType?.startsWith('image/')">
                  <img
                    :src="currentPreviewUrl"
                    class="w-full h-auto"
                    :alt="currentFileName"
                  />
                </template>
                <template v-else-if="currentFileType === 'application/pdf'">
                  <object
                    :data="currentPreviewUrl"
                    type="application/pdf"
                    height="400px"
                    width="100%"
                  ></object>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.animate-charcter {
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #09031f 0%,
    #6b19c4 29%,
    #2445a1 67%,
    #13aac5 100%
  );

  background-clip: border-box;

  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 0.5s linear infinite;
  display: inline-block;
  animation: blinker 0.5s linear infinite;
}
@keyframes blinker {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
</style>
<script setup lang ="ts">
import { ref, computed, onUnmounted, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
const router = useRouter();
const isOpen = ref(true);
const isDraggingAadhaar = ref(false);
const isDraggingPan = ref(false);
const isDraggingEp = ref(false);
const aadhaarFile = ref<File | null>(null);
const panFile = ref<File | null>(null);
const epFile = ref<File | null>(null);
const aadhaarPreviewUrl = ref<string | null>(null);
const panPreviewUrl = ref<string | null>(null);
const epPreviewUrl = ref<string | null>(null);
const isPreviewOpen = ref(false);
const currentPreviewType = ref<"aadhaar" | "pan" | "ep" | null>(null);
const adharLoader = ref(false);
const PanLoader = ref(false);
const BankLoader = ref(false);
const isComplete = computed(
  () => aadhaarFile.value && panFile.value && epFile.value
);

const currentPreviewUrl = computed(() => {
  debugger;
  if (currentPreviewType.value === "aadhaar") return aadhaarPreviewUrl.value;
  if (currentPreviewType.value === "pan") return panPreviewUrl.value;
  if (currentPreviewType.value === "ep") return epPreviewUrl.value;
  console.log(currentPreviewType.value, "currentPreviewType.value");
  return null;
});
const uploadAdhar = async (file: File, url: string) => {
  const apiUrl = "https://gkyc.gwcindia.in/web-ocr/api-ocr-documents.php";
  const formData = new URLSearchParams();
  formData.append("aadhaar", "true");
  formData.append("aadhaarF_name", file.name);
  formData.append("aadhaarF_data", url);
  formData.append("aadhaarB_name", "");
  formData.append("aadhaarB_data", "");

  try {
    const response = await axios.post(
      apiUrl,
      formData
      // ,
      // {
      //   headers: {
      //     "Content-Type": "application/form-data",
      //   },
      // }
    );

    if (
      response &&
      response.data &&
      response.data.status === "ok" &&
      response.data.aadhaarData
    ) {
      adharLoader.value = false;

      const uid = response.data.aadhaarData.response.result.uid;
      console.log(uid);
      if (uid) {
        aadhaarFile.value = file;
        aadhaarPreviewUrl.value = URL.createObjectURL(file);
      } else {
        alert("Upload Valid Aadhar !");
      }
    } else {
      alert("Invalid Aadhar !");
      adharLoader.value = false;
    }
  } catch (error) {
    console.error("Error calling API:", error);
    adharLoader.value = false;
  }
};
const uploadBank = async (file: File, url: string) => {
  const apiUrl = "https://gkyc.gwcindia.in/web-ocr/api-ocr-documents.php";
  const formData = new URLSearchParams();
  formData.append("bank", "true");
  formData.append("fileName", file.name);
  formData.append("file_data", url);

  try {
    const response = await axios.post(
      apiUrl,
      formData
      // ,
      // {
      //   headers: {
      //     "Content-Type": "application/form-data",
      //   },
      // }
    );
    BankLoader.value = false;
    if (
      response &&
      response.data &&
      response.data.status === "ok" &&
      response.data.data.result
    ) {
      epFile.value = file;
      epPreviewUrl.value = URL.createObjectURL(file);
    } else {
      alert("Invalid bank proof !");
    }
  } catch (error) {
    BankLoader.value = false;
    console.error("Error calling API:", error);
  }
};
const uploadPan = async (file: File, url: string) => {
  const apiUrl = "https://gkyc.gwcindia.in/web-ocr/api-ocr-documents.php";
  const formData = new URLSearchParams();
  formData.append("pan", "true");
  formData.append("fileName", file.name);
  formData.append("file_data", url);

  try {
    const response = await axios.post(
      apiUrl,
      formData
      // ,
      // {
      //   headers: {
      //     "Content-Type": "application/form-data",
      //   },
      // }
    );
    PanLoader.value = false;
    if (
      response &&
      response.data &&
      response.data.status === "ok" &&
      response.data.panOcrData
    ) {
      const uid = response.data.panOcrData.error;
      if (!uid) {
        console.log(response.data);
        panFile.value = file;
        panPreviewUrl.value = URL.createObjectURL(file);
      } else {
        alert("Upload Valid Pan !");
      }
    } else {
      alert("Invalid Pan !");
    }
  } catch (error) {
    PanLoader.value = false;
    console.error("Error calling API:", error);
  }
};
const currentFileName = computed(() => {
  if (currentPreviewType.value === "aadhaar") return aadhaarFile.value?.name;
  if (currentPreviewType.value === "pan") return panFile.value?.name;
  if (currentPreviewType.value === "ep") return epFile.value?.name;
  return "";
});

const currentFileType = computed(() => {
  if (currentPreviewType.value === "aadhaar") return aadhaarFile.value?.type;
  if (currentPreviewType.value === "pan") return panFile.value?.type;
  if (currentPreviewType.value === "ep") return epFile.value?.type;
  return "";
});

const handleFileSelect = (event: Event, type: "aadhaar" | "pan" | "ep") => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    processFile(input.files[0], type);
  }
};
const handleDrop = (event: DragEvent, type: "aadhaar" | "pan" | "ep") => {
  if (type === "aadhaar") isDraggingAadhaar.value = false;
  if (type === "pan") isDraggingPan.value = false;
  if (type === "ep") isDraggingEp.value = false;

  if (event.dataTransfer?.files.length) {
    processFile(event.dataTransfer.files[0], type);
  }
};
const extractBase64FromDataUrl = (dataUrl) => {
  // Split the Data URL at the comma
  const parts = dataUrl.split(",");

  // Check if the split was successful and return the Base64 part
  if (parts.length > 1) {
    return parts[1]; // This is the Base64 string
  } else {
    throw new Error("Invalid Data URL");
  }
};
const processFile = async (file: File, type: "aadhaar" | "pan" | "ep") => {
  if (file.size > 5 * 1024 * 1024) {
    alert("File size should not exceed 5MB");
    return;
  }

  if (type === "aadhaar") {
    const base64String = await blobUrlToBase64(URL.createObjectURL(file));
    console.log("Base64 String:", base64String);
    const finalUrl = extractBase64FromDataUrl(base64String);
    adharLoader.value = true;
    await uploadAdhar(file, finalUrl);
  } else if (type === "ep") {
    const base64String = await blobUrlToBase64(URL.createObjectURL(file));
    console.log("Base64 String:", base64String);
    const finalUrl = extractBase64FromDataUrl(base64String);
    BankLoader.value = true;
    await uploadBank(file, finalUrl);
  } else {
    const base64String = await blobUrlToBase64(URL.createObjectURL(file));
    console.log("Base64 String:", base64String);
    const finalUrl = extractBase64FromDataUrl(base64String);
    PanLoader.value = true;
    await uploadPan(file, finalUrl);
  }
};
const blobUrlToBase64 = (blobUrl) => {
  return new Promise((resolve, reject) => {
    // Create a new XMLHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.open("GET", blobUrl);
    xhr.responseType = "blob"; // Set the response type to blob

    xhr.onload = () => {
      if (xhr.status === 200) {
        const reader = new FileReader();
        reader.onloadend = () => {
          // The result is a Data URL, we can extract the Base64 part
          const base64data = reader.result; // This is the Data URL
          resolve(base64data); // Resolve the promise with the Base64 data
        };
        reader.readAsDataURL(xhr.response); // Read the blob as Data URL
      } else {
        reject(new Error("Failed to fetch blob"));
      }
    };

    xhr.onerror = () => {
      reject(new Error("Network error"));
    };

    xhr.send(); // Send the request
  });
};
const removeFile = (type: "aadhaar" | "pan" | "ep") => {
  if (type === "aadhaar") {
    if (aadhaarPreviewUrl.value) {
      URL.revokeObjectURL(aadhaarPreviewUrl.value);
    }
    aadhaarFile.value = null;
    aadhaarPreviewUrl.value = null;
  } else if (type === "ep") {
    if (epPreviewUrl.value) {
      URL.revokeObjectURL(epPreviewUrl.value);
    }
    epFile.value = null;
    epPreviewUrl.value = null;
  } else if (type === "pan") {
    if (panPreviewUrl.value) {
      URL.revokeObjectURL(panPreviewUrl.value);
    }
    panFile.value = null;
    panPreviewUrl.value = null;
  }

  if (currentPreviewType.value === type) {
    closePreview();
  }
};
const openPreview = (type: "aadhaar" | "pan" | "ep") => {
  currentPreviewType.value = type;
  isPreviewOpen.value = true;
};
const closePreview = () => {
  isPreviewOpen.value = false;
  currentPreviewType.value = null;
};
const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};
const nextStep = () => {
  router.push("/FifthStep");
  console.log("Next step clicked");
  console.log("Aadhaar:", aadhaarFile.value?.name);
  console.log("PAN:", panFile.value?.name);
  console.log("Education Proof:", epFile.value?.name);
};
onUnmounted(() => {
  if (aadhaarPreviewUrl.value) {
    URL.revokeObjectURL(aadhaarPreviewUrl.value);
  }
  if (panPreviewUrl.value) {
    URL.revokeObjectURL(panPreviewUrl.value);
  }
  if (epPreviewUrl.value) {
    URL.revokeObjectURL(epPreviewUrl.value);
  }
});
watch(currentPreviewUrl, (newUrl) => {
  console.log("Current Preview URL:", newUrl);
});

onMounted(() => {
});
</script>