<script setup lang="ts">
import { ref, defineProps, watchEffect } from 'vue'
import { router } from '@/router/'
import { dateDiff } from '@/utils/date'

const firstImageURLTest =
  'https://getwallpapers.com/wallpaper/full/d/1/e/1129346-cute-cats-wallpaper-1080x1920-full-hd.jpg'

const isVoted = ref(false)

const vote = () => {
  isVoted.value = true
}

const endTimeTest = new Date(Date.now() + 2000000 * 10)

const restDays = ref(0)
const restHours = ref(0)
const restMinutes = ref(0)
const restSeconds = ref(0)

const time = ref(Date.now())
const timer = setInterval(() => {
  time.value = time.value + 1000
}, 1000)
watchEffect(() => {
  const { hours, minutes, seconds, days } = dateDiff(time.value, endTimeTest.valueOf())
  if (days > 10) {
    restDays.value = days
  } else {
    restDays.value = `0${days}`
  }
  if (hours > 10) {
    restHours.value = hours
  } else {
    restHours.value = `0${hours}`
  }
  if (minutes > 10) {
    restMinutes.value = minutes
  } else {
    restMinutes.value = `0${minutes}`
  }
  if (seconds > 10) {
    restSeconds.value = seconds
  } else {
    restSeconds.value = `0${seconds}`
  }
})

const quizId = defineProps({
  id: {
    type: String,
    required: true
  }
})
</script>

<template>
  <p class="text-center text-[25px] h-[36px] mt-[9px]">Quiz will be ended in:</p>
  <pre class="text-center text-[25px] mb-0 h-[70px]">
  {{ `${restDays}:${restHours}:${restMinutes}:${restSeconds}` }}
  </pre>
  <div class="flex justify-center pt-[30px]">
    <div class="mr-[50px]">
      <img
        class="w-[403px] h-[374px] mb-[30px] object-cover rounded-[16px]"
        :src="firstImageURLTest"
      />
      <button
        @click="vote"
        v-if="!isVoted"
        class="flex ml-auto bg-darkgreen pb-[20px] pt-[15px] pl-[74px] pr-[74px] rounded-[10px] max-w-[280px] hover:bg-lightgreen active:bg-darkdarkgreen"
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
        @click="vote"
        v-if="!isVoted"
        class="bg-darkgreen pb-[20px] pt-[15px] pl-[74px] pr-[74px] rounded-[10px] max-w-[280px] hover:bg-lightgreen active:bg-darkdarkgreen"
      >
        Other Cat
      </button>
    </div>
  </div>
  <div v-if="isVoted" class="flex justify-center flex-col items-center">
    <div
      v-motion
      :initial="{
        opacity: 0,
        y: 100
      }"
      :enter="{
        opacity: 1,
        y: 0
      }"
      class="text-center w-[400px] bg-darkgreen h-[24px] mb-[10px] mr-[5px] ml-[5px] pr-[5px] pl-[5px] rounded-[20px]"
    >
      30%
    </div>
    <div
      v-motion
      :initial="{
        opacity: 0,
        y: 100
      }"
      :enter="{
        opacity: 1,
        y: 0
      }"
      class="text-center w-[400px] bg-darkgreen h-[24px] ml-[5px] pl-[5px] mr-[5px] pr-[5px] rounded-[20px]"
    >
      70%
    </div>
  </div>
</template>
