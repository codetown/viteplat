import { Tag, Space, Button, Input, Select, Form, InputNumber, DatePicker } from 'antd';
// import { JsonView, allExpanded, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';

// =================================================================
// 0. 通用辅助函数和组件
// =================================================================

// 用于在表格中渲染JSON内容的组件
const JsonCell = ({ jsonString }) => {
  try {
    const jsonObj = JSON.parse(jsonString);
    return (
    <div></div>    // <JsonView data={jsonObj} shouldExpandNode={allExpanded} style={defaultStyles} />
    );
  } catch (e) {
    return <span style={{ color: 'red' }}>无效JSON</span>;
  }
};


// =================================================================
// 1. 工作区管理 (ai_workspaces)
// =================================================================

// 1.1 工作区 - Table Columns
const getWorkspaceTableColumns = (handleEdit, handleDelete, users = []) => [
  { title: 'ID', dataIndex: 'id', key: 'id', width: 80 },
  { title: '工作区名称', dataIndex: 'name', key: 'name' },
  {
    title: '所有者',
    dataIndex: 'owner_id',
    key: 'owner_id',
    render: (userId) =>{
      const user:any=users.find((u:any) => u.value === userId);
      return user?.label || `用户ID: ${userId}`
    }
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    key: 'created_at',
    render: (date) => new Date(date).toLocaleString(),
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Space>
        <Button type="link" onClick={() => handleEdit(record)}>编辑</Button>
        <Button type="link" danger onClick={() => handleDelete(record)}>删除</Button>
      </Space>
    ),
  },
];

// 1.2 工作区 - 查询表单
const workspaceSearchFormColumns = [
  { name: 'name', label: '工作区名称', component: <Input placeholder="请输入名称" allowClear /> },
];

// 1.3 工作区 - 数据表单
const getWorkspaceDataFormColumns = (users = []) => [
  {
    name: 'name',
    label: '工作区名称',
    rules: [{ required: true, message: '请输入工作区名称!' }],
    component: <Input placeholder="例如：市场营销部" />,
  },
  {
    name: 'owner_id',
    label: '所有者',
    rules: [{ required: true, message: '请指定工作区所有者!' }],
    component: <Select placeholder="请选择用户" options={users} showSearch filterOption={(input:any, option:any) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())} />,
  },
];


// =================================================================
// 2. 用户管理 (ai_users)
// =================================================================

// 2.1 用户 - Table Columns
const getUserTableColumns = (handleEdit, handleDelete, workspaces = []) => [
  { title: '用户名', dataIndex: 'username', key: 'username' },
  { title: '邮箱', dataIndex: 'email', key: 'email' },
  {
    title: '角色',
    dataIndex: 'role',
    key: 'role',
    render: (role) => {
      const roleMap = { admin: '管理员', developer: '开发者', viewer: '查看者' };
      const colorMap = { admin: 'red', developer: 'blue', viewer: 'gray' };
      return <Tag color={colorMap[role]}>{roleMap[role]}</Tag>;
    },
  },
  {
    title: '所属工作区',
    dataIndex: 'workspace_id',
    key: 'workspace_id',
    render: (wsId) =>{
      const workspace:any= workspaces.find((w:any) => w.value === wsId)
      return workspace?.label || `工作区ID: ${wsId}`;
    }
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    key: 'created_at',
    render: (date) => new Date(date).toLocaleString(),
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Space>
        <Button type="link" onClick={() => handleEdit(record)}>编辑</Button>
        <Button type="link" danger onClick={() => handleDelete(record)}>删除</Button>
      </Space>
    ),
  },
];

// 2.2 用户 - 查询表单
const userSearchFormColumns = [
  { name: 'username', label: '用户名', component: <Input placeholder="请输入用户名" allowClear /> },
  { name: 'email', label: '邮箱', component: <Input placeholder="请输入邮箱" allowClear /> },
  {
    name: 'role',
    label: '角色',
    component: (
      <Select placeholder="请选择角色" allowClear>
        <Select.Option value="admin">管理员</Select.Option>
        <Select.Option value="developer">开发者</Select.Option>
        <Select.Option value="viewer">查看者</Select.Option>
      </Select>
    ),
  },
];

// 2.3 用户 - 数据表单
const getUserDataFormColumns = (isEdit = false, workspaces = []) => [
  {
    name: 'username',
    label: '用户名',
    rules: [{ required: true, message: '请输入用户名!' }],
    component: <Input />,
  },
  {
    name: 'email',
    label: '邮箱',
    rules: [{ required: true, message: '请输入邮箱!' }, { type: 'email', message: '请输入有效的邮箱地址!' }],
    component: <Input />,
  },
  {
    name: 'password',
    label: '密码',
    rules: [{ required: !isEdit, message: '请输入密码!' }],
    component: <Input.Password placeholder={isEdit ? "如需修改请输入新密码" : ""} />,
  },
  {
    name: 'role',
    label: '角色',
    rules: [{ required: true, message: '请选择角色!' }],
    component: (
      <Select placeholder="请选择角色">
        <Select.Option value="admin">管理员</Select.Option>
        <Select.Option value="developer">开发者</Select.Option>
        <Select.Option value="viewer">查看者</Select.Option>
      </Select>
    ),
  },
  {
    name: 'workspace_id',
    label: '所属工作区',
    rules: [{ required: true, message: '请选择一个工作区!' }],
    component: <Select placeholder="请选择工作区" options={workspaces} />,
  },
];


