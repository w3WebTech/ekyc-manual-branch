<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center">
    <div class="fixed inset-0 bg-black bg-opacity-50" @click="close"></div>
    <div class="bg-white rounded-lg p-4 relative z-10 w-[320px] shadow-xl">
      <!-- Year and Month Selection -->
      <div class="flex justify-between items-center mb-4 relative">
        <button 
          @click="showYearMonth = !showYearMonth"
          class="text-gray-700 font-medium hover:bg-gray-100 rounded px-2 py-1 flex items-center gap-2"
        >
          {{ currentMonthYear }}
          <svg 
            class="w-4 h-4 transition-transform"
            :class="{ 'rotate-180': showYearMonth }"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div class="flex gap-1">
          <button @click="previousMonth" class="p-1 hover:bg-gray-100 rounded">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button @click="nextMonth" class="p-1 hover:bg-gray-100 rounded">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <!-- Year and Month Selector -->
        <div
          v-if="showYearMonth"
          class="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 w-full z-20 p-2"
          ref="yearMonthSelector"
        >
          <div class="flex gap-2">
            <!-- Month Selection -->
            <div class="w-1/2">
              <div class="text-sm font-medium text-gray-500 mb-2">Month</div>
              <div class="grid grid-cols-3 gap-1">
                <button
                  v-for="(month, index) in months"
                  :key="month"
                  @click="selectMonth(index)"
                  :class="[ 'text-sm py-2 px-1 rounded text-center', currentDate.getMonth() === index ? 'bg-indigo-600 text-white' : 'hover:bg-gray-100' ]"
                >
                  {{ month.slice(0, 3) }}
                </button>
              </div>
            </div>

            <!-- Year Selection -->
            <div class="w-1/2">
              <div class="text-sm font-medium text-gray-500 mb-2">Year</div>
              <div 
                class="h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
                ref="yearList"
              >
                <div class="space-y-1">
                  <button
                    v-for="year in yearRange"
                    :key="year"
                    @click="selectYear(year)"
                    :class="[ 'w-full text-left text-sm py-2 px-3 rounded', currentDate.getFullYear() === year ? 'bg-indigo-600 text-white' : 'hover:bg-gray-100' ]"
                  >
                    {{ year }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Calendar Grid -->
      <div class="grid grid-cols-7 gap-1 mb-2">
        <template v-for="day in ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']" :key="day">
          <div class="text-center text-sm text-gray-500 py-1">{{ day }}</div>
        </template>
      </div>

      <div class="grid grid-cols-7 gap-1">
        <template v-for="{ date, current, disabled } in calendarDays" :key="date.toISOString()">
          <button
            @click="selectDate(date)"
            :disabled="disabled"
            :class="[ 'w-full aspect-square flex items-center justify-center rounded-full text-sm', current ? 'text-gray-900' : 'text-gray-400', disabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-indigo-50', isSelected(date) ? 'bg-indigo-600 text-white hover:bg-indigo-700' : '' ]"
          >
            {{ date.getDate() }}
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'close'): void
}>()

const currentDate = ref(new Date())
const selectedDate = ref(props.modelValue ? new Date(props.modelValue) : null)
const showYearMonth = ref(false)

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

// Generate year range (100 years back from current year)
const currentYear = new Date().getFullYear()
const yearRange = Array.from({ length: 100 }, (_, i) => currentYear - i)

const currentMonthYear = computed(() => {
  return currentDate.value.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
})

const calendarDays = computed(() => {
  const year = currentDate.value.getFullYear()
  const month = currentDate.value.getMonth()
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const daysInMonth = lastDay.getDate()
  const startingDay = firstDay.getDay()
  
  const days = []
  
  // Previous month days
  for (let i = 0; i < startingDay; i++) {
    const date = new Date(year, month, -startingDay + i + 1)
    days.push({ date, current: false, disabled: true })
  }
  
  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month, i)
    days.push({ date, current: true, disabled: false })
  }
  
  // Next month days
  const remainingDays = 42 - days.length
  for (let i = 1; i <= remainingDays; i++) {
    const date = new Date(year, month + 1, i)
    days.push({ date, current: false, disabled: true })
  }
  
  return days
})

const previousMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1, 1)
}

const nextMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1)
}

const selectMonth = (monthIndex: number) => {
  currentDate.value = new Date(currentDate.value.getFullYear(), monthIndex, 1)
  showYearMonth.value = false
}

const selectYear = (year: number) => {
  currentDate.value = new Date(year, currentDate.value.getMonth(), 1)
  showYearMonth.value = false
}

const formatDate = (date: Date) => {
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}

const selectDate = (date: Date) => {
  selectedDate.value = date
  emit('update:modelValue', formatDate(date))
  emit('close')
}

const isSelected = (date: Date) => {
  if (!selectedDate.value) return false
  return date.toDateString() === selectedDate.value.toDateString()
}

// Initialize currentDate from props.modelValue if it exists
watch(() => props.modelValue, (newValue) => {
  if (newValue) {
    const [day, month, year] = newValue.split('/')
    currentDate.value = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
    selectedDate.value = new Date(currentDate.value)
  }
}, { immediate: true })

const close = () => {
  emit('close')
  showYearMonth.value = false
}
</script>

<style>
.scrollbar-thin::-webkit-scrollbar {
  width: 6px;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>
