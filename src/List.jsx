/*
function List({tasks, deleteTask, toggleComplete})
{
    return(
        <ol className="task-list">
            {tasks.map((task,index) =>
                <li key={index}>
                    <label className="task-label"></label>
                        <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleComplete(task.id)}
                        className="task-checkbox"/>
                        <span className="task-text">{task.text || task}</span>
                        <button 
                            className="delete-button"
                            onClick={() => deleteTask(index)}>
                                Delete
                        </button>
                    <label/>
                </li>
            )}
        </ol>
    );
}

export default List
*/

function List({tasks, deleteTask})
{
    return(
        <ol className="task-list">
            {tasks.map((task,index) =>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button 
                        className="delete-button"
                        onClick={() => deleteTask(index)}>
                            Delete
                    </button>
                </li>
            )}
        </ol>
    );
}

export default List