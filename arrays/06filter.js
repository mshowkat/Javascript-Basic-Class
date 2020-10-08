const todos = [{
    text: 'Order cat food',
    completed: false
    }, {
    text: 'Clean kitchen',
    completed: true
    }, {
    text: 'Do work',
    completed: true
    }]
const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
    return !todo.completed
    })
    }
    // Will print an array of all todos that still need to be completed
    console.log(getThingsToDo(todos))