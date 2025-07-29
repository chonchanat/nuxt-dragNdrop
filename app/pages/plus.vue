<template>
  <div class="flex">
    <!-- Drag Source -->
    <div class="w-1/4">
      <div
        v-for="job in jobs"
        :key="job.id"
        class="p-2 bg-purple-200 w-[300px] my-1"
        draggable="true"
        @dragstart="onDragStart(job)"
      >
        {{ job.name }}
      </div>
    </div>

    <!-- Drop Target -->
    <div class="w-3/4 grid grid-cols-5 gap-4">
      <div
        v-for="(round, index) in 5"
        :key="index"
        class="min-h-[100px] border p-2"
        @dragover.prevent
        @drop="onDrop(index)"
      >
        <div class="font-bold">รอบที่ {{ index + 1 }}</div>
        <div v-for="item in assignedJobs[index]" :key="item.id" class="mt-2">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const jobs = ref([
  { id: 'J21923123', name: 'J21923123' },
  { id: 'J21923124', name: 'J21923124' },
  { id: 'J21923125', name: 'J21923125' },
])

const draggedJob = ref(null)
const assignedJobs = ref([[], [], [], [], []]) // สำหรับ 5 รอบ

const onDragStart = (job) => {
  console.log(job)
  draggedJob.value = job
}

const onDrop = (roundIndex) => {
  if (!draggedJob.value) return
  assignedJobs.value[roundIndex].push(draggedJob.value)
  jobs.value = jobs.value.filter(j => j.id !== draggedJob.value.id)
  draggedJob.value = null
}
</script>
