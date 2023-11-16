<script setup lang="ts">
import { ref, defineProps, watchEffect, onMounted } from 'vue'
import { router } from '@/router/'
import { dateDiff } from '@/utils/date'
import Button from '@/components/Button.vue'
import Image from '@/components/Image.vue'
import ResultBar from '@/components/ResultBar.vue'

const firstImageURLTest =
  'https://getwallpapers.com/wallpaper/full/d/1/e/1129346-cute-cats-wallpaper-1080x1920-full-hd.jpg'

const isVoted = ref(false)

const isFinishedQuiz = ref(false)

const vote = () => {
  isVoted.value = true
  localStorage.setItem('isVoted', true)
}
onMounted(() => {
  const isAlreadyVoted = Boolean(localStorage.getItem('isVoted'))
  if (!isAlreadyVoted) {
    // TODO: make request to backend to check if from this IP it's already voted
    const isVotedUserWithIP = false // request
    if (!isVotedUserWithIP) {
      isVoted.value = false
    } else {
      localStorage.setItem('isVoted', true)
      isVoted.value = true
    }
  } else {
    isVoted.value = true
  }
})

const endTimeTest = new Date(Date.now() + 20000)

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

  if (days < 0) {
    isFinishedQuiz.value = true
  }

  if (days > 10) {
    restDays.value = days
  } else {
    restDays.value = `0${days}`
  }
  if (hours >= 10) {
    restHours.value = hours
  } else {
    restHours.value = `0${hours}`
  }
  if (minutes >= 10) {
    restMinutes.value = minutes
  } else {
    restMinutes.value = `0${minutes}`
  }
  if (seconds >= 10) {
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
  <div class="h-[80px]">
    <div v-if="!isFinishedQuiz">
      <p
        v-motion
        :leave="{
          x: 100,
          opacity: 0
        }"
        class="text-center text-[25px] h-[36px] mt-[9px]"
      >
        Quiz will be ended in:
      </p>
      <p class="text-center text-[25px] mb-0 h-[70px]">
        {{ `${restDays}:${restHours}:${restMinutes}:${restSeconds}` }}
      </p>
    </div>
    <div v-if="isFinishedQuiz">
      <p
        class="text-center text-[25px] h-[36px] mt-[9px]"
        v-motion
        :initial="{
          opacity: 0,
          y: -100
        }"
        :enter="{
          opacity: 1,
          y: 0
        }"
      >
        Quiz is finished ✅
      </p>
    </div>
  </div>
  <div class="flex justify-center pt-[30px]">
    <div class="mr-[50px]">
      <Image
        v-motion
        :initial="{
          opacity: 0,
          x: -100
        }"
        :enter="{
          opacity: 1,
          x: 0
        }"
        :url="firstImageURLTest"
      />
      <Button
        v-if="!isVoted && !isFinishedQuiz"
        :vote="vote"
        txt="First Cat"
        styles="flex ml-auto"
        :initial="{
          opacity: 0,
          x: -100
        }"
        :enter="{
          opacity: 1,
          x: 0
        }"
      />
    </div>
    <div>
      <Image
        v-motion
        :initial="{
          opacity: 0,
          x: 100
        }"
        :enter="{
          opacity: 1,
          x: 0
        }"
        :url="firstImageURLTest"
      />
      <Button v-if="!isVoted && !isFinishedQuiz" :vote="vote" txt="Cat" />
    </div>
  </div>
  <div v-if="isVoted || isFinishedQuiz" class="flex justify-center flex-col items-center">
    <ResultBar
      v-motion
      :initial="{
        opacity: 0,
        x: -100
      }"
      :enter="{
        opacity: 1,
        x: 0
      }"
      :percentage="30"
    />
    <ResultBar
      v-motion
      :initial="{
        opacity: 0,
        x: 100
      }"
      :enter="{
        opacity: 1,
        x: 0
      }"
      :percentage="70"
    />
  </div>
</template>
