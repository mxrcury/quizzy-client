<script setup>
import { defineProps } from 'vue'
defineProps({
  vote: {
    required: true
  },
  txt: {
    type: String,
    reqired: true
  },
  styles: {
    type: String,
    reqired: true
  }
})
</script>
<template>
  <button
    data-cy="btn"
    @click="vote"
    :class="styles"
    class="bg-darkgreen pb-[20px] pt-[15px] pl-[74px] pr-[74px] rounded-[10px] max-w-[280px] hover:bg-lightgreen active:bg-darkdarkgreen"
  >
    {{ txt }}
  </button>
</template>
