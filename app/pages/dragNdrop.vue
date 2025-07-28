<template>
  <div class="flex m-10">
    <!-- <draggable :group="{name: 'zone', pull: false, put:'content'}"> -->
      <draggable class="dragArea list-group p-10 bg-amber-200" :list="list" :sort="false"
        :group="{ name: 'items-1', put: false }" 
        @add="onAdd">
        <div v-for="element in list" :key="element.id" class="list-group-item m-1 p-3 rounded-md text-center"
          :class="element.color">
          {{ element.name }}
        </div>
      </draggable>

      <draggable class="dragArea list-group p-10 bg-gray-200" :list="list3" :sort="false"
        :group="{ name: 'items-2', put: onReturn }" 
        @add="onAdd">
        <div v-for="element in list3" :key="element.id" class="list-group-item m-1 p-3 rounded-md text-center"
          :class="element.color">
          {{ element.name }}
        </div>
      </draggable>
    <!-- </draggable> -->
    <DragNDrop />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { VueDraggableNext as Draggable } from 'vue-draggable-next'
import DragNDrop from '~/components/content/DragNDrop.vue'

const list = ref([
  { name: 'John', id: 1, color: "bg-red-300", ref_id: 1, },
  { name: 'Joao', id: 2, color: "bg-blue-300", ref_id: 1, },
  { name: 'Jean', id: 3, color: "bg-yellow-300", ref_id: 1, },
  { name: 'Gerard', id: 4, color: "bg-green-300", ref_id: 1, },
])
const list3 = ref([
  { name: 'A', id: 9, color: "bg-red-300", ref_id: 3, },
  { name: 'B', id: 10, color: "bg-blue-300", ref_id: 3, },
  { name: 'C', id: 11, color: "bg-yellow-300", ref_id: 3, },
  { name: 'D', id: 12, color: "bg-green-300", ref_id: 3, },
])


const log = (event) => {
  // console.log(event)
  // console.log(list.value)
}

const onAdd = () => {
  console.log('add zone 1')
  list.value = list.value.sort((a, b) => a.id - b.id)
  list3.value = list3.value.sort((a, b) => a.id - b.id)
}

const onReturn = (to, from, draggedElement) => {
  console.log(draggedElement.data)
  const ref_id = draggedElement.dataset.id;
  // if (ref_id === 1) {
  //   list.value = list.value.push
  // }
  return true;
}

</script>
