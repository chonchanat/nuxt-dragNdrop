<template>
  <div>
    <div class="rounded-[3px] mt-2 px-[12px] py-[8px] w-[344px]" :style="{
      backgroundColor: hexToRGBA(updatedColor, 0.1),
      borderLeft: `6px solid ${updatedColor}`,
    }">
      <p class="text-sm font-bold" :style="{ color: updatedColor }">{{ subJob.sub_job_code }}</p>
      <p class="text-[10px] font-semibold my-2">{{ subJob.title }}</p>
      <p class="text-[10px] text-[#8a94a6]">{{ subJob.description }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  subJob: null,
})

const updatedColor = ref('')

watch(() => props.subJob, (newValue) => {
  updatedColor.value = props.subJob.ref_id === 1 ? '#8338ec' :
      props.subJob.ref_id === 2 ? '#1ecb44' :
        '#ffbe0b'
}, { immediate: true })

function hexToRGBA(hex, opacity) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}
</script>

<style scoped></style>
