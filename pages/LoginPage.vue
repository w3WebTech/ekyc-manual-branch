<template>
  <div class="min-h-screen bg-[#FF7F50] relative">
    <!-- Grid pattern container -->
    <div class="absolute inset-0 grid grid-cols-6 ">
      <div v-for="i in 36" :key="i" class="border border-[rgba(255,255,255,0.1)]"></div>
    </div>
    
    <div class="relative z-10">
      <VenturaLogo />
    </div>

    <BottomSheet />
  </div>
</template>

<script setup lang="ts">
import VenturaLogo from '~/components/VenturaLogo.vue';
import BottomSheet from '~/components/BottomSheet.vue';
</script>