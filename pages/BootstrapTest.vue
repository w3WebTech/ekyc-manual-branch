<template>
  <div class="min-vh-100 bg-light position-relative overflow-hidden font-inter">
    <div class="position-fixed top-0 start-0 end-0 bg-primary z-40" v-if="isOpen">
      <div class="d-flex justify-content-between">
        <div></div>
        <div class="p-4 text-xl text-white fw-bold">goodwill</div>
      </div>
    </div>
    <div
      class="position-fixed bottom-0 start-0 end-0 bg-white z-50 rounded-top transition-transform"
      :class="{ 'translate-y-0': isOpen, 'translate-y-full': !isOpen }"
      style="height: 90%;"
    >
      <div class="col-md-5 mx-auto px-4 position-relative h-100 pb-5 md:w-[50%]">
        <div class="pt-5 pb-2 mx-auto text-center">
          <h1 class="h2 fw-semibold mb-2 text-bigtext">Upload Your Documents</h1>

          <!-- File Upload Section -->
          <div class="mt-4">
            <!-- Aadhaar Upload -->
            <div class="mb-4">
              <label class="form-label text-bigtext">Aadhaar Card</label>
              <div
                class="border border-dashed border-secondary rounded-lg px-4 py-2"
                :class="{ 'bg-light': isDraggingAadhaar }"
                @dragenter.prevent="isDraggingAadhaar = true"
                @dragleave.prevent="isDraggingAadhaar = false"
                @dragover.prevent
                @drop.prevent="handleDrop($event, 'aadhaar')"
              >
                <div v-if="!aadhaarFile && !adharLoader" class="text-center">
                  <div class="mt-1 d-flex justify-content-center">
                    <label class="cursor-pointer ">
                      <span>Upload Aadhaar</span>
                      <input
                        type="file"
                        class="d-none"
                        accept="image/*,.pdf"
                        @change="(e) => handleFileSelect(e, 'aadhaar')"
                      />
                    </label>
                    <p class="ms-1 text-muted">or drag and drop</p>
                  </div>
                  <p class="text-muted mt-2">PDF or images up to 5MB</p>
                </div>
                <div v-else-if="!aadhaarFile && adharLoader" class="text-center">
                  <div class="animate-charcter text-sm">LOADING YOUR DATA ...</div>
                </div>
                <div v-else class="d-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-center">
                    <div class="ms-3">
                      <p class="text-sm fw-medium text-dark truncate">
                        {{ aadhaarFile && aadhaarFile.name ? aadhaarFile.name : "" }}
                      </p>
                      <p class="text-sm text-muted">
                        {{ formatFileSize(aadhaarFile.size) }}
                      </p>
                    </div>
                  </div>
                  <div class="d-flex">
                    <button
                      @click="() => openPreview('aadhaar')"
                      type="button" class="btn btn-primary"
                    >
                      View
                    </button>
                    <button
                      @click="() => removeFile('aadhaar')"
                      class="btn btn-link text-danger"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- PAN Upload -->
            <div class="mb-4">
              <label class="form-label text-bigtext">PAN Card</label>
              <div
                class="border border-dashed border-secondary rounded-lg px-4 py-2"
                :class="{ 'bg-light': isDraggingPan }"
                @dragenter.prevent="isDraggingPan = true"
                @dragleave.prevent="isDraggingPan = false"
                @dragover.prevent
                @drop.prevent="handleDrop($event, 'pan')"
              >
                <div v-if="!panFile && !PanLoader" class="text-center">
                  <div class="mt-1 d-flex justify-content-center">
                    <label class="cursor-pointer ">
                      <span>Upload PAN</span>
                      <input
                        type="file"
                        class="d-none"
                        accept="image/*,.pdf"
                        @change="(e) => handleFileSelect(e, 'pan')"
                      />
                    </label>
                    <p class="ms-1 text-muted">or drag and drop</p>
                  </div>
                  <p class="text-muted mt-2">PDF or images up to 5MB</p>
                </div>
                <div v-else-if="!panFile && PanLoader" class="text-center">
                  <div class="animate-charcter text-sm">LOADING YOUR DATA ...</div>
                </div>
                <div v-else class="d-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-center">
                    <div class="ms-3">
                      <p class="text-sm fw-medium text-dark truncate">
                        {{ panFile.name }}
                      </p>
                      <p class="text-sm text-muted">
                        {{ formatFileSize(panFile.size) }}
                      </p>
                    </div>
                  </div>
                  <div class="d-flex">
                    <button
                      @click="() => openPreview('pan')"
                      class="btn btn-link "
                    >
                      View
                    </button>
                    <button
                      @click="() => removeFile('pan')"
                      class="btn btn-link text-danger"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Education Proof Upload -->
            <div class="mb-4">
              <label class="form-label text-bigtext">Education Proof</label>
              <div
                class="border border-dashed border-secondary rounded-lg px-4 py-2"
                :class="{ 'bg-light': isDraggingEp }"
                @dragenter.prevent="isDraggingEp = true"
                @dragleave.prevent="isDraggingEp = false"
                @dragover.prevent
                @drop.prevent="handleDrop($event, 'ep')"
              >
                <div v-if="!epFile && !BankLoader" class="text-center">
                  <div class="mt-1 d-flex justify-content-center">
                    <label class="cursor-pointer ">
                      <span>Upload Education Proof</span>
                      <input
                        type="file"
                        class="d-none"
                        accept="image/*,.pdf"
                        @change="(e) => handleFileSelect(e, 'ep')"
                      />
                    </label>
                    <p class="ms-1 text-muted">or drag and drop</p>
                  </div>
                  <p class="text-muted mt-2">PDF or images up to 5MB</p>
                </div>
                <div v-else-if="!epFile && BankLoader" class="text-center">
                  <div class="animate-charcter text-sm">LOADING YOUR DATA ...</div>
                </div>
                <div v-else class="d-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-center">
                    <div class="ms-3">
                      <p class="text-sm fw-medium text-dark truncate">
                        {{ epFile.name }}
                      </p>
                      <p class="text-sm text-muted">
                        {{ formatFileSize(epFile.size) }}
                      </p>
                    </div>
                  </div>
                  <div class="d-flex">
                    <button
                      @click="() => openPreview('ep')"
                      class="btn btn-link "
                    >
                      View
                    </button>
                    <button
                      @click="() => removeFile('ep')"
                      class="btn btn-link text-danger btm-primary"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

  
 <div    v-if="isPreviewOpen"
                class="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
                @click="closePreview"
              ></div>
          <!-- Preview Modal -->
          <div
            v-if="isPreviewOpen"
            class="fixed inset-0 z-50 overflow-y-auto"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div class="d-flex align-items-end justify-content-center min-vh-100 pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
             class="fixed inset-0"
                @click="closePreview"
              ></div>

              <div
                class="modal-dialog modal-lg"
                role="document"
              >
                <div class="modal-content bg-red bg-opacity-0 transition-opacity">
                  <div class="modal-header">
                    <h5 class="modal-title" id="modal-title">Document Preview</h5>
                    <button
                      type="button"
                      class="btn-close"
                      @click="closePreview"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body text-center">
                    <div v-if="currentPreviewUrl">
                      <template v-if="currentFileType?.startsWith('image/')">
                        <img
                          :src="currentPreviewUrl"
                          class="img-fluid"
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
<script setup lang="ts">
import { ref, computed, onUnmounted, onMounted } from "vue";
import { useRouter } from "vue-router";
import 'bootstrap/dist/css/bootstrap.min.css';
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
  if (currentPreviewType.value === "aadhaar") return aadhaarPreviewUrl.value;
  if (currentPreviewType.value === "pan") return panPreviewUrl.value;
  if (currentPreviewType.value === "ep") return epPreviewUrl.value;
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
    const response = await axios.post(apiUrl, formData);

    if (
      response &&
      response.data &&
      response.data.status === "ok" &&
      response.data.aadhaarData
    ) {
      adharLoader.value = false;

      const uid = response.data.aadhaarData.response.result.uid;
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
    const response = await axios.post(apiUrl, formData);
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
    const response = await axios.post(apiUrl, formData);
    PanLoader.value = false;
    if (
      response &&
      response.data &&
      response.data.status === "ok" &&
      response.data.panOcrData
    ) {
      const uid = response.data.panOcrData.error;
      if (!uid) {
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
  const parts = dataUrl.split(",");
  if (parts.length > 1) {
    return parts[1];
  } else {
    throw new Error("Invalid Data URL");
  }
};

const processFile = async (file: File, type: "aadhaar" | "pan" | "ep") => {
  if (file.size > 5 * 1024 * 1024) {
    alert("File size should not exceed 5MB");
    return;
  }

  const base64String = await blobUrlToBase64(URL.createObjectURL(file));
  const finalUrl = extractBase64FromDataUrl(base64String);

  if (type === "aadhaar") {
    adharLoader.value = true;
    await uploadAdhar(file, finalUrl);
  } else if (type === "ep") {
    BankLoader.value = true;
    await uploadBank(file, finalUrl);
  } else {
    PanLoader.value = true;
    await uploadPan(file, finalUrl);
  }
};

const blobUrlToBase64 = (blobUrl) => {
 return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", blobUrl);
    xhr.responseType = "blob";

    xhr.onload = () => {
      if (xhr.status === 200) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64data = reader.result;
          resolve(base64data);
        };
        reader.readAsDataURL(xhr.response);
      } else {
        reject(new Error("Failed to fetch blob"));
      }
    };

    xhr.onerror = () => {
      reject(new Error("Network error"));
    };

    xhr.send();
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
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/css/bootstrap.min.css";
  link.integrity = "sha384-KyZXEAg3QhqLMpG8r+Knujsl5/8/5e5L5m5Q5t5s5j1c5y5g5d5h5d5h5h5d5h5";
  link.crossOrigin = "anonymous";

  // Append the link to the head
  document.head.appendChild(link);
});
</script>