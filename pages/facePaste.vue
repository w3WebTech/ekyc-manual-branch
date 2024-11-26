
<!---<template><div class="bg-themeBaseColor h-screen overflowY-hidden">
<div class=" flex justify-center items-center content-center h-full ">


 <LoginPage/>

</div>

          </div>
</template>

<script lang="ts">
import OnBoardingSlider from '@/components/OnBoardingSlider.vue'; // Use alias @ to point to the components directory
import SliderForDesktop from '@/components/SliderForDesktop.vue';
import LoginPage from '@/components/LoginPage.vue';
export default {
  components: {
    OnBoardingSlider,
    SliderForDesktop,
    LoginPage
  }
}
</script>-->
<template>
  <div class="container mx-auto text-center p-4">
    <h1 class="text-2xl font-bold text-red-600">Face Liveness</h1>
    <div class="flex flex-col md:flex-row justify-center gap-6">
      <VideoContainer />
      <div class="flex flex-col items-center justify-center bg-gray-50 p-4 rounded shadow">
        <img v-if="snapshot" :src="snapshot" alt="Snapshot" class="rounded shadow" />
        <div
          v-if="successMessage"
          class="alert alert-success mt-4 p-2 text-green-600 bg-green-100 rounded shadow"
        >
          {{ successMessage }}
        </div>
      </div>
    </div>
    <AlertModal ref="alertModal" />
    <SecondAlertModal ref="secondAlertModal" />
    <ThirdAlertModal ref="thirdAlertModal" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VideoContainer from '@/components/VideoContainer.vue';
import AlertModal from '@/components/Modals/AlertModal.vue';
import SecondAlertModal from '@/components/Modals/SecondAlertModal.vue';
import ThirdAlertModal from '@/components/Modals/ThirdAlertModal.vue';

const snapshot = ref<string | null>(null);
const successMessage = ref('');
</script>
