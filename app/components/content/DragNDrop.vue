<template>
  <draggable class="dragArea list-group p-10 bg-purple-200" :list="list2"
    :group="{ name: 'content', put: ['items-1', 'items-2'] }" @end="onDragEnd" @change="log2">
    <div v-for="element in list2" :key="element.id" class="list-group-item m-1 p-3 rounded-md text-center"
      :class="element.color"
      :data-datax="element.name">
      {{ element.name }}
    </div>
  </draggable>
</template>

<script setup>
import { VueDraggableNext as Draggable } from 'vue-draggable-next'
import { ref } from 'vue'

const list2 = ref([
  { name: 'Per', id: 5, color: "bg-red-300", ref_id: 2, },
  { name: 'Dave', id: 6, color: "bg-blue-300", ref_id: 2, },
  { name: 'Aong', id: 7, color: "bg-yellow-300", ref_id: 2, },
  { name: 'Sky', id: 8, color: "bg-green-300", ref_id: 2, },
])

const log2 = (event) => {
  // console.log(event)
  // console.log(list2.value)
}

const onDragEnd = (evt) => {
  console.log(evt.to)
  console.log(evt.from)
}
</script>

<style scoped></style>