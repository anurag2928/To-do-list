export const addTask = (text) => ({
    type: 'ADD_TASK',
    payload: {
      id: Math.random().toString(36).substr(2, 9), // Random ID generation
      text,
    },
  });
  
  export const deleteTask = (taskId) => ({
    type: 'DELETE_TASK',
    payload: {
      id: taskId,
    },
  });
  