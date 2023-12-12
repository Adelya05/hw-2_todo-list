
export const addTask = (newTask) => ({
    type: "ADD_TASK",
    payload: newTask,
  });
  
  export const deleteTask = (id) => ({
    type: "DELETE_TASK",
    payload: id,
  });
  
  export const clearAllTasks = () => ({
    type: "CLEAR_ALL_TASKS",
  });
  
  export const switchToTodo = () => ({
    type: "SWITCH_TO_TODO",
  });
  
  export const switchToCompleted = () => ({
    type: "SWITCH_TO_COMPLETED",
  });
  
  export const taskCompleted = (id) => ({
    type: "TASK_COMPLETED",
    payload: id,
  });
  
  export const toggleEdit = (taskId, taskText) => ({
    type: "TOGGLE_EDIT",
    payload: { id: taskId, text: taskText },
  });
  
  export const saveChange = (taskId, newTitle) => ({
    type: "SAVE_CHANGE",
    payload: { id: taskId, title: newTitle },
  });
  
  export const updateNewTodoTitle = (value) => ({
    type: "UPDATE_NEW_TODO_TITLE",
    payload: value,
  });
  
  export const updateNewDescription = (value) => ({
    type: "UPDATE_NEW_DESCRIPTION",
    payload: value,
  });
  
  export const updateTaskText = (value) => ({
    type: "UPDATE_TASK_TEXT",
    payload: value,
  });
  