<script setup>
const GITHUB_LINK = 'https://github.com/mxrcury'
const BOT_LINK = '#t.me/lets_quizzy_bot'
</script>

<template>
  <div class="py-5 flex justify-between">
    <p class="ml-4 text-[21px]">
      <a target="_blank" :href="BOT_LINK" data-cy="logo" class="underline font-semibold">&quizzy</a>
    </p>
    <p data-cy="createdBy" class="mr-4 text-[21px] flex items-center">
      created by
      <a target="_blank" :href="GITHUB_LINK" data-cy="github" class="underline ml-[5px]">mxrcury</a>
    </p>
  </div>
</template>
