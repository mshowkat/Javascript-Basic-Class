const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]


// <<------------------------------------Local storage------------------------------------------------->>

// localStorage.setItem('location', 'chittagong')
// let localLocation = localStorage.getItem('location')
// console.log(localLocation)
// localStorage.removeItem('location')
// localStorage.clear()


// local storage only store string.
// JSON (javascript object notation) it wil converts our object into string

// <<------------------------------------------------------------------------------------->>
// <<------------------------------------------------------------------------------------->>

const user = {
    name: 'robert',
    age: 85
}

const userJSON = JSON.stringify(user)
// console.log(userJSON)
// console.log(user)

// localStorage.setItem('user', userJSON)
const getUserJSON = localStorage.getItem('user')
const getUser = JSON.parse(getUserJSON)
// console.log(getUser)
console.log(`${getUser.name} is ${getUser.age} years old`)

// <<------------------------------------------------------------------------------------->>
// <<------------------------------------------------------------------------------------->>





// <<------------------------------------previos code------------------------------------------------->>

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''
    
    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'The button was clicked'
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})