// =================================================================
// 3. LLM模型管理 (ai_llm_models)
// =================================================================

// 3.1 LLM模型 - Table Columns
const getLlmModelTableColumns = (handleEdit, handleDelete) => [
  { title: '模型名称', dataIndex: 'model_name', key: 'model_name' },
  { title: '提供商', dataIndex: 'provider', key: 'provider' },
  {
    title: '所属',
    dataIndex: 'workspace_id',
    key: 'workspace_id',
    render: (wsId) => wsId === 0 ? <Tag color="purple">平台预置</Tag> : `工作区ID: ${wsId}`,
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    key: 'created_at',
    render: (date) => new Date(date).toLocaleString(),
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => record.workspace_id !== 0 && (
      <Space>
        <Button type="link" onClick={() => handleEdit(record)}>编辑</Button>
        <Button type="link" danger onClick={() => handleDelete(record)}>删除</Button>
      </Space>
    ),
  },
];

// 3.2 LLM模型 - 查询表单
const llmModelSearchFormColumns = [
  { name: 'model_name', label: '模型名称', component: <Input placeholder="例如: gpt-4-turbo" allowClear /> },
  { name: 'provider', label: '提供商', component: <Input placeholder="例如: OpenAI" allowClear /> },
];

// 3.3 LLM模型 - 数据表单
const llmModelDataFormColumns = [
  {
    name: 'model_name',
    label: '模型名称',
    rules: [{ required: true, message: '请输入模型名称!' }],
    component: <Input placeholder="例如: gpt-4-turbo-2024-04-09" />,
  },
  {
    name: 'provider',
    label: '提供商',
    rules: [{ required: true, message: '请输入提供商!' }],
    component: <Input placeholder="例如: OpenAI, Anthropic, Self-Hosted" />,
  },
  {
    name: 'credentials_json',
    label: '凭证 (JSON)',
    component: <Input.TextArea rows={4} placeholder={'例如：\n{\n  "api_key": "sk-..."\n}'} />,
  },
];


// =================================================================
// 4. 工具管理 (ai_tools)
// =================================================================

// 4.1 工具 - Table Columns
const getToolTableColumns = (handleEdit, handleDelete) => [
  { title: '工具名称', dataIndex: 'name', key: 'name' },
  { title: '描述', dataIndex: 'description', key: 'description', ellipsis: true },
  {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
    render: (type) => <Tag>{type}</Tag>,
  },
  {
    title: '所属',
    dataIndex: 'workspace_id',
    key: 'workspace_id',
    render: (wsId) => wsId === 0 ? <Tag color="purple">平台预置</Tag> : `工作区ID: ${wsId}`,
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => record.workspace_id !== 0 && (
      <Space>
        <Button type="link" onClick={() => handleEdit(record)}>编辑</Button>
        <Button type="link" danger onClick={() => handleDelete(record)}>删除</Button>
      </Space>
    ),
  },
];

// 4.2 工具 - 查询表单
const toolSearchFormColumns = [
  { name: 'name', label: '工具名称', component: <Input placeholder="请输入工具名称" allowClear /> },
  {
    name: 'type',
    label: '类型',
    component: (
      <Select placeholder="请选择类型" allowClear>
        <Select.Option value="api">API</Select.Option>
        <Select.Option value="code_interpreter">代码解释器</Select.Option>
        <Select.Option value="database_query">数据库查询</Select.Option>
      </Select>
    ),
  },
];

// 4.3 工具 - 数据表单
const toolDataFormColumns = [
  {
    name: 'name',
    label: '工具名称',
    rules: [{ required: true, message: '请输入工具名称!' }],
    component: <Input placeholder="例如: web_search" />,
  },
  {
    name: 'description',
    label: '工具描述',
    rules: [{ required: true, message: '请输入工具描述!' }],
    component: <Input.TextArea rows={3} placeholder="详细描述工具的功能、参数和返回，这段描述会给LLM看。" />,
  },
  {
    name: 'type',
    label: '类型',
    rules: [{ required: true, message: '请选择工具类型!' }],
    component: (
      <Select placeholder="请选择类型">
        <Select.Option value="api">API</Select.Option>
        <Select.Option value="code_interpreter">代码解释器</Select.Option>
        <Select.Option value="database_query">数据库查询</Select.Option>
      </Select>
    ),
  },
  {
    name: 'config_json',
    label: '配置 (JSON)',
    rules: [
      { required: true, message: '请输入配置信息!' },
      {
        validator: (_, value) => {
          if (!value) return Promise.resolve();
          try { JSON.parse(value); return Promise.resolve(); }
          catch (error) { return Promise.reject(new Error('请输入合法的JSON格式!')); }
        },
      },
    ],
    component: <Input.TextArea rows={6} placeholder={'例如 (API类型):\n{\n  "endpoint": "https://...",\n  "method": "GET",\n  "params": ["query"]\n}'} />,
  },
];


