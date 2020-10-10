const todos = [{
    text: 'Buy cloths',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'finish the project',
    completed: false
}, {
    text: 'go to gym',
    completed: false
}]

// document.querySelector('button').addEventListener('click', function(e){
//     // console.log('event listener is working')
//     e.target.textContent = 'button clicked' 
// })
// document.querySelectorAll('button')[1].addEventListener('click', function(e){
//     console.log('adding new item')
// })


// //targeting document element using ID
// document.querySelector('#add').addEventListener('click', function(e){
//     console.log('adding new item')
// })
// document.querySelector('#remove').addEventListener('click', function(e){
//     console.log('removing an item')
// })

// targeting document element using class
// document.querySelector('#add').addEventListener('click', function(e){
//     console.log('adding new item')
// })
// document.querySelector('#remove').addEventListener('click', function(e){
//     document.querySelectorAll('.note').forEach(function(note){
//         note.remove()
//     })
// })


// //text field
document.querySelector('#search-text').addEventListener('change', function(e){
    console.log(e)
    console.log(e.target.value)
})

//single selector
//tag
//id
//class

//multiple selector
//tag-id
//tag-class
//tag-id-class