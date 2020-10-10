// const newParagraph = document.createElement('h1')
// newParagraph.textContent = 'this is a paragraph assigned from DOM'
// document.querySelector('body').appendChild(newParagraph)


const todos = [{
    text: 'Buy cloths',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: false
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'finish the project',
    completed: false
}, {
    text: 'go to gym',
    completed: false
}, {
    text: 'go to gym',
    completed: false
}]

const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})