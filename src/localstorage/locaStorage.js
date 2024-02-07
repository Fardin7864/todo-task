const addToLocalStorage = (obj) => { 
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(obj);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    return {obj, message: "Task Added!"}
 }

const getFromLocalStorage = () => { 
    const task = JSON.parse(localStorage.getItem('task')) || []
    return task;
 }

const removeFromLocalStorage = (id) => { 
    const tasks = getFromLocalStorage();
    const afterRemove = tasks.filter(task => task.id !== id );
    localStorage.setItem('tasks', afterRemove);
    return {id, message: `${id} Removed from storage!`}
 }


 export {getFromLocalStorage, addToLocalStorage, removeFromLocalStorage}