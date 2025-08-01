import { ref } from "vue";

const draggedJob = ref(null)

// detect from content area
const previewDropI = ref(null);
const previewDropJ = ref(null);
const dragStartI = ref(null);
const dragStartJ = ref(null);

export function useDrag() {

  const resetDraggable = () => {
    draggedJob.value = null

    previewDropI.value = null
    previewDropJ.value = null

    dragStartI.value = null
    dragStartJ.value = null
  }

  return {
    draggedJob,
    previewDropI,
    previewDropJ,
    dragStartI,
    dragStartJ,
    resetDraggable,
  }
}