<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { router } from '@/router/'
import { dateDiffInDays } from '@/utils/date'

const firstImageURLTest =
  'https://getwallpapers.com/wallpaper/full/d/1/e/1129346-cute-cats-wallpaper-1080x1920-full-hd.jpg'

const endTimeTest = new Date(Date.now() + 2000000)
const time = ref(Date.now())
const timer = setInterval(() => {
  time.value = time.value + 1000
}, 1000)

const quizId = defineProps({
  id: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h1>Quiz -> {{ quizId.id }}</h1>
  <p class="text-center pt-[20px] text-[25px]">
    {{ dateDiffInDays(endTimeTest, new Date(time)) }} 323 23 2
  </p>
  <div class="flex justify-center pt-[30px]">
    <div class="mr-[50px]">
      <img
        class="w-[403px] h-[374px] mb-[30px] object-cover rounded-[16px]"
        :src="firstImageURLTest"
      />
      <button
        class="bg-darkgreen pb-[20px] pt-[15px] pl-[74px] pr-[74px] rounded-[10px] max-w-[280px] ms-*"
      >
        cat
      </button>
    </div>
    <div>
      <img
        class="mb-[30px] w-[403px] h-[374px] object-cover rounded-[16px]"
        :src="firstImageURLTest"
      />
      <button
        class="bg-darkgreen pb-[20px] pt-[15px] pl-[74px] pr-[74px] rounded-[10px] max-w-[280px]"
      >
        Other Cat
      </button>
    </div>
  </div>
</template>
