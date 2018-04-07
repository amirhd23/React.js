import React, {Component} from 'react';

class TaskAdder extends Component {
    
    constructor(props) {
        super(props);
        this.counter = 0;
        this.state = {
            toDoItem : ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    //change of the text input
    handleChange(e) {
        const {value, name} = e.target;
        this.setState({[name] : value});
    }

    //submit of the new task
    handleSubmit(e) {
        e.preventDefault();
        //not saving empty task
        if (this.state.toDoItem === '' || 
            this.state.toDoItem == null ||
            this.state.toDoItem.trim() === '') {
            return;
        }
        const newTask = {
            id : this.counter,
            description : this.state.toDoItem,
            isDone : false
        }
        this.setState({toDoItem : ''});//clear the input
        this.counter++;
        this.props.onTaskAdded(newTask);//call the parents callback
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                    <input 
                        type = "text" 
                        name = "toDoItem" 
                        placeholder = "Enter to do item"
                        value={this.state.toDoItem}
                        onChange = {this.handleChange}
                    />
                    <input type="submit" value="add" />
                </form>
        );
    }
}
export default TaskAdder;