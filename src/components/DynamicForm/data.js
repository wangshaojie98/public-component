const data = [
  {
    id: 1,
    component: {
      type: "select"
    },
    field: "contact_name",
    label: "联系人姓名",
    rules: { required: true, message: "请输入姓名", trigger: "blur" },
    data: {
      options: [
        {
          value: "张三",
          label: "张三",
          tel: "13890002231",
          job: "负责人",
          template: "张三--12390002231--负责人"
        },
        {
          value: "李四",
          label: "李四",
          tel: "18890002231",
          job: "财务",
          template: "李四--13890002231--财务"
        },
        {
          value: "王五",
          label: "王五",
          tel: "13890002231",
          job: "老板",
          template: "王五--13890002231--老板"
        }
      ],
      value: ""
    }
  },
  {
    id: 2,
    component: {
      type: "text"
    },
    field: "contact_tel",
    rules: { required: false },
    data: ""
  },
  {
    id: 3,
    component: {
      type: "text"
    },
    field: "contact_job",
    rules: { required: false },
    data: ""
  }
];

export default data;
