import Dispatcher from './Dispatcher';
import EventEmitter from 'EventEmitter';

const tally = {
    count : 0
};

const increment = () => {
    tally.count += 1;
}

const decrement = () => {
    tally.count -= 1;
}

const zero = () => {
    tally.count = 0;
}

const handleAction = (action) => {
    switch (action.type) {
        case 'INCREMENT':
            increment();
            break;
        case 'DECREMENT':
            decrement();
            break;
        case 'ZERO':
            zero();
            break;
    }
    instance.broadcast();
};



class TallyStore extends EventEmitter {
    
    constructor() {
        super();
        Dispatcher.register(handleAction);
    }

    getTally() {
        return Object.assign({}, tally);
    }
    
    addChangeListener(callback) {
        this.addListener('CHANGE', callback);
    }
    
    removeChangeListener(callback) {
        this.removeListener('CHANGE', callback);
    }

    broadcast() {
        this.emit('CHANGE');
    }
}
const instance = new TallyStore();
export default instance;