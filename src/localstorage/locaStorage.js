const addToLocalStorage = (obj) => { 
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(obj);
    try {
        localStorage.setItem('tasks', JSON.stringify(tasks));
        return {obj, message: "Task Added!"}
    } catch (error) {
        return {message: error}
    }
 }

const getFromLocalStorage = () => { 
    const task = JSON.parse(localStorage.getItem('tasks')) || []
    return task;
 }

const removeFromLocalStorage = (id) => { 
    const tasks = getFromLocalStorage();
    const afterRemove = tasks.filter(task => task.id !== id );
    localStorage.setItem('tasks',JSON.stringify(afterRemove));
    return {id, message: `${id} Removed from storage!`}
 }


 export {getFromLocalStorage, addToLocalStorage, removeFromLocalStorage}