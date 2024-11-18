<template>
  <div
    v-show="isVisible"
    class="transform transition-all duration-700 ease-out"
    :class="{ 'animate-shake': isVisible }"
    :style="{
      transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
      opacity: isVisible ? '1' : '0'
    }"
  >
    <div class="p-2">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  delay: number
}>()

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, props.delay)
})
</script>

<style scoped>
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  75% { transform: translateX(2px); }
}

.animate-shake {
  animation: shake 0.5s ease-in-out;
  animation-delay: calc(v-bind(delay) + 700ms);
}
</style>