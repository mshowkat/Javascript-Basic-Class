// const notes = ['note 1', 'note 2', 'note 3', 'note 4', 'note 5', 'note 6', 'note 7', 'note 8']

// console.log(notes.indexOf('note 5')) // indexOf method will provide index location in an array.

// const notes = [{
//     title: 'My next trip',
//     body: 'I would like to go to Spain'
//     }, {
//     title: 'Habbits to work on',
//     body: 'Exercise. Eating a bit better.'
//     }, {
//     title: 'Office modification',
//     body: 'Get a new seat'
//     }]

// let test = notes.indexOf({
//     title: 'My next trip',
//     body: 'I would like to go to Spain'
//     })
// console.log(test)



    // const index = notes.findIndex(function (note, index) {
    // return note.title === 'Habbits to work on'
    // })

    // console.log(index)


    const notes = [{
        title: 'My next trip',
        body: 'I would like to go to Spain'
        }, {
        title: 'Habbits to work on',
        body: 'Exercise. Eating a bit better.'
        }, {
        title: 'Office modification',
        body: 'Get a new seat'
        }]
    const findNote = function (notes, noteTitle) {
        return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
        })
    }
    const note = findNote(notes, 'my Next trip')
    console.log(note)


























// const notes = [
//     {
//         title: 'work 1',
//         description: 'going to somewhere1',
//         completed: true,

//     },
//     {
//         title: 'work 2',
//         description: 'going to somewhere2',
//         completed: true,

//     },
//     {
//         title: 'work 3',
//         description: 'going to somewhere3',
//         completed: true,

//     },
//     {
//         title: 'work 4',
//         description: 'going to somewhere4',
//         completed: true,

//     },
//     {
//         title: 'work 5',
//         description: 'going to somewhere5',
//         completed: true,

//     },
//     {
//         title: 'work 6',
//         description: 'going to somewhere6',
//         completed: true,

//     },
//     {
//         title: 'work 7',
//         description: 'going to somewhere7',
//         completed: true,

//     },
//     {
//         title: 'work 8',
//         description: 'going to somewhere8',
//         completed: true,

//     },
//     {
//         title: 'work 9',
//         description: 'going to somewhere9',
//         completed: true,

//     },
//     {
//         title: 'work 10',
//         description: 'going to somewhere 10',
//         completed: true,

//     },
// ]