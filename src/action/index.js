export const ADDTASK ="ADDTASK"

export const addTask = (task) => {
    return{
        type: ADDTASK,
        payload:task
    }
}
export const DELETETASK ="DELETETASK"

export const deleteTask = (taskId) => {
    return{
        type: DELETETASK,
        payload:taskId
    }
}