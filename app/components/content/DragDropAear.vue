<template>
  <div>
    <div
      v-for="(slot, _i) in data"
      :key="_i"
      class="border-[0.5px] border-[#f1f2f4] h-[107px] bg-[#ffffff] flex"
    >

      <div class="border-r-[0.5px] border-[#f1f2f4] w-[250px] p-4 flex justify-end flex-col">
        <p class="text-xs text-[#9ca3af]">รายละเอียด</p>
        <p class="font-semibold text-[#1f2937]">{{ slot.driver_name }}</p>
      </div>

      <draggable class="dragArea list-group flex" :list="slot.round" 
        :group="{name: 'content', put: true}"
        @change="onChange($event, _i)"
      >
        <div
          v-for="(card, _j) in slot.round"
          :key="_j"
          class="bg-white border-r-[0.5px] border-[#f1f2f4] w-[360px] p-2"
        >
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
          />

        </div>
      </draggable>

    </div>
  </div>
</template>

<script setup>
import { driver, round, contentData } from '../../composables/data'
import { VueDraggableNext as Draggable } from 'vue-draggable-next'
import SubJobCard from '../sidebar/SubJobCard.vue';
import Note from './Note.vue';

const data = ref(contentData)

const tempData = ref({})

const onChange = (event, mainIndex) => {
  const { added, removed, moved } = event;
  const empty = { note: '', sub_job_id: null }

  if (added) {
    const newIndex = added.newIndex;
    tempData.value = data.value[mainIndex].round[newIndex + 1]
    data.value[mainIndex].round.splice(newIndex + 1, 1)
  } else if (removed) {
    const oldIndex = removed.oldIndex;
    data.value[mainIndex].round.splice(oldIndex, 0, empty)                // replace with empty object
    // data.value[mainIndex].round.splice(oldIndex, 0, tempData.value)    // swapping
  }
}

</script>

<style scoped>
</style>
