import { jobs, contentData } from './data'
import { ref } from "vue";

const jobsUpdated = ref(jobs);
const data = ref(contentData);

for (let i = 0; i < data.value.length; i++) {
  let fullOrder = [1, 2, 3, 4, 5]
  let existOrder = data.value[i]?.round.map(e => e.order)
  let missingOrder = fullOrder.filter(e => !existOrder?.includes(e))

  let combined = [...data.value[i]!.round, ...missingOrder.map(e => ({ order: e, note: ''}))]
  combined = combined.sort((a, b) => a.order - b.order)

  data.value[i]!.round = combined
}

export function useJob() {
  return {
    jobsUpdated,    // Sidebar
    data,           // DragDropArea
  }
}