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
        title: '[2] EXFU5531083 2408603 RN 482',
        description: 'เปิดตู้หนัก 09.00 Down-Rigid/Drop RN482 เอกสาร'
      },
      {
        sub_job_id: 2,
        ref_id: 1,
        sub_job_code: 'J21923124',
        title: '[2] EXFU5531083 2408603 RN 482',
        description: 'เปิดตู้หนัก 09.00 Down-Rigid/Drop RN482 เอกสาร'
      },
      {
        sub_job_id: 3,
        ref_id: 1,
        sub_job_code: 'J21923125',
        title: '[2] EXFU5531083 2408603 RN 482',
        description: 'เปิดตู้หนัก 09.00 Down-Rigid/Drop RN482 เอกสาร'
      },
      {
        sub_job_id: 4,
        ref_id: 1,
        sub_job_code: 'J21923126',
        title: '[2] EXFU5531083 2408603 RN 482',
        description: 'เปิดตู้หนัก 09.00 Down-Rigid/Drop RN482 เอกสาร'
      },
    ]
  },
  {
    id: 2,
    name: "Point to Point",
    color: "#1ecb44",
    sub_job: [
      {
        sub_job_id: 5,
        ref_id: 2,
        sub_job_code: 'K21923434',
        title: '[2] EXFU5531083 2408603 RN 482',
        description: 'เปิดตู้หนัก 09.00 Down-Rigid/Drop RN482 เอกสาร'
      },
      {
        sub_job_id: 6,
        ref_id: 2,
        sub_job_code: 'K21923435',
        title: '[2] EXFU5531083 2408603 RN 482',
        description: 'เปิดตู้หนัก 09.00 Down-Rigid/Drop RN482 เอกสาร'
      },
      {
        sub_job_id: 7,
        ref_id: 2,
        sub_job_code: 'K21923436',
        title: '[2] EXFU5531083 2408603 RN 482',
        description: 'เปิดตู้หนัก 09.00 Down-Rigid/Drop RN482 เอกสาร'
      },
    ]
  },
  {
    id: 3,
    name: "Pick up from depot",
    color: "#ffbe0b",
    sub_job: [
      {
        sub_job_id: 8,
        ref_id: 3,
        sub_job_code: 'M21923135',
        title: '[2] EXFU5531083 2408603 RN 482',
        description: 'เปิดตู้หนัก 09.00 Down-Rigid/Drop RN482 เอกสาร'
      },
      {
        sub_job_id: 9,
        ref_id: 3,
        sub_job_code: 'M21923136',
        title: '[2] EXFU5531083 2408603 RN 482',
        description: 'เปิดตู้หนัก 09.00 Down-Rigid/Drop RN482 เอกสาร'
      },
      {
        sub_job_id: 10,
        ref_id: 3,
        sub_job_code: 'M21923137',
        title: '[2] EXFU5531083 2408603 RN 482',
        description: 'เปิดตู้หนัก 09.00 Down-Rigid/Drop RN482 เอกสาร'
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
  {
    driver_id: 3,
    driver_name: 'ชื่อ พขร./รหัสรถ',
    round: [],
  },
  {
    driver_id: 4,
    driver_name: 'ชื่อ พขร./รหัสรถ',
    round: [],
  },
  {
    driver_id: 5,
    driver_name: 'ชื่อ พขร./รหัสรถ',
    round: [],
  },
]