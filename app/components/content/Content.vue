<template>
  <div class="h-screen flex flex-col flex-1 overflow-x-auto">
    <div class="flex w-max">
      <div 
        v-for="(column, index) in columnName" :key="index" 
        class="h-[43px] flex justify-center items-center shrink-0" 
        :class="index === 0 ? 'w-[250px]' : 'w-[360px]'"
      >
        <p class="text-xl text-[#c9cfd7]">{{ column }}</p>
      </div>
    </div>

    <div class="mt-2 overflow-y-auto w-max">
      <DragDropAear />
    </div>
  </div>
</template>

<script setup>
import DragDropAear from './DragDropAear.vue';


const columnName = ["ชื่อพนักงาน", "รอบที่ 1", "รอบที่ 2", "รอบที่ 3", "รอบที่ 4", "รอบที่ 5"]

</script>

<style scoped></style>