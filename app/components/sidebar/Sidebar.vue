<template>
  <div class="h-screen flex flex-col w-[360px]">
    <div class="h-[43px] flex justify-center items-center shrink-0">
      <p class="text-xl text-[#c9cfd7]">ประเภทงาน</p>
    </div>

    <div class="mt-2 overflow-y-auto flex-grow">
       <JobCard 
        v-for="(job, index) in jobsUpdated" 
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

const jobsUpdated = ref(jobs)

</script>

<style scoped></style>