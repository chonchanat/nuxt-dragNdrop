<template>
  <div class="h-screen flex flex-col w-[386px] mr-4">
    <div class="h-[43px] flex justify-center items-center shrink-0 pr-[26px]">
      <p class="text-xl text-[#c9cfd7]">ประเภทงาน</p>
    </div>

    <div class="mt-2 overflow-y-auto flex-grow pr-4"
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

const { jobsUpdated, data } = useJob();
const { draggedJob, dragStartI, dragStartJ } = useDrag();

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
    if (dragStartI.value !== null && dragStartJ.value !== null) {
      data.value[dragStartI.value].round.splice(dragStartJ.value, 1, {note: draggedJob.value.note, sub_job_id: null})
    }
  }
}

</script>

<style scoped></style>