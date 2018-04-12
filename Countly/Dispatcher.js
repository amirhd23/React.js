class Dispatcher {
    
    constructor() {
        this.isDispatching = false;
        this.actionHandlers = [];
        this.register = this.register.bind(this);
    }

    register(actionHandler) {
        this.actionHandlers.push(actionHandler);
    }
    
    dispatch(action) {
        if (this.isDispatching) {
            throw new Error('Cannot dispatch in the middle of a dispatch');
        }
        console.log(this.actionHandlers)
        this.isDispatching = true;
        this.actionHandlers.forEach(handler => {
            handler(action);
        })
        this.isDispatching = false;
    } 
}
export default new Dispatcher();