import agent from './agent.js';

const createApiRequest = (method, endpoint, data = null) => {
  return agent[method.toLowerCase()](endpoint, data);
};

export const boardAPI = {
  create: (boardName) => createApiRequest('POST', `/1/boards/?name=${boardName}`),
  get: (boardId) => createApiRequest('GET', `/1/boards/${boardId}`),
  updateName: (boardId, boardName) => createApiRequest('PUT', `/1/boards/${boardId}?name=${boardName}`),
  delete: (boardId) => createApiRequest('DELETE', `/1/boards/${boardId}`)
};
