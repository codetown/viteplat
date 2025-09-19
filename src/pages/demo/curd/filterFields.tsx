export const filterFileds = [
    {
        label: '姓名',
        name: 'realName',
        type: 'input'
    },
    {
        label: '昵称',
        name: 'nickName',
        type: 'input'
    },
    {
        label: '手机号',
        name: 'mobile',
        type: 'input'
    },
    {
        label: '邮箱',
        name: 'email',
        type: 'input'
    },
    {
        label: '员工状态',
        name: 'status',
        type: 'select',
        options: [
            { label: '未启用', value: 0 },
            { label: '已启用', value: 1 }
        ]
    },
    {
        label: '出生日期',
        name: 'createdAt',
        type: 'rangePicker'
    }
]