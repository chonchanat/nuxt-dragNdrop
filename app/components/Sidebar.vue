<template>
  <div class="h-screen">
    <div class="w-[360px] h-[43px] flex justify-center items-center">
      <p class="text-xl text-[#c9cfd7]">ประเภทงาน</p>
    </div>

    <div class="mt-2">
       <JobCard 
        v-for="(job, index) in jobs" 
        :key="index" 
        :job="job" 
      />
    </div>

  </div>
</template>

<script setup>
import { useJob } from '#imports';
import JobCard from './JobCard.vue';

const { jobs } = useJob();

</script>

<style scoped></style>