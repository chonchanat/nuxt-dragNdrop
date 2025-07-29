export const driver = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: 'ชื่อ พขร./รหัสรถ',
}))

export const round = Array.from({ length: 5})

export const jobs = [
  {
    id: 1,
    name: "Export",
    color: "#8338ec",
    sub_job: [
      {
        sub_job_id: 1,
        ref_id: 1,
        sub_job_code: 'J21923123',
        title: 'sub job',
        description: 'description sub job'
      },
      {
        sub_job_id: 2,
        ref_id: 1,
        sub_job_code: 'J21923124',
        title: 'sub job',
        description: 'description sub job'
      },
      {
        sub_job_id: 3,
        ref_id: 1,
        sub_job_code: 'J21923125',
        title: 'sub job',
        description: 'description sub job'
      },
      {
        sub_job_id: 4,
        ref_id: 1,
        sub_job_code: 'J21923126',
        title: 'sub job',
        description: 'description sub job'
      },
    ]
  },
  {
    id: 2,
    name: "Point to Point",
    color: "#1ecb44",
    sub_job: [
      {
        sub_job_id: 1,
        ref_id: 2,
        sub_job_code: 'J21923123',
        title: 'sub job',
        description: 'description sub job'
      },
      {
        sub_job_id: 2,
        ref_id: 2,
        sub_job_code: 'J21923123',
        title: 'sub job',
        description: 'description sub job'
      },
      {
        sub_job_id: 3,
        ref_id: 2,
        sub_job_code: 'J21923123',
        title: 'sub job',
        description: 'description sub job'
      },
    ]
  },
  {
    id: 2,
    name: "Pick up from depot",
    color: "#ffbe0b",
    sub_job: [
      {
        sub_job_id: 1,
        ref_id: 3,
        sub_job_code: 'J21923123',
        title: 'sub job',
        description: 'description sub job'
      },
      {
        sub_job_id: 2,
        ref_id: 3,
        sub_job_code: 'J21923123',
        title: 'sub job',
        description: 'description sub job'
      },
      {
        sub_job_id: 3,
        ref_id: 3,
        sub_job_code: 'J21923123',
        title: 'sub job',
        description: 'description sub job'
      },
    ]
  },
]

export const contentData = [
  {
    driver_id: 1,
    driver_name: 'ชื่อ พขร./รหัสรถ',
    round: [
      {
        note: '',
        sub_job_id: null,
      },
      {
        note: 'รถกำลังซ่อมอยู่ในอู่รถ',
        sub_job_id: null,
      },
      {
        note: '',
        sub_job_id: null,
      },
      {
        note: '',
        sub_job_id: null,
      },
      {
        note: '',
        sub_job_id: null,
      },
    ],
  },
  {
    driver_id: 2,
    driver_name: 'ชื่อ พขร./รหัสรถ',
    round: [
      {
        note: 'เตรียมตัวทำงาน',
        sub_job_id: null,
      },
      {
        note: '',
        sub_job_id: null,
      },
      {
        note: '',
        sub_job_id: null,
      },
      {
        note: '',
        sub_job_id: null,
      },
      {
        note: '',
        sub_job_id: null,
      },
    ],
  },
]