<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  percentage: {
    type: Number,
    required: true
  }
})
const MAX_WIDTH = 400
const widthPerPercentages = (MAX_WIDTH * props.percentage) / 100

const styles = {
  root: {
    width: `${MAX_WIDTH}px`
  },
  filled: {
    width: `${widthPerPercentages}px`
  }
}
</script>

<template>
  <div
    :style="styles.root"
    class="overflow-hidden relative border-[2px] border-darkdarkgreen text-center bg-transparent h-[24px] mb-[10px] mr-[5px] ml-[5px] rounded-[20px]"
  >
    <div :style="styles.filled" class="bg-darkgreen h-[100%]"></div>
    <span class="absolute top-0" data-cy="percentages"> {{ percentage }}% </span>
  </div>
</template>
