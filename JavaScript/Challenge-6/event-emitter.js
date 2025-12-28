function createEventEmitter() {
  const events = {}; // store event listeners

  return {

    on(eventName, listener) {
      if (!events[eventName]) {
        events[eventName] = [];
      }
      events[eventName].push(listener);

      // return unsubscribe function
      return () => {
        events[eventName] = events[eventName].filter(l => l !== listener);
      };
    },

    once(eventName, listener) {
      const wrapper = (...args) => {
        listener(...args);
        this.off(eventName, wrapper); // remove after first use
      };
      this.on(eventName, wrapper);
    },

    emit(eventName, ...data) {
      const listeners = events[eventName];
      if (listeners) {
        listeners.forEach(fn => fn(...data));
      }
    },

    off(eventName) {
      events[eventName] = [];
    }
  };
}
//=================================================
const emitter = createEventEmitter();


const unsubscribe = emitter.on('userLogin', (user) => {
    console.log(`${user.name} logged in`);
});

emitter.on('userLogin', (user) => {
    console.log(`Send welcome email to ${user.email}`);
});

emitter.once('appStart', () => {
    console.log('App started - this only runs once');
});

emitter.emit('userLogin', { name: 'John', email: 'john@example.com' });

emitter.emit('appStart'); 
emitter.emit('appStart');  

unsubscribe(); 
emitter.emit('userLogin', { name: 'Jane', email: 'jane@example.com' });


emitter.off('userLogin'); 