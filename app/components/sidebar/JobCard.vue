<template>
  <div>
    <div class="bg-white py-[10px] px-[8px] mb-[10px] rounded-[8px] drop-shadow-[0_0_20px_rgba(0,0,0,0.1)]">
      <div class="flex items-center justify-between">
        <p class="text-xl font-semibold">{{ job.name }}</p>
        <p
          v-if="job.sub_job.length > 3" 
          class="text-xs font-normal text-[#3587fc] cursor-pointer hover:underline"
          @click="toggleShowAll"
        >
          {{ isShowAll ? 'Show Less' : 'Show All'}}
        </p>
      </div>

      <p class="text-xs font-normal text-[#585861] mb-2">งานทั้งหมด {{ job.sub_job.length }} งาน</p>

      <div class="flex flex-col gap-2">
        <SubJobCard 
          v-for="(subJob, index) in showSubJob"
          :key="index"
          :subJob="subJob"
          draggable="true"
          @dragstart="onDragStart(subJob, index)"
          @dragend="onDragEnd"
          :class="index === dragStartI ? 'opacity-25' : ''"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import SubJobCard from './SubJobCard.vue';
import { useDrag } from '#imports';

const props = defineProps({
  job: null,
})

const { draggedJob } = useDrag();

const isShowAll = ref(false);

const toggleShowAll = () => {
  isShowAll.value = !isShowAll.value;
}

const showSubJob = computed(() => {
  let sortedList = props.job.sub_job.sort((a, b) => a.sub_job_id - b.sub_job_id)
  return isShowAll.value ? sortedList : sortedList.slice(0, 3);
})

const dragStartI = ref(null);

const onDragStart = (subJob, i) => {
  draggedJob.value = subJob;
  dragStartI.value = i
}

const onDragEnd = () => {
  dragStartI.value = null;
}

</script>

<style lang="scss" scoped></style>