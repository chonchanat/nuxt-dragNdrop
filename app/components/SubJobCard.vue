<template>
  <div>
    <div class="rounded-[3px] mt-2 px-[12px] py-[8px]" :style="{
      backgroundColor: hexToRGBA(color, 0.1),
      borderLeft: `6px solid ${color}`,
    }">
      <p class="text-sm font-bold" :style="{ color: color }">{{ subJob.sub_job_code }}</p>
      <p class="text-[10px] font-semibold my-2">{{ subJob.title }}</p>
      <p class="text-[10px] text-[#8a94a6]">{{ subJob.description }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  subJob: null,
  color: String,
})

function hexToRGBA(hex, opacity) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}
</script>

<style scoped></style>
