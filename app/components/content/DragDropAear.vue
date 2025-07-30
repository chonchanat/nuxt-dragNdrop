<template>
  <div>
    <div
      v-for="(slot, _i) in data"
      :key="_i"
      class="border-[0.5px] border-[#f1f2f4] h-[107px] bg-[#ffffff] flex"
    >

      <div class="border-r-[0.5px] border-[#f1f2f4] w-[250px] p-4 flex justify-end flex-col">
        <p class="text-xs text-[#9ca3af]">รายละเอียด</p>
        <p class="font-semibold text-[#1f2937]">{{ slot.driver_name }}</p>
      </div>

        <div
          v-for="(card, _j) in slot.round"
          :key="_j"
          class="bg-white border-r-[0.5px] border-[#f1f2f4] w-[360px] p-2"
          @dragover.prevent
          @drop="onDrop(_i, _j)"
          @dragenter="onDragEnter(_i, _j)"
          @dragleave="onDragLeave"
        >
          <div v-if="previewDropI === _i && previewDropJ === _j && draggedJob">
            <SubJobCard :subJob="draggedJob" class="opacity-25" />
          </div>
          <div v-else>
            <Note 
              v-if="!card.sub_job_id"
              :card="card"
              :data="data"
              :i="_i"
              :j="_j"
            />
            
            <SubJobCard 
              v-else
              :subJob="card"
              :used="true"
              draggable="true"
              @dragstart="onDragStart(card, _i, _j)"
              @dragend="onDragEnd"
              :class="_i === dragStartI && _j === dragStartJ ? 'opacity-25' : ''"
            />
          </div>

        </div>
    </div>

</div>
</template>

<script setup>
import SubJobCard from '../sidebar/SubJobCard.vue';
import Note from './Note.vue';
import { useDrag } from '#imports';
import { useJob } from '#imports';

const { draggedJob } = useDrag();
const { data, jobsUpdated } = useJob();

const previewDropI = ref(null);
const previewDropJ = ref(null);

const dragStartI = ref(null);
const dragStartJ = ref(null);

const onDragEnter = (i, j) => {
  previewDropI.value = i;
  previewDropJ.value = j;
}

const onDragLeave = () => {
  previewDropI.value = null;
  previewDropJ.value = null;
}

const onDragStart = (job, i, j) => {
  draggedJob.value = job

  dragStartI.value = i
  dragStartJ.value = j
}

const onDragEnd = () => {
  draggedJob.value = null

  previewDropI.value = null
  previewDropJ.value = null

  dragStartI.value = null
  dragStartJ.value = null
}

const onDrop = (i, j) => {
  if (draggedJob.value) {
    // restore job if already have in content area (replace from sidebar)
    if (data.value[i].round[j].sub_job_id) {
      const oldJob = data.value[i].round[j]
      const jobIndex = jobsUpdated.value.findIndex((e) => e.id === oldJob.ref_id)
      jobsUpdated.value[jobIndex].sub_job.push(oldJob)
    }

    data.value[i].round[j] = draggedJob.value;

    // restore old index with empty object
    const samePosition = i === dragStartI.value && j === dragStartJ.value;
    if (dragStartI.value !== null && dragStartJ.value !== null && !samePosition) {
      data.value[dragStartI.value].round[dragStartJ.value] = { note: '', sub_job_id: null }
    }

    // update jobsUpdated composable
    const job_id = draggedJob.value.ref_id
    const jobIndex = jobsUpdated.value.findIndex((e) => e.id === job_id)
    const sub_job_id = draggedJob.value.sub_job_id
    const subJobIndex = jobsUpdated.value[jobIndex].sub_job.findIndex((e) => e.sub_job_id === sub_job_id)
    if (subJobIndex >= 0) {
      jobsUpdated.value[jobIndex].sub_job.splice(subJobIndex, 1)
    }

    // reset 
    draggedJob.value = null

    previewDropI.value = null
    previewDropJ.value = null

    dragStartI.value = null
    dragStartJ.value = null
  }
}

</script>

<style scoped>
</style>
