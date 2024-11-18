<template>
  <div class="min-h-screen bg-[#FF7F50] relative overflow-hidden">
    
    <!-- Slides Container -->
    <div class="px-6 pt-20 pb-32">
      <div class="relative h-[calc(100vh-280px)]">
        <!-- Slides -->
        <TransitionGroup 
          name="slide" 
          tag="div" 
          class="h-full"
        >
          <div 
            v-for="slide in slides" 
            :key="slide.id"
            v-show="currentSlide === slide.id"
            class="absolute inset-0 flex flex-col items-center"
          >
            <img :src="slide.image" :alt="slide.title" class="w-48 h-48 mb-8" />
            <h2 class="text-white text-3xl font-bold text-center mb-4">{{ slide.title }}</h2>
            <p class="text-white text-center text-lg">{{ slide.description }}</p>
          </div>
        </TransitionGroup>
      </div>

      <!-- Dots Navigation -->
      <div class="flex justify-center gap-2 mt-5 mb-3">
        <button 
          v-for="n in slides.length" 
          :key="n"
          @click="currentSlide = n"
          class=" h-2 rounded-full transition-all duration-300"
          :class="currentSlide === n ? 'bg-white w-6' : 'bg-white/30 w-2'"
        />
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="absolute bottom-0 left-0 right-0 p-6 space-y-4">
      <button 
        class="w-full bg-[#1E1B4B] text-white py-4 rounded-lg font-medium"
        @click="openAccount"
      >
        Open an account
      </button>
      <button 
        class="w-full border-2 border-[#1E1B4B] text-[#1E1B4B] py-4 rounded-lg font-medium"
        @click="login"
      >
        Login
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const currentSlide = ref(1)

const slides = [
  {
    id: 1,
    image: '/images/sandleclock.jpeg',
    title: 'Open your account in less than 10 minutes',
    description: 'Find & act on market opportunities instantly'
  },
  {
    id: 2,
    image: '/images/boxes.jpeg',
    title: 'Investing is now a breeze',
    description: 'Invest in multiple instruments with our user-friendly platform'
  },
  {
    id: 3,
    image: '/images/glass.jpeg',
    title: 'Partner with an experienced advisor',
    description: 'Boost your portfolios growth with trusted research & recommendations'
  },
  {
    id: 4,
    image: '/images/coin.jpeg',
    title: 'Pay no annual fees',
    description: 'Enjoy lifetime zero AMC charges.'
  }
]

// Auto-advance slides
let slideInterval = null

onMounted(() => {
  slideInterval = setInterval(() => {
    currentSlide.value = currentSlide.value === slides.length ? 1 : currentSlide.value + 1
  }, 2000)
})

onUnmounted(() => {
  if (slideInterval) clearInterval(slideInterval)
})

const openAccount = () => {
  router.push('/LoginPage');
  console.log('Opening account...')
}

const login = () => {
  console.log('Logging in...')
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>