import { ref } from "vue";

const draggedJob = ref(null)

export function useDrag() {
  return {
    draggedJob
  }
}