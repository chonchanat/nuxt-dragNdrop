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

      <p class="text-xs font-normal text-[#585861]">งานทั้งหมด {{ job.sub_job.length }} งาน</p>

      <draggable class="dragArea list-group" :list="showSubJob" :group="job.name" :sort="false">
        <SubJobCard 
          v-for="(subJob, index) in showSubJob"
          :key="index"
          :subJob="subJob"
          :color="job.color"
        />
      </draggable>
    </div>
  </div>
</template>

<script setup>
import SubJobCard from './SubJobCard.vue';
import { VueDraggableNext as Draggable } from 'vue-draggable-next'

const props = defineProps({
  job: null,
})

const isShowAll = ref(false);

const toggleShowAll = () => {
  isShowAll.value = !isShowAll.value;
}

const showSubJob = computed(() => {
  return isShowAll.value ? props.job.sub_job : props.job.sub_job.slice(0, 3);
})

// const showSubJobList = ref(props.job.sub_job.slice(0, 3));

// watchEffect(() => {
//   showSubJobList.value = isShowAll.value
//     ? [...props.job.sub_job]
//     : props.job.sub_job.slice(0, 3);
// });

// const onSubJobReorder = () => {
//   // Optional: บันทึกลำดับใหม่ลง backend หรือ props.job.sub_job ถ้าจำเป็น
//   console.log('new order:', showSubJobList.value);
// };

</script>

<style lang="scss" scoped></style>