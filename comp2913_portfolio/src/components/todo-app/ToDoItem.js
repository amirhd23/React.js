import React, {Component} from 'react';

class ToDoItem extends Component {
    render() {
        return (
            <div>
                <input
                    //call the parents callback with the given id 
                    onChange = {() => {
                        this.props.clickHandler(this.props.id)
                        }
                    }
                    type="checkbox" 
                    checked={this.props.isDone} 
                   />
                <span>{this.props.description}</span>
            </div>
        );
    }
}
export default ToDoItem;