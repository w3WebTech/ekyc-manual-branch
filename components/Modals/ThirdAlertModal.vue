<template>
  <div v-if="visible" class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Third Alert</h5>
          <button type="button" @click="close">Close</button>
        </div>
        <div class="modal-body">
          <p>{{ message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const visible = ref(false);
const message = ref('');

function open(msg: string) {
  visible.value = true;
  message.value = msg;
}

function close() {
  visible.value = false;
}
</script>
