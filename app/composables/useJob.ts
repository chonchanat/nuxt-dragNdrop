import { jobs, contentData } from './data'
import { ref } from "vue";

const jobsUpdated = ref(jobs);
const data = ref(contentData);

for (let i = 0; i < data.value.length; i++) {
  if (data.value[i]?.round.length === 0) {
    for (let j = 0; j < 5; j++) {
      data.value[i]?.round.push({ note: '', sub_job_id: null})
    }
  }
}

export function useJob() {
  return {
    jobs,
    jobsUpdated,    // Sidebar
    data,           // DragDropArea
  }
}