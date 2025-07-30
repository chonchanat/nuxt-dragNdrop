<template>
  <div class="h-screen flex flex-col w-[360px]">
    <div class="h-[43px] flex justify-center items-center shrink-0">
      <p class="text-xl text-[#c9cfd7]">ประเภทงาน</p>
    </div>

    <div class="mt-2 overflow-y-auto flex-grow"
      @dragover.prevent
      @drop="onDrop"
    >
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
import { useDrag } from '#imports';

const { jobs, jobsUpdated, data } = useJob();
const { draggedJob } = useDrag();

const onDrop = () => {
  if (draggedJob.value) {
    const found = jobsUpdated.value
      .find((e) => e.id === draggedJob.value.ref_id)
      ?.sub_job
      ?.find((e) => e.sub_job_id === draggedJob.value.sub_job_id);

    if (found) return

    // restore to sidebar
    const jobIndex = jobsUpdated.value.findIndex((e) => e.id === draggedJob.value.ref_id)
    jobsUpdated.value[jobIndex].sub_job.push(draggedJob.value)

    // restore DragDropArea
    let contentI = null;
    let contentJ = null;
    data.value.forEach((driver, i) => {
      driver.round.forEach((round, j) => {
        if (round.sub_job_id === draggedJob.value.sub_job_id) {
          contentI = i;
          contentJ = j;
          return;
        }
      })
    })
    if (contentI !== null && contentJ !== null) {
      data.value[contentI].round.splice(contentJ, 1, {note:'', sub_job_id: null})
    }
  }
}

</script>

<style scoped></style>