// =================================================================
// 5. 知识库管理 (ai_knowledge_bases)
// =================================================================

// 5.1 知识库 - Table Columns
const getKnowledgeBaseTableColumns = (handleEdit, handleDelete) => [
  { title: '知识库名称', dataIndex: 'name', key: 'name' },
  { title: '描述', dataIndex: 'description', key: 'description', ellipsis: true },
  { title: '向量库', dataIndex: 'vector_db_provider', key: 'vector_db_provider' },
  { title: '嵌入模型', dataIndex: 'embedding_model', key: 'embedding_model', ellipsis: true },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    key: 'created_at',
    render: (date) => new Date(date).toLocaleString(),
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Space>
        {/* 通常这里还会有 "管理文件"、"同步" 等操作 */}
        <Button type="link" onClick={() => handleEdit(record)}>编辑</Button>
        <Button type="link" danger onClick={() => handleDelete(record)}>删除</Button>
      </Space>
    ),
  },
];

// 5.2 知识库 - 查询表单
const knowledgeBaseSearchFormColumns = [
  { name: 'name', label: '知识库名称', component: <Input placeholder="请输入名称" allowClear /> },
];

// 5.3 知识库 - 数据表单
const knowledgeBaseDataFormColumns = [
  {
    name: 'name',
    label: '知识库名称',
    rules: [{ required: true, message: '请输入知识库名称!' }],
    component: <Input placeholder="例如: 2024年第二季度产品文档" />,
  },
  {
    name: 'description',
    label: '描述',
    component: <Input.TextArea rows={3} placeholder="描述这个知识库包含什么内容。" />,
  },
  {
    name: 'vector_db_provider',
    label: '向量库提供商',
    component: <Input placeholder="例如: Pinecone, Milvus, Chroma" />,
  },
  {
    name: 'embedding_model',
    label: '嵌入模型',
    component: <Input placeholder="例如: text-embedding-3-large" />,
  },
];


// =================================================================
// 6. 执行日志 (ai_execution_sessions)
// =================================================================

// 6.1 执行日志 - Table Columns
const getSessionTableColumns = (handleViewDetails, agents = []) => [
  {
    title: '会话ID',
    dataIndex: 'id',
    key: 'id',
    render: (id) => <code>{id.substring(0, 8)}...</code>,
  },
  {
    title: '关联Agent',
    dataIndex: 'agent_id',
    key: 'agent_id',
    render: (agentId:any) => {
      const agent:any=agents.find((a:any) => a.value === agentId)
      return (agent && agent?.label) || `ID: ${agentId}`},
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: (status) => {
      const statusMap = { running: '运行中', completed: '已完成', failed: '失败', human_in_loop: '人工介入' };
      const colorMap = { running: 'blue', completed: 'green', failed: 'red', human_in_loop: 'orange' };
      return <Tag color={colorMap[status]}>{statusMap[status]}</Tag>;
    },
  },
  { title: 'Token消耗', dataIndex: 'token_usage', key: 'token_usage' },
  { title: '成本($)', dataIndex: 'cost', key: 'cost' },
  {
    title: '开始时间',
    dataIndex: 'started_at',
    key: 'started_at',
    render: (date) => new Date(date).toLocaleString(),
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => <Button type="link" onClick={() => handleViewDetails(record)}>查看详情</Button>,
  },
];

// 6.2 执行日志 - 查询表单
const getSessionSearchFormColumns = (agents = []) => [
  {
    name: 'agent_id',
    label: '关联Agent',
    component: <Select placeholder="请选择Agent" options={agents} allowClear />,
  },
  {
    name: 'status',
    label: '状态',
    component: (
      <Select placeholder="请选择状态" allowClear>
        <Select.Option value="running">运行中</Select.Option>
        <Select.Option value="completed">已完成</Select.Option>
        <Select.Option value="failed">失败</Select.Option>
        <Select.Option value="human_in_loop">人工介入</Select.Option>
      </Select>
    ),
  },
  {
    name: 'date_range',
    label: '执行时间',
    component: <DatePicker.RangePicker showTime />,
  },
];

// 6.3 执行步骤 - Table Columns (用于详情页)
const executionStepTableColumns = [
    { title: '步骤', dataIndex: 'step_order', key: 'step_order', width: 60 },
    {
        title: '类型',
        dataIndex: 'step_type',
        key: 'step_type',
        width: 150,
        render: (type) => {
            const typeMap = { thought: '思考', tool_call: '工具调用', tool_output: '工具输出', llm_response: '模型响应' };
            const colorMap = { thought: 'geekblue', tool_call: 'cyan', tool_output: 'purple', llm_response: 'gold' };
            return <Tag color={colorMap[type]}>{typeMap[type]}</Tag>;
        },
    },
    {
        title: '内容',
        dataIndex: 'content',
        key: 'content',
        render: (jsonString) => <JsonCell jsonString={jsonString} />,
    },
    {
        title: '时间',
        dataIndex: 'created_at',
        key: 'created_at',
        width: 180,
        render: (date) => new Date(date).toLocaleString(),
    },
];

