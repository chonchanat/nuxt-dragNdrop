<template>
  <div v-if="!card.sub_job_id">
    <div class="text-end cursor-pointer">
      <Icon v-if="!card.note" name="fluent:note-add-16-regular" class="active:bg-gray-500" @click="focusInput" />
      <Icon v-if="card.note" name="pepicons-pencil:pen" class="mx-2 active:bg-gray-500" @click="focusInput" />
      <Icon v-if="card.note" name="streamline-sharp:recycle-bin-2" class="active:bg-gray-500" @click="removeNote"/>
    </div>
    <div>
      <UTextarea 
        v-model="data[i].round[j].note" 
        class="w-full bg-amber-300" 
        ref="inputRefs"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  card: null,
  data: null,
  i: Number,
  j: Number,
})

const inputRefs = ref(null)

const focusInput = () => {
  inputRefs.value?.$el?.querySelector('textarea')?.focus()
}

const removeNote = (i, j) => {
  console.log('remove text', i, j)
  props.data[props.i].round[props.j].note = '';
}

</script>