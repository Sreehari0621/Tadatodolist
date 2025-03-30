function AddTask({
    tasks,
    setTasks,
    newTask,
    setNewTask,
    handleInputChange,
    addtask})
{
    return(
        <div className="add-task">
            <input
                type="text"
                placeholder="Enter a task..."
                value={newTask}
                onChange={handleInputChange}/>
            <button
                className="add-button"
                onClick={addtask}>
                add
            </button>    
        </div>
    );
}

export default AddTask