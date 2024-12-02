<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-20">
    <form @submit.prevent="onSubmit" method="post" action="submit.php">
      <div class="mt-2">
        <input
          type="name"
          name="name"
          id="name"
          v-model="name"
          class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          placeholder="Your name"
        />
      </div>
      <div class="my-5">
        <canvas
          ref="canvas"
          width="360"
          height="100"
          class="border-2 border-black rounded-md"
        ></canvas>
      </div>
      <input type="hidden" v-model="signature" />
      <div class="fixed bottom-0 w-[90%]">
        <button
          type="button"
          @click="onSubmit"
          class="rounded-md bg-indigo-500 px-3.5 py-2.5 mb-5 w-full text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Send
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const name = ref('');
    const signature = ref('');
    const canvas = ref<HTMLCanvasElement | null>(null);
    const ctx = ref<CanvasRenderingContext2D | null>(null);
    const drawing = ref(false);
    let prevX: number | null = null;
    let prevY: number | null = null;

    onMounted(() => {
      if (canvas.value) {
        ctx.value = canvas.value.getContext('2d');
        ctx.value.strokeStyle = 'black'; // Set stroke color
        ctx.value.lineWidth = 2; // Set stroke width
        // Mouse events
        canvas.value.addEventListener('mousemove', draw);
        canvas.value.addEventListener('mouseup', stop);
        canvas.value.addEventListener('mousedown', start);
        canvas.value.addEventListener('mouseleave', stop);
        // Touch events
        canvas.value.addEventListener('touchstart', start);
        canvas.value.addEventListener('touchmove', draw);
        canvas.value.addEventListener('touchend', stop);
        canvas.value.addEventListener('touchcancel', stop);
      }
    });

    const start = (e: MouseEvent | TouchEvent) => {
      drawing.value = true;
      const clientX = e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;
      const clientY = e instanceof TouchEvent ? e.touches[0].clientY : e.clientY;
      prevX = clientX - (canvas.value?.offsetLeft || 0);
      prevY = clientY - (canvas.value?.offsetTop || 0);
    };

    const stop = () => {
      drawing.value = false;
      prevX = prevY = null;
      if (canvas.value && ctx.value) {
        signature.value = canvas.value.toDataURL(); // Save the signature as a base64 image
      }
    };

    const draw = (e: MouseEvent | TouchEvent) => {
      if (!drawing.value || !ctx.value || !canvas.value) {
        return;
      }
      e.preventDefault(); // Prevent scrolling when touching the canvas
      const clientX = e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;
      const clientY = e instanceof TouchEvent ? e.touches[0].clientY : e.clientY;

      const currX = clientX - canvas.value.offsetLeft;
      const currY = clientY - canvas.value.offsetTop;

      ctx.value.beginPath();
      ctx.value.moveTo(prevX!, prevY!);
      ctx.value.lineTo(currX, currY);
      ctx.value.stroke();
      prevX = currX;
      prevY = currY;
    };

    const onSubmit = () => {
      console.log({ name: name.value, signature: signature.value });
      // Perform the form submission logic (e.g., call an API)
    };

    return {
      name,
      signature,
      canvas,
      onSubmit,
    };
  },
};
</script>

<style scoped>
canvas {
  cursor: crosshair;
}
</style> 