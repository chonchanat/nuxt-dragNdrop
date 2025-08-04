<template>
  <div>
    <div
      v-for="(slot, _i) in displayData"
      :key="_i"
      class="border-[0.5px] border-[#f1f2f4] h-[107px] bg-[#ffffff] flex"
    >

      <div class="border-r-[0.5px] border-[#f1f2f4] w-[250px] p-4 flex justify-end flex-col">
        <div class="flex-1" />
        <p class="text-xs text-[#9ca3af]">รายละเอียด</p>
        <p class="font-semibold text-[#1f2937]">{{ slot.driver_name }}</p>
      </div>

        <div
          v-for="(card, _j) in slot.round"
          :key="_j"
          class="bg-white border-r-[0.5px] border-[#f1f2f4] w-[360px] p-2"
          @dragover.prevent
          @drop="onDropSwap(_i, _j)"
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

const { draggedJob, previewDropI, previewDropJ, dragStartI, dragStartJ, resetDraggable } = useDrag();
const { data, jobsUpdated } = useJob();

const displayData = computed(() => {
  if (previewDropI.value !== null && previewDropJ.value !== null && draggedJob.value) {
    const copy = JSON.parse(JSON.stringify(data.value));
    const i = previewDropI.value;
    const j = previewDropJ.value;
    const dragged = draggedJob.value;

    if (dragStartI.value !== i) {
      // new row (add)
      copy[i].round.pop();
      copy[i].round.splice(j, 0, { ...dragged, note: '' });

      // original row (remove)
      if (dragStartI.value >= 0 && dragStartI.value !== null) {
        copy[dragStartI.value].round.splice(dragStartJ.value, 1);
        copy[dragStartI.value].round.splice(99, 0, { note: '', sub_job_id: null });    // (99) add to last index in array
      }
     } else if (i === dragStartI.value && j !== dragStartJ.value) {
      copy[i].round.splice(dragStartJ.value, 1);                // remove original
      copy[i].round.splice(j, 0, { ...dragged, note: '' });     // insert at new
    }
    return copy;
  } else {
    return data.value;
  }
});

const onDragEnter = (i, j) => {
  previewDropI.value = i;
  previewDropJ.value = j;
}

const onDragLeave = (event) => {
  const parentElement = event.currentTarget;
  if (event.relatedTarget && !parentElement.contains(event.relatedTarget)) {
    previewDropI.value = null;
    previewDropJ.value = null;
  }
}

const onDragStart = (job, i, j) => {
  draggedJob.value = job

  dragStartI.value = i
  dragStartJ.value = j
}

const onDragEnd = () => {
  resetDraggable()
}

const onDropSwap = (i, j) => {
  if (draggedJob.value) {
    // update jobsUpdated composable
    const job_id = draggedJob.value.ref_id
    const jobIndex = jobsUpdated.value.findIndex((e) => e.id === job_id)
    const sub_job_id = draggedJob.value.sub_job_id
    const subJobIndex = jobsUpdated.value[jobIndex].sub_job.findIndex((e) => e.sub_job_id === sub_job_id)
    if (subJobIndex >= 0) {
      jobsUpdated.value[jobIndex].sub_job.splice(subJobIndex, 1)
    }

    // update content area
    const sameRow = i === dragStartI.value
    if (sameRow) {
      let swap = data.value[i].round.splice(dragStartJ.value, 1)[0]
      data.value[i].round.splice(j, 0, swap)

    } else {
      data.value[i].round.splice(j, 0, {...draggedJob.value, note: ''})
      data.value[i].round.pop()
    }
    
    // restore old index with old object { note: 'note', sub_job_id: null}
    const samePosition = i === dragStartI.value && j === dragStartJ.value;
    if (dragStartI.value !== null && dragStartJ.value !== null && !samePosition && !sameRow) {
      data.value[dragStartI.value].round.splice(dragStartJ.value, 1)
      data.value[dragStartI.value].round.push({ note: '', sub_job_id: null })
    }
    
    // reset 
    resetDraggable()
  }
}

// const onDrop = (i, j) => {
//   if (draggedJob.value) {
//     // restore job if already have in content area (replace from sidebar)
//     if (data.value[i].round[j].sub_job_id) {
//       const oldJob = data.value[i].round[j]
//       const jobIndex = jobsUpdated.value.findIndex((e) => e.id === oldJob.ref_id)
//       jobsUpdated.value[jobIndex].sub_job.push(oldJob)
//     }

//     // update jobsUpdated composable
//     const job_id = draggedJob.value.ref_id
//     const jobIndex = jobsUpdated.value.findIndex((e) => e.id === job_id)
//     const sub_job_id = draggedJob.value.sub_job_id
//     const subJobIndex = jobsUpdated.value[jobIndex].sub_job.findIndex((e) => e.sub_job_id === sub_job_id)
//     if (subJobIndex >= 0) {
//       jobsUpdated.value[jobIndex].sub_job.splice(subJobIndex, 1)
//     }

//     // update content area
//     const new_note = data.value[i].round[j].note || '';
//     data.value[i].round[j] = {...draggedJob.value, note: new_note};

//     // restore old index with old object { note: 'note', sub_job_id: null}
//     const samePosition = i === dragStartI.value && j === dragStartJ.value;
//     if (dragStartI.value !== null && dragStartJ.value !== null && !samePosition) {
//       const old_note = draggedJob.value?.note || '';
//       data.value[dragStartI.value].round[dragStartJ.value] = { note: old_note, sub_job_id: null }
//     }

//     // reset 
//     resetDraggable()
//   }
// }

</script>

<style scoped>
</style>
