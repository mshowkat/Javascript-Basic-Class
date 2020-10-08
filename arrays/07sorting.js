// const todos = [{
//     text: 'Buy food',
//     completed: true
//     }, {
//     text: 'Do work',
//     completed: false
//     }, {
//     text: 'Exercise',
//     completed: true
//     }]
// const sortTodos = function (todos) {
//     todos.sort(function (a, b) {
//     if (a.completed && b.completed) {
//         return -1
//     } else if (!b.completed && a.completed) {
//         return 1
//     } else {
//         return 0
//     }
//     })
// }
//     sortTodos(todos)
//     console.log(todos)


const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
