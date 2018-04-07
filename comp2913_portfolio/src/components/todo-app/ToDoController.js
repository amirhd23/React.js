import React, {Component} from 'react';
import ToDoItem from './ToDoItem';
import TaskAdder from './TaskAdder';
class ToDoController extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            tasks : []
        };
        this.addTask = this.addTask.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    addTask(newTask) {
        this.setState({
            tasks : this.state.tasks.concat(newTask)
        });
    }

    //callback function for ToDoItem click event
    handleClick(id) {
        //change the task with the given id to done
        /*since tasks are not deleted in the tasks[] array,
        their id correspond to the counter of TaskAdder which started from 
        zero and matches their position in the tasks[] array.
        */
        let task = this.state.tasks[id];
        task.isDone = true;
        this.setState({
            tasks : this.state.tasks
        })
    }

    render() {
        return (
            <div>
                <TaskAdder onTaskAdded = {this.addTask}/>
                <hr />
                <ul>
                    {this.state.tasks.map((task) => {
                        return  !task.isDone &&
                                (<li key={task.id}>
                                    <ToDoItem 
                                        description = {task.description}
                                        isDone = {task.isDone}
                                        id = {task.id}
                                        clickHandler = {this.handleClick}
                                    />
                                </li>)
                    })}
                </ul>
            </div>
        );
    }
}
export default ToDoController;
