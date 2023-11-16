<script setup>
defineProps({
  url: {
    type: String,
    required: true
  }
})
</script>
<template>
  <img
    class="box_shadow hover:-translate-y-[5px] mb-[30px] w-[403px] h-[374px] object-cover rounded-[16px]"
    :src="url"
  />
</template>

<style>
.box_shadow {
  box-shadow: -1px -1px 37px -6px rgba(0, 0, 0, 0.12);
}
</style>
