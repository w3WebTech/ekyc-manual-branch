
<template><div class="bg-themeBaseColor h-screen overflow-hidden">
<div class=" flex justify-center items-center content-center h-full">
 <!-- <OnBoardingSlider /> -->

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
</script>