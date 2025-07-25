<template>
  <div>
    <div class="bg-white p-2">
      <div class="flex items-center justify-between">
        <p class="text-xl font-semibold">{{ job.name }}</p>
        <p
          v-if="job.sub_job.length > 3" 
          class="text-xs font-normal text-[#3587fc] cursor-pointer hover:underline"
          @click="toggleShowAll"
        >
          {{ isShowAll ? 'Show Less' : 'View All'}}
      </p>
      </div>

      <p class="text-xs font-normal text-[#585861]">งานทั้งหมด {{ job.sub_job.length }} งาน</p>

      <!-- <SubJobCard 
        :subJobs="job.sub_job" 
        :color="job.color" 
        :isShowAll="isShowAll"
      /> -->

      <SubJobCard 
        v-for="(subJob, index) in showSubJob"
        :key="index"
        :subJob="subJob"
        :color="job.color"
      />
    </div>
  </div>
</template>

<script setup>
import SubJobCard from './SubJobCard.vue';

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

</script>

<style lang="scss" scoped></style>