import request from './request';

export async function getOptions(params) {
  return request('/api/v1/options', {
    method: 'GET',
    params
  });
};

// getOptionDetail获取菜单树
export async function getOptionDetail(params) {
  return request(`/api/v1/options/${params.id}`, {
    method: 'GET',
    params
  });
};

// addOption 添加字典项
export async function postOption(params) {
  console.info("params", params)
  return request('/api/v1/options', {
    method: 'POST',
    data: params
  });
};

// addOption 添加字典项
export async function putOption(params) {
  return request(`/api/v1/options/${params.id}`, {
    method: 'PUT',
    data: params
  });
};

// addOption 添加字典项
export async function deleteOption(params) {
  return request(`/api/v1/options/${params.id}`, {
    method: 'DELETE',
    params
  });
};

// getAdmins获取菜单树
export async function getAdmins(params) {
  return request('/api/v1/admins', {
    method: 'GET',
    params
  });
};