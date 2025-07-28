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
        @start="onStart"
        @end="onEnd"
      >
        <div
          v-for="(card, _j) in slot.round"
          :key="_j"
          class="border-r-[0.5px] border-[#f1f2f4] w-[360px] p-2"
        >
          <div class="text-end cursor-pointer">
            <Icon v-if="!card.note" name="fluent:note-add-16-regular" class="active:bg-gray-500" @click="focusInput(_i, _j)"/>
            <Icon v-if="card.note" name="pepicons-pencil:pen" class="mx-2 active:bg-gray-500" @click="focusInput(_i, _j)"/>
            <Icon v-if="card.note" name="streamline-sharp:recycle-bin-2" class="active:bg-gray-500" @click="removeNote(_i, _j)"/>
          </div>
          <div>
            <UTextarea 
              v-model="data[_i].round[_j].note" 
              class="w-full bg-amber-300"
              @blur="console.log(data[_i].round[_j].note, _i, _j)"
              :ref="setInputRef"
              :data-i="_i"
              :data-j="_j"
            />
          </div>
        </div>
      </draggable>

    </div>
  </div>
</template>

<script setup>
import { UTextarea } from '#components'
import { driver, round, contentData } from '../../composables/data'
import { VueDraggableNext as Draggable } from 'vue-draggable-next'

const data = ref(contentData)
const inputRefs = ref({})

const setInputRef = (el) => {
  if (el?.$el) { 
    const inputEl = el.$el.querySelector('textarea')
    const i = inputEl?.dataset.i
    const j = inputEl?.dataset.j

    if (i != null && j != null) {
      if (!inputRefs.value[i]) inputRefs.value[i] = []
      inputRefs.value[i][j] = inputEl
    }
  }
}

const focusInput = (i, j) => {
  inputRefs.value[i]?.[j]?.focus()
}

const removeNote = (i, j) => {
  console.log('remove text', i, j)
  data.value[i].round[j].note = '';
}

const onAdd = (event, index) => {
  console.log(event)
}

const onStart = (event) => {
  console.log('start')
}

const onEnd = (event) => {
  console.log('endา')
}

const log = (event) => {
  console.log(event)
  console.log(data.value[0])
}

</script>

<style scoped></style